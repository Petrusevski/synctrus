import Container from "./ui/Container";
import Button from "./ui/Button";
import { Stat } from "./ui/Card";
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* ===== Decorative background ===== */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base radial glow */}
        <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,214,164,0.3),rgba(255,255,255,0))]" />

        {/* Animated blurred blobs */}
        <span className="hero-blob hero-blob--1" />
        <span className="hero-blob hero-blob--2" />
        <span className="hero-blob hero-blob--3" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <div className="h-full w-full [background-size:40px_40px] [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]" />
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text section */}
          <div className="relative z-10">
            <p className="kicker mb-3">Boutique Loyalty Consultancy</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Design loyalty programs your customers — and finance team — will love
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              We fix underperforming mechanics, architect better tiers & rewards,
              and prove lift with real numbers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900 transition-colors"
              >
                Start a diagnostic →
              </a>
              <a
                href="/services/audit"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold border border-neutral-300 hover:bg-neutral-50 transition-colors"
              >
                See how we audit
              </a>
            </div>
          </div>

          {/* Card & animated dots */}
          <div className="relative">
            <div className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="text-sm text-neutral-500">Value Mechanics</div>
              <div className="mt-2 text-2xl font-semibold">
                Points · Tiers · Rewards · Boosters
              </div>
              <p className="mt-2 text-neutral-600">
                We model margin, liability & engagement, then pilot with clear success gates.
              </p>
            </div>

            {/* Animated orbiting dots */}
            <span className="hero-dot hero-dot--a" />
            <span className="hero-dot hero-dot--b" />
            <span className="hero-dot hero-dot--c" />
          </div>
        </div>
      </div>
    </section>
  );
}
