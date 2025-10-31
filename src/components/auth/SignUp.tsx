import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import AuthLayout from "./AuthLayout";
import PasswordInput from "./PasswordInput";
import SocialButtons from "./SocialButtons";

function strength(pw: string) {
  // very simple heuristic
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 5);
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const next = useMemo(() => params.get("next") || "/account", [params]);
  const score = strength(password);
  const labels = ["Very weak", "Weak", "Okay", "Good", "Strong"];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) {
      setMsg("Please agree to the Terms and Privacy Policy.");
      return;
    }
    setBusy(true); setMsg(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName }, emailRedirectTo: window.location.origin }
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else setMsg("Check your inbox to confirm your account. You can close this tab.");
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start learning and submit solutions to real-world loyalty problems."
      footer={
        <p className="text-sm text-neutral-600">
          Already have an account? <Link to="/auth/sign-in" className="font-medium underline">Sign in</Link>
        </p>
      }
    >
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded-xl border px-4 py-3"
          placeholder="Full name"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
          required
          autoComplete="name"
        />
        <input
          className="w-full rounded-xl border px-4 py-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <div className="space-y-1">
          <PasswordInput value={password} onChange={setPassword} />
          <div className="h-2 rounded bg-neutral-100">
            <div
              className="h-2 rounded transition-all"
              style={{
                width: `${(score / 5) * 100}%`,
                background:
                  score <= 2 ? "#ef4444" : score === 3 ? "#f59e0b" : "#10b981",
              }}
            />
          </div>
          <p className="text-xs text-neutral-600">
            Password strength: <b>{labels[Math.max(0, score - 1)] || "Very weak"}</b>
          </p>
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={agree}
            onChange={(e)=>setAgree(e.target.checked)}
          />
          <span className="text-neutral-700">
            I agree to the <Link to="/terms" className="underline">Terms</Link> and{" "}
            <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </span>
        </label>

        <button
          className="w-full rounded-xl bg-indigo-600 text-white px-4 py-3 font-semibold hover:bg-indigo-700 disabled:opacity-50"
          disabled={busy}
        >
          {busy ? "Creating account…" : "Create account"}
        </button>

        {msg && <p className="text-sm mt-1 {msg.startsWith('Check') ? 'text-emerald-700' : 'text-rose-600'}">{msg}</p>}
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
