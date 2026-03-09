const steps = [
  { title: "Origination", desc: "Targeted sourcing and inbound triage" },
  { title: "Screening", desc: "Fast kill discipline and 1-page deal memos" },
  { title: "Modelling", desc: "Clean valuation, downside case, debt service coverage" },
  { title: "Offer & Structure", desc: "Indicative terms and Heads of Terms support" },
  { title: "Diligence & Close", desc: "Weekly execution cadence through to completion" },
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

      {/* Desktop horizontal */}
      <div className="hidden md:flex md:items-start md:justify-between md:gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-1 flex-col items-center text-center">
            <div className="flex items-center">
             <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card text-lg font-bold text-primary">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="h-px w-full min-w-[48px] bg-border" />
              )}
            </div>
            <h3 className="mt-5 text-sm font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 max-w-[160px] text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="flex flex-col gap-10 md:hidden">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-start gap-5">
            <div className="flex flex-col items-center">
             <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card text-lg font-bold text-primary">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="mt-2 h-10 w-px bg-border" />}
            </div>
            <div className="pt-2.5">
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
