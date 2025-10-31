import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function SocialButtons({ email }: { email?: string }) {
  const [busy, setBusy] = useState<"google"|"magic"|null>(null);
  const redirectTo = window.location.origin; // post-auth redirect

  async function google() {
    setBusy("google");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });
    if (error) setBusy(null); // Supabase redirects on success
  }

  async function magic() {
    if (!email) return;
    setBusy("magic");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo }
    });
    if (error) alert(error.message);
    setBusy(null);
  }

  return (
    <div className="grid gap-2">
      <button
        onClick={google}
        disabled={!!busy}
        className="rounded-xl border px-4 py-3 w-full font-medium hover:bg-neutral-50 disabled:opacity-50"
      >
        {busy === "google" ? "Opening Google…" : "Continue with Google"}
      </button>
      <button
        onClick={magic}
        disabled={!email || !!busy}
        className="rounded-xl border px-4 py-3 w-full font-medium hover:bg-neutral-50 disabled:opacity-50"
        title={!email ? "Enter email above to receive a magic link" : "Send magic link"}
      >
        {busy === "magic" ? "Sending link…" : "Send magic link"}
      </button>
    </div>
  );
}
