const steps = [
  {title: "Discover", desc: "Stakeholder interviews, data & tooling review, CX mapping."},
  {title: "Diagnose", desc: "Gap analysis vs best practices; margin & LTV modeling."},
  {title: "Design", desc: "Program blueprint: mechanics, rules, comms, and analytics."},
  {title: "Deliver", desc: "Roadmap, experiments, implementation support, governance."},
]

export default function Process() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">How we work</h2>
          <p className="text-gray-600">A pragmatic 4D framework to move from idea to impact.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl card/70 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="text-4xl font-extrabold text-brand-600 mb-2">{i+1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
