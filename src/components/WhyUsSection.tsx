import { Shield, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Structured Execution",
    desc: "Weekly cadence, disciplined screening, and fast-kill discipline — no wasted time on low-quality opportunities.",
  },
  {
    icon: BarChart3,
    title: "Institutional Modelling",
    desc: "Floor, base, and max-case financial models with EBITDA normalisation and downside protection built in.",
  },
  {
    icon: Shield,
    title: "Back-Office Integration",
    desc: "We embed as your virtual acquisition function — not an external advisor sending reports.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Why Buyers Work With Us
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Most business owners have acquisition intent but no execution infrastructure. We provide the structured process, modelling discipline, and weekly cadence that turns intent into completed deals.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded border border-border bg-card p-6">
            <p.icon className="mb-4 h-6 w-6 text-accent" />
            <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-lg font-semibold text-card-foreground">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
