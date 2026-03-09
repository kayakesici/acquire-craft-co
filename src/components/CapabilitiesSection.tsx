import { Search, BarChart3, FileText, Target } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Deal Origination & Pipeline",
    desc: "Systematic sourcing of acquisition opportunities aligned with your criteria.",
  },
  {
    icon: Search,
    title: "Screening & Deal Analysis",
    desc: "We quickly filter opportunities so you focus on the deals worth pursuing.",
  },
  {
    icon: BarChart3,
    title: "Financial Modelling & Valuation",
    desc: "Clear financial analysis with valuation scenarios and downside protection.",
  },
  {
    icon: FileText,
    title: "Transaction Execution",
    desc: "Deal structuring, Heads of Terms preparation, and coordination through completion.",
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="bg-card px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        What We Do
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        Everything you need to find, evaluate and complete UK SME acquisitions.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div key={c.title} className="flex flex-col rounded-md border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-md">
            <c.icon className="mb-4 h-7 w-7 text-accent" />
            <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-base font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
