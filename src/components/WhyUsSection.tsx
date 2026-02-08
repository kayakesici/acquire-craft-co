import { Shield, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Disciplined Deal Selection",
    desc: "Avoid wasted time and low-quality opportunities through rigorous screening and fast-kill discipline.",
  },
  {
    icon: BarChart3,
    title: "Institutional Execution",
    desc: "Modelling, structure, and diligence management at a level typically reserved for PE and corporate finance.",
  },
  {
    icon: Shield,
    title: "Buyer-Aligned Incentives",
    desc: "Process-led support through to close — our success is tied to yours.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Why Choose The Acquisition Team
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Most business buyers have intent, but lack an execution engine. We operate as your outsourced buy-side team — bringing institutional-grade screening, modelling, and transaction process to UK SME acquisitions.
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
