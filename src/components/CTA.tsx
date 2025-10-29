import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-neutral-50 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to fix your loyalty program?</h3>
            <p className="text-white/90 mt-1">Get a fast audit with ROI opportunities and a clear 90‑day plan.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  )
}
