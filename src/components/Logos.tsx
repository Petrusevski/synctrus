export default function Logos() {
  const logos = ["Retail", "Telco", "Fashion", "Hospitality", "Grocery", "Beauty"];
  return (
    <section className="py-10 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6">Experienced across industries</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((l, i) => (
            <div key={i} className="text-gray-500 font-semibold tracking-wide">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
