import { Shield, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Disciplined Deal Selection",
    desc: "We filter out weak opportunities so you only spend time on deals worth pursuing.",
  },
  {
    icon: BarChart3,
    title: "Clear Financial Analysis",
    desc: "Proper financial modelling before you commit — with base, floor and upside scenarios.",
  },
  {
    icon: Shield,
    title: "Embedded Execution",
    desc: "We work as part of your team, not an external adviser producing reports.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="bg-card px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Why Buyers Work With Us
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Most acquisitions fail because of poor deal selection or lack of process. We give you the sourcing, analysis and execution support to get deals done properly.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-md border border-border bg-background p-8 shadow-sm md:p-10">
            <p.icon className="mb-5 h-9 w-9 text-accent" />
            <h3 className="mb-3 font-['Playfair_Display',Georgia,serif] text-lg font-semibold text-card-foreground">
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
