import { ReactNode } from "react";
type Props = { children: ReactNode; to?: string; onClick?: ()=>void; variant?: "primary"|"ghost"; size?: "md"|"lg"; className?: string; };
export default function Button({children,to,onClick,variant="primary",size="md",className=""}:Props){
  const base = "inline-flex items-center justify-center rounded-xl font-semibold transition-colors border";
  const sizes = size==="lg" ? "px-5 py-3" : "px-4 py-2.5";
  const styles = variant==="primary"
    ? "bg-black text-white border-black hover:bg-neutral-900"
    : "bg-white text-black border-neutral-200 hover:bg-neutral-50";
  const cls = `${base} ${sizes} ${styles} ${className}`;
  if(to){ return <a href={to} className={cls}>{children}</a>; }
  return <button onClick={onClick} className={cls}>{children}</button>;
}
