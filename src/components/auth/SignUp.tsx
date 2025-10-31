import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // Common fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User type: b2b or b2c
  const [userType, setUserType] = useState<"b2c" | "b2b">("b2c");

  // B2C fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // B2B fields
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [country, setCountry] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMsg(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;
    if (!user) {
      setMsg("Signup succeeded, but user not created. Check email verification.");
      setLoading(false);
      return;
    }

    // Insert profile
    const profileData: any = {
      id: user.id,
      user_type: userType,
      created_at: new Date().toISOString(),
    };

    if (userType === "b2c") {
      profileData.first_name = firstName;
      profileData.last_name = lastName;
    } else {
      profileData.company_name = companyName;
      profileData.industry = industry;
      profileData.vat_number = vatNumber;
      profileData.country = country;
    }

    const { error: pErr } = await supabase.from("profiles").insert(profileData);
    if (pErr) {
      setMsg(`Profile error: ${pErr.message}`);
    } else {
      setMsg("Account created successfully! Check your email for confirmation.");
      nav("/auth/sign-in");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-center mb-1">Create Account</h1>
        <p className="text-center text-neutral-600 mb-6">
          Join our platform — for individuals or businesses.
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Type Selector */}
          <div className="flex justify-center gap-4 mb-2">
            <button
              type="button"
              onClick={() => setUserType("b2c")}
              className={`px-4 py-2 rounded-full border text-sm ${
                userType === "b2c" ? "bg-black text-white" : "hover:bg-neutral-100"
              }`}
            >
              Personal
            </button>
            <button
              type="button"
              onClick={() => setUserType("b2b")}
              className={`px-4 py-2 rounded-full border text-sm ${
                userType === "b2b" ? "bg-black text-white" : "hover:bg-neutral-100"
              }`}
            >
              Business
            </button>
          </div>

          {/* Shared fields */}
          <div>
            <label className="block text-sm text-neutral-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-xl border px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Conditional fields */}
          {userType === "b2c" ? (
            <>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-sm text-neutral-600 mb-1">First name</label>
                  <input
                    className="w-full rounded-xl border px-4 py-3"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-neutral-600 mb-1">Last name</label>
                  <input
                    className="w-full rounded-xl border px-4 py-3"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">Company Name</label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">Industry</label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-sm text-neutral-600 mb-1">VAT Number</label>
                  <input
                    className="w-full rounded-xl border px-4 py-3"
                    value={vatNumber}
                    onChange={(e) => setVatNumber(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-neutral-600 mb-1">Country</label>
                  <input
                    className="w-full rounded-xl border px-4 py-3"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-black text-white py-3 font-semibold hover:bg-neutral-900"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign up"}
          </button>

          {msg && <p className="text-center text-sm text-neutral-700">{msg}</p>}

          <p className="text-center text-sm text-neutral-600 mt-3">
            Already have an account?{" "}
            <Link to="/auth/sign-in" className="underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
