import { Clock, BarChart3, Target } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Busy Business Owners",
    desc: "Many business owners want to grow through acquisition, but running the business leaves little time to consistently find and review the right opportunities.",
  },
  {
    icon: Target,
    title: "Disciplined Pipeline Management",
    desc: "We maintain a structured pipeline so you only spend time reviewing the opportunities that fit your criteria.",
  },
  {
    icon: BarChart3,
    title: "Efficient Financial Analysis",
    desc: "We quickly assess financials so you understand the risks and potential of each opportunity before moving forward.",
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
            <p.icon className="mb-5 h-10 w-10 text-accent" />
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
