import { Shield, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Disciplined Deal Selection",
    desc: "Fast-kill screening eliminates low-quality flow. Every opportunity in your pipeline has passed a structured filter.",
  },
  {
    icon: BarChart3,
    title: "Institutional Modelling",
    desc: "Floor, base, and max-case financials with normalised EBITDA, debt service coverage, and downside protection built in.",
  },
  {
    icon: Shield,
    title: "Embedded Execution",
    desc: "We operate inside your back office as a virtual acquisition function — not an external advisor producing reports.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Why Buyers Engage Us
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Most business owners have acquisition intent but no execution infrastructure. We provide the structured process, modelling discipline, and weekly cadence that converts intent into completed transactions.
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
