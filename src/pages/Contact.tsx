import { useState } from "react";
import { supabase } from "../lib/supabase"; // <-- adjust if your path is different

type Form = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
};

const initial: Form = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  message: "",
};

export default function Contact() {
  const [data, setData] = useState<Form>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    // minimal client-side validation
    if (!data.name || !data.email || !data.message) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);

    const payload = {
      ...data,
      origin: typeof window !== "undefined" ? window.location.href : "",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    const { error } = await supabase.from("leads").insert(payload);

    setLoading(false);

    if (error) {
      console.error("[Supabase insert error]", error);
      setErrorMsg(
        "We couldn't send your request right now. Please try again in a moment."
      );
      return;
    }

    setSubmitted(true);
    setData(initial);
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h1 className="text-2xl font-bold">Thanks! 🎉</h1>
          <p className="mt-2 text-gray-700">
            Your request has been received. We’ll get back to you shortly.
          </p>
          <button
            className="mt-6 rounded-xl bg-black px-5 py-3 font-semibold text-white"
            onClick={() => setSubmitted(false)}
          >
            Send another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Talk to us</h1>
      <p className="mt-2 text-gray-700">
        Fill out the form and we’ll get back to you within one business day.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {errorMsg && (
          <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 p-3 text-red-800">
            {errorMsg}
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name *
          </label>
          <input
            id="name"
            name="name"
            value={data.name}
            onChange={onChange}
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="company" className="mb-1 text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={data.company}
            onChange={onChange}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Company name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            required
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="name@company.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={data.phone}
            onChange={onChange}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="+389 70 123 456"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="industry" className="mb-1 text-sm font-medium">
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            value={data.industry}
            onChange={onChange}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Retail, FMCG, Telco, Hospitality..."
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="mb-1 text-sm font-medium">
            How can we help? *
          </label>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={onChange}
            required
            rows={6}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            placeholder="Tell us a bit about your current loyalty/engagement challenges..."
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send request"}
          </button>
        </div>
      </form>
    </section>
  );
}
