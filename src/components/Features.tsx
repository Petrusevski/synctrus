const features = [
  {
    title: "Program Audit",
    desc: "Comprehensive review of mechanics, value exchange, fraud controls, and CX across channels.",
  },
  {
    title: "Program (Re)Design",
    desc: "Tiers, earn rates, boosters, vouchers, and breakage modeled to hit margin targets.",
  },
  {
    title: "Engagement Strategy",
    desc: "Personalized journeys via email, SMS, app, and in‑store triggers to increase frequency.",
  },
  {
    title: "Measurement & Analytics",
    desc: "North‑star metrics, dashboards, test design, and incremental lift measurement.",
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">What we do</h2>
          <p className="text-gray-600">From quick wins to full redesigns—delivered in sprints with clear ROI.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="fade-in p-6 card/70 shadow-sm hover:shadow-md transition-shadow rounded-2xl hover:shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-neutral-100 mb-3"></div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
