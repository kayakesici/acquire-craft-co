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
  <section id="why-us" className="bg-muted px-6 py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Why Buyers Engage Us
      </h2>
      <p className="mx-auto mb-4 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Most acquisitions fail due to poor deal selection and lack of execution discipline.
      </p>
      <p className="mx-auto mb-12 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We provide the structured pipeline, financial modelling rigour and weekly deal cadence required to convert acquisition intent into completed transactions.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-md border border-border bg-card p-8 shadow-sm md:p-10">
            <p.icon className="mb-5 h-8 w-8 text-accent" />
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
