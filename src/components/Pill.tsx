import { ReactNode } from "react";
export default function Pill({children}:{children: ReactNode}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-sm shadow-sm">
      {children}
    </span>
  );
}
