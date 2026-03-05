const WhatWeDoSection = () => (
  <section id="what-we-do" className="bg-muted px-6 py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        How We Operate
      </h2>
      <p className="mx-auto mb-12 max-w-[720px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We run a disciplined weekly cadence inside your back office — from target identification through to deal completion.
      </p>

      <div className="space-y-8">
        {/* Stage 1 */}
        <div className="rounded-md border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">Stage 1</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground md:text-2xl">
            Build the Acquisition Engine
          </h3>
          <p className="mb-5 text-sm font-medium text-accent">£2,000 per month — 6-month minimum</p>
          <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Define acquisition criteria and build a targeted pipeline of potential sellers. Source opportunities through broker networks, direct outreach and inbound deal flow.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Screen opportunities, filter low-quality deals and coordinate initial vendor conversations. Operate a disciplined weekly cadence to maintain deal momentum.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="rounded-md border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">Stage 2</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground md:text-2xl">
            Underwrite the Opportunity
          </h3>
          <p className="mb-5 text-sm font-medium text-accent">Paid per opportunity</p>
          <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Full financial underwriting including:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            <li>Clean EBITDA normalisation</li>
            <li>Base, floor and upside valuation scenarios</li>
            <li>Debt service coverage modelling</li>
            <li>Risk analysis and investment summary</li>
          </ul>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Indicative deal structure and draft offer / Heads of Terms prepared.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="rounded-md border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">Stage 3</div>
          <h3 className="mb-2 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground md:text-2xl">
            Execute the Transaction
          </h3>
          <p className="mb-5 text-sm font-medium text-accent">Success fee on completion</p>
          <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Funding introductions and lender comparison. Transaction management through diligence, legal coordination and deal structuring.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We manage the process across finance, legal, tax and operations until completion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
