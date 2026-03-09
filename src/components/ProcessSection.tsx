const steps = [
  { title: "Origination", desc: "We source acquisition opportunities aligned with your criteria." },
  { title: "Screening", desc: "We review opportunities quickly and prepare short summaries." },
  { title: "Financial Analysis", desc: "We build financial models and test valuation scenarios." },
  { title: "Offer Letter", desc: "We help prepare the Offer Letter and negotiate deal structure." },
  { title: "Diligence & Close", desc: "We introduce lenders, lawyers and accountants." },
];

const ProcessSection = () => (
  <section id="process" className="bg-muted px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        How a Deal Gets Done
      </h2>
      <p className="mx-auto mb-12 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A clear five-step process from finding opportunities to completing the deal.
      </p>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-primary bg-card text-xl font-bold text-primary">
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
            <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-primary bg-card text-xl font-bold text-primary">
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
