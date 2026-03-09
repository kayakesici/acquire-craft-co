const steps = [
  { title: "Origination", desc: "Targeted sourcing of potential acquisition opportunities and inbound deal screening." },
  { title: "Screening", desc: "Initial review of opportunities, quick financial assessment, and short deal summaries." },
  { title: "Financial Analysis", desc: "Financial modelling, EBITDA adjustments, and valuation scenarios." },
  { title: "Offer & Structure", desc: "Indicative deal structure and support preparing Heads of Terms." },
  { title: "Diligence & Close", desc: "Coordination across lenders, lawyers, and accountants through to completion." },
];

const ProcessSection = () => (
  <section id="process" className="bg-muted px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Deal Execution Process
      </h2>
      <p className="mx-auto mb-14 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A structured five-stage process from origination through to completion.
      </p>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card text-xl font-bold text-primary">
              {i + 1}
            </div>
            <h3 className="mt-5 text-sm font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-10 md:hidden">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card text-xl font-bold text-primary">
              {i + 1}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
