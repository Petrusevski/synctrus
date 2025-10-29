import { ReactNode } from "react";
import Container from "./Container";
export default function Section({children, className=""}:{children:ReactNode; className?:string}){
  return <section className={`py-16 md:py-24 ${className}`}><Container>{children}</Container></section>;
}
