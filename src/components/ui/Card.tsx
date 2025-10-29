import { ReactNode } from "react";
export function Card({children,className=""}:{children:ReactNode; className?:string}){
  return <div className={`rounded-2xl border border-neutral-200 bg-white ${className}`}>{children}</div>;
}
export function CardBody({children,className=""}:{children:ReactNode; className?:string}){
  return <div className={`p-6 ${className}`}>{children}</div>;
}
export function Stat({label,value,meta}:{label:string; value:string; meta?:string}){
  return (
    <div className="rounded-xl border border-neutral-200 p-4">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
      {meta && <div className="text-xs text-neutral-500 mt-1">{meta}</div>}
    </div>
  );
}
