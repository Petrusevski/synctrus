import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { Card, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Pricing(){
  return (
    <Section>
      <Heading kicker="Pricing" title="Choose your engagement" subtitle="Transparent scopes. No surprises." />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {name:"Diagnostic Sprint", price:"€4.9k", pts:["2 weeks","Scorecard & quick wins","90‑day plan"], cta:"Start now"},
          {name:"(Re)Design", price:"€14.9k", pts:["Rules & simulations","Playbook & rollout","Pilot plan"], cta:"Plan redesign"},
          {name:"Operate & Scale", price:"Custom", pts:["Enablement","Weekly cadence","Measurement & guardrails"], cta:"Talk to us"},
        ].map((p,i)=>(
          <Card key={i}><CardBody>
            <div className="text-sm text-neutral-500">{p.name}</div>
            <div className="text-4xl font-extrabold mt-1">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
              {p.pts.map((y,j)=>(<li key={j}>{y}</li>))}
            </ul>
            <div className="mt-6"><Button to="/contact" variant="primary">{p.cta}</Button></div>
          </CardBody></Card>
        ))}
      </div>
    </Section>
  );
}
