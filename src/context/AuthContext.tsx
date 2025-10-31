import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

type SessionT = Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"];
type UserT = Awaited<ReturnType<typeof supabase.auth.getUser>>["data"]["user"];

type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

type AuthContextType = {
  initialized: boolean;           // ✅ auth has hydrated from storage
  loading: boolean;               // background loading (e.g., fetching profile)
  session: SessionT | null;
  user: UserT | null;
  profile: Profile | null;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;   // re-fetch profile on demand
};

const AuthContext = createContext<AuthContextType>({
  initialized: false,
  loading: true,
  session: null,
  user: null,
  profile: null,
  signOut: async () => {},
  refresh: async () => {},
});

async function fetchProfile(uid: string) {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", uid).single();
  if (error) return null;
  return data as Profile;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionT | null>(null);
  const [user, setUser] = useState<UserT | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const loadingProfile = useRef(false);

  // One-shot hydration from persisted session (localStorage)
  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;

      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        loadingProfile.current = true;
        const p = await fetchProfile(data.session.user.id);
        if (!active) return;
        setProfile(p);
        loadingProfile.current = false;
      }

      setInitialized(true);  // ✅ we’re now hydrated from storage
      setLoading(false);
    })();

    // Keep session in sync across tabs & on refresh token events
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);

      if (newSession?.user) {
        // Only refetch profile if we don’t have it or user changed
        if (!profile || profile.id !== newSession.user.id) {
          loadingProfile.current = true;
          const p = await fetchProfile(newSession.user.id);
          setProfile(p);
          loadingProfile.current = false;
        }
      } else {
        setProfile(null);
      }

      // After the very first event, we’re definitely hydrated
      setInitialized(true);
    });

    return () => {
      sub.subscription.unsubscribe();
      active = false;
    };
  }, []); // eslint-disable-line

  const value = useMemo<AuthContextType>(
    () => ({
      initialized,
      loading: loading || loadingProfile.current,
      session,
      user,
      profile,
      signOut: async () => {
        await supabase.auth.signOut();
        setProfile(null);
      },
      refresh: async () => {
        if (!user) return;
        const p = await fetchProfile(user.id);
        setProfile(p);
      },
    }),
    [initialized, loading, session, user, profile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
