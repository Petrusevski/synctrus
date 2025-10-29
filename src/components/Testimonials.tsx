const quotes = [
  { name: "Head of CRM, Fashion", text: "They turned our stale cashback into a tiered program that actually drives repeat—without margin pain."},
  { name: "CX Lead, Grocery", text: "Actionable audit findings in two weeks. Clear roadmap, measurable wins in under a quarter."},
  { name: "CMO, Telco", text: "Finally a partner who speaks LTV and finance, not just points and pretty emails."},
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">What clients say</h2>
          <p className="text-gray-600">Proof beats promises. Here’s what partners report back.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="p-6 rounded-2xl card/70 shadow-sm hover:shadow-md transition-shadow bg-white">
              <blockquote className="text-gray-800">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
