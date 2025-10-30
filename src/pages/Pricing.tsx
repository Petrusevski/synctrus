import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { Card, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      tagline: "For early-stage brands or pilots",
      pts: [
        "Audit of existing loyalty setup",
        "Quick win recommendations",
        "High-level roadmap",
      ],
      cta: "Talk to us",
    },
    {
      name: "Professional",
      tagline: "For teams ready to optimize",
      pts: [
        "Program redesign blueprint",
        "Customer segmentation model",
        "KPI framework & benchmarks",
      ],
      cta: "Talk to us",
    },
    {
      name: "Growth",
      tagline: "For scaling and automation",
      pts: [
        "Automation workflow mapping",
        "Omnichannel trigger setup",
        "Quarterly optimization reviews",
      ],
      cta: "Talk to us",
    },
    {
      name: "Advanced",
      tagline: "For complex, multi-region operations",
      pts: [
        "Tier & benefit modeling",
        "API & CRM integration plan",
        "Data quality & fraud guardrails",
      ],
      cta: "Talk to us",
    },
    {
      name: "Enterprise",
      tagline: "For global loyalty transformation",
      pts: [
        "End-to-end strategic design",
        "Governance & measurement framework",
        "Onsite workshops & executive advisory",
      ],
      cta: "Talk to us",
    },
  ];

  return (
    <Section>
      <Heading
        kicker="Pricing"
        title="Choose your engagement tier"
        subtitle="Tailored scopes for every growth stage — reach out for custom pricing."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <Card key={i}>
            <CardBody>
              <div className="text-sm text-neutral-500">{p.name}</div>
              <div className="text-lg font-semibold text-neutral-800 mt-1">
                {p.tagline}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                {p.pts.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button to="/contact" variant="primary">
                  {p.cta}
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
