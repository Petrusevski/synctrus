// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

type SessionT = Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"];
type UserT = Awaited<ReturnType<typeof supabase.auth.getUser>>["data"]["user"];

type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  user_type?: "b2c" | "b2b";
};

type AuthContextType = {
  initialized: boolean;   // ✅ true once we know the session from storage or event
  user: UserT | null;
  session: SessionT | null;
  profile: Profile | null;
  loading: boolean;       // background profile fetch
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  initialized: false,
  user: null,
  session: null,
  profile: null,
  loading: true,
  signOut: async () => {},
  refresh: async () => {},
});

async function fetchProfile(uid: string) {
  const { data } = await supabase.from("profiles").select("*").eq("id", uid).single();
  return (data as Profile) ?? null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState<UserT | null>(null);
  const [session, setSession] = useState<SessionT | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchingRef = useRef(false);

  // One-time hydration + event wiring
  useEffect(() => {
    let alive = true;

    (async () => {
      // 1) Hydrate from storage quickly
      const { data } = await supabase.auth.getSession();
      if (!alive) return;

      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      setInitialized(true); // ✅ we now have an answer (even if null)

      // 2) Fetch profile if needed
      if (data.session?.user && !fetchingRef.current) {
        fetchingRef.current = true;
        const p = await fetchProfile(data.session.user.id);
        if (!alive) return;
        setProfile(p);
        fetchingRef.current = false;
      }
      setLoading(false);
    })();

    // 3) Keep in sync with Supabase auth across tabs/refresh
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      // KEY: never "flash" to logged-out during INITIAL_SESSION
      if (event === "INITIAL_SESSION") {
        setInitialized(true);
      }

      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED" || event === "INITIAL_SESSION") {
        setSession(newSession ?? null);
        setUser(newSession?.user ?? null);

        if (newSession?.user && !fetchingRef.current) {
          fetchingRef.current = true;
          const p = await fetchProfile(newSession.user.id);
          setProfile(p);
          fetchingRef.current = false;
        }
      }

      if (event === "SIGNED_OUT" || event === "PASSWORD_RECOVERY") {
        setSession(null);
        setUser(null);
        setProfile(null);
      }
    });

    // 4) Re-hydrate when tab becomes visible (covers long idle in background tabs)
    const onVisible = async () => {
      if (document.visibilityState !== "visible") return;
      const { data } = await supabase.auth.getSession();
      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      if (data.session?.user) {
        const p = await fetchProfile(data.session.user.id);
        setProfile(p);
      }
      setInitialized(true);
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);

  const value = useMemo<AuthContextType>(() => ({
    initialized,
    user,
    session,
    profile,
    loading,
    signOut: async () => {
      await supabase.auth.signOut();
      setProfile(null);
    },
    refresh: async () => {
      if (!user) return;
      setLoading(true);
      const p = await fetchProfile(user.id);
      setProfile(p);
      setLoading(false);
    }
  }), [initialized, user, session, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
