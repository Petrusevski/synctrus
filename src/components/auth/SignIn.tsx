import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import AuthLayout from "./AuthLayout";
import PasswordInput from "./PasswordInput";
import SocialButtons from "./SocialButtons";
import { useAuth } from "@/context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const next = useMemo(() => params.get("next") || "/account", [params]);

  useEffect(() => {
    if (user) navigate(next, { replace: true });
  }, [user, navigate, next]);

  async function onEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setMsg(error.message);
    else navigate(next, { replace: true });
  }

  async function reset() {
    if (!email) {
      setMsg("Enter your email above, then click reset.");
      return;
    }
    setBusy(true); setMsg(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/auth/sign-in",
    });
    setBusy(false);
    setMsg(error ? error.message : "Password reset email sent.");
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue learning and submitting case studies."
      footer={
        <p className="text-sm text-neutral-600">
          New here? <Link to="/auth/sign-up" className="font-medium underline">Create account</Link>
        </p>
      }
    >
      <form onSubmit={onEmailPassword} className="space-y-3">
        <input
          className="w-full rounded-xl border px-4 py-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <PasswordInput value={password} onChange={setPassword} />

        <div className="flex items-center justify-between text-sm">
          <div className="text-neutral-600">Use 8+ chars for passwords.</div>
          <button type="button" onClick={reset} className="text-indigo-700 hover:underline">
            Forgot password?
          </button>
        </div>

        <button
          className="w-full rounded-xl bg-indigo-600 text-white px-4 py-3 font-semibold hover:bg-indigo-700 disabled:opacity-50"
          disabled={busy}
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>

        {msg && <p className="text-sm text-rose-600">{msg}</p>}
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-xs text-neutral-500">or</span>
        </div>
      </div>

      <SocialButtons email={email} />
    </AuthLayout>
  );
}
