export default function Heading({kicker, title, subtitle}:{kicker?:string; title:string; subtitle?:string}){
  return (
    <div className="mb-10">
      {kicker && <div className="uppercase tracking-wider text-[12px] text-neutral-500 font-semibold">{kicker}</div>}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">{title}</h2>
      {subtitle && <p className="text-neutral-600 mt-3 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
