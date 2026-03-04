const WhatWeDoSection = () => (
  <section id="what-we-do" className="px-6 py-20 md:py-28">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        How We Operate
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        We run a disciplined weekly cadence inside your back office — from target identification through to deal completion.
      </p>

      <div className="space-y-10">
        {/* Stage 1 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 1</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Build the Acquisition Engine
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">£2,000 per month — 6-month minimum</p>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Define acquisition criteria and build a targeted pipeline of potential sellers. Source opportunities through broker networks, direct outreach and inbound deal flow.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Screen opportunities, filter low-quality deals and coordinate initial vendor conversations. Operate a disciplined weekly cadence to maintain deal momentum.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 2</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Underwrite the Opportunity
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Paid per opportunity</p>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Full financial underwriting including:
          </p>
          <ul className="mb-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Clean EBITDA normalisation</li>
            <li>Base, floor and upside valuation scenarios</li>
            <li>Debt service coverage modelling</li>
            <li>Risk analysis and investment summary</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Indicative deal structure and draft offer / Heads of Terms prepared.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="rounded border border-border bg-card p-6 md:p-8">
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">Stage 3</div>
          <h3 className="mb-1 font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-card-foreground">
            Execute the Transaction
          </h3>
          <p className="mb-4 text-sm font-medium text-accent">Success fee on completion</p>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Funding introductions and lender comparison. Transaction management through diligence, legal coordination and deal structuring.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We manage the process across finance, legal, tax and operations until completion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
