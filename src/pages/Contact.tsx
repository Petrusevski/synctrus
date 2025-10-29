import { useState } from "react";

type Form = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

const initial: Form = {name: "", company: "", email: "", phone: "", industry: "", message: ""};

export default function Contact() {
  const [data, setData] = useState<Form>(initial);
  const [submitted, setSubmitted] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setData(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // This is a static template: replace this with your API (Formspree, Netlify, custom backend, etc.)
    console.log("Form submit", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h1 className="text-2xl font-bold text-green-800">Thanks! 🎉</h1>
            <p className="text-gray-700 mt-2">We received your request and will get back shortly.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold  mb-8">Contact</h1>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium">Full Name</label>
            <input required name="name" value={data.name} onChange={onChange} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3" placeholder="Your name" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Company</label>
            <input name="company" value={data.company} onChange={onChange} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3" placeholder="Company name" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input required type="email" name="email" value={data.email} onChange={onChange} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3" placeholder="you@company.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <input name="phone" value={data.phone} onChange={onChange} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3" placeholder="+389 ..." />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Industry</label>
            <select name="industry" value={data.industry} onChange={onChange} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3">
              <option value="">Select...</option>
              <option>Retail</option>
              <option>Telco</option>
              <option>Fashion</option>
              <option>Hospitality</option>
              <option>Grocery</option>
              <option>Beauty</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium">What are you trying to solve?</label>
            <textarea required name="message" value={data.message} onChange={onChange} rows={5} className="w-full rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 px-4 py-3" placeholder="Tell us about your goals, current program, and constraints." />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center rounded-xl bg-brand-600 text-white px-5 py-3 font-semibold hover:bg-brand-700">
              Send request
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
