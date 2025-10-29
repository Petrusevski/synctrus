export default function Timeline({items}:{items:{title:string;desc:string}[]}) {
  return (
    <ol className="relative border-l border-gray-200 pl-6 space-y-6">
      {items.map((it, idx)=>(
        <li key={idx} className="group">
          <span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-amber-100"></span>
          <h4 className="font-semibold">{it.title}</h4>
          <p className="text-gray-700 text-sm leading-relaxed">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}
