import { useState } from "react";
export default function Accordion({items}:{items:{title:string;body:string}[]}) {
  const [open, setOpen] = useState<number|null>(0);
  return (
    <div className="divide-y divide-gray-200 border border-gray-200/70 rounded-2xl overflow-hidden">
      {items.map((it, i)=>(
        <div key={i}>
          <button
            onClick={()=>setOpen(open===i?null:i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50"
          >
            <span className="font-medium">{it.title}</span>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
          {open===i && (
            <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed bg-white">{it.body}</div>
          )}
        </div>
      ))}
    </div>
  );
}
