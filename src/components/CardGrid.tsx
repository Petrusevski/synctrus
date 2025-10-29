import { ReactNode } from "react";
export default function CardGrid({items}:{items:{title:string;content:ReactNode}[]}) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((it, i)=>(
        <div key={i} className="rounded-2xl border border-gray-200/70 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">{it.title}</h3>
          <div className="text-sm text-gray-700 leading-relaxed">{it.content}</div>
        </div>
      ))}
    </div>
  );
}
