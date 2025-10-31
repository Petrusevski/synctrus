import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

type Profile = {
  id: string;
  user_type: "b2c" | "b2b";
  first_name?: string | null;
  last_name?: string | null;
  birth_date?: string | null;
  gender?: string | null;
  company_name?: string | null;
  industry?: string | null;
  vat_number?: string | null;
  country?: string | null;
  business_size?: string | null;
};

export default function Account() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // load profile on mount
  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) console.error(error);
      else setProfile(data as Profile);
    })();
  }, [user]);

  if (!user) {
    return <main className="p-10 text-center">Please sign in first.</main>;
  }
  if (!profile) {
    return <main className="p-10 text-center">Loading your profile...</main>;
  }

  async function saveProfile() {
  if (!user) return; // ✅ safety check
  
  setLoading(true);
  setMsg(null);

  try {
    const { error } = await supabase
      .from("profiles")
      .update(profile)
      .eq("id", user.id);

    if (error) setMsg(error.message);
    else setMsg("Profile updated successfully!");
  } catch (err: any) {
    console.error(err);
    setMsg("Unexpected error updating profile.");
  } finally {
    setLoading(false);
  }
}


  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-6">My Account</h1>

        {/* user type selector */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setProfile({ ...profile, user_type: "b2c" })}
            className={`px-4 py-2 rounded-full border text-sm ${
              profile.user_type === "b2c"
                ? "bg-black text-white"
                : "hover:bg-neutral-100"
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setProfile({ ...profile, user_type: "b2b" })}
            className={`px-4 py-2 rounded-full border text-sm ${
              profile.user_type === "b2b"
                ? "bg-black text-white"
                : "hover:bg-neutral-100"
            }`}
          >
            Business
          </button>
        </div>

        {profile.user_type === "b2c" ? (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  First name
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.first_name ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, first_name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Last name
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.last_name ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, last_name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Birth date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.birth_date ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, birth_date: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Gender
                </label>
                <select
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.gender ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, gender: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">
                Company name
              </label>
              <input
                className="w-full rounded-xl border px-4 py-3"
                value={profile.company_name ?? ""}
                onChange={(e) =>
                  setProfile({ ...profile, company_name: e.target.value })
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Industry
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.industry ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, industry: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  VAT Number
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.vat_number ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, vat_number: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Country
                </label>
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.country ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, country: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-1">
                  Business size
                </label>
                <select
                  className="w-full rounded-xl border px-4 py-3"
                  value={profile.business_size ?? ""}
                  onChange={(e) =>
                    setProfile({ ...profile, business_size: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={saveProfile}
            disabled={loading}
            className="rounded-xl bg-black text-white px-5 py-2.5 font-semibold hover:bg-neutral-900 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save changes"}
          </button>
        </div>
        {msg && <p className="mt-3 text-sm text-neutral-700">{msg}</p>}
      </div>
    </main>
  );
}
