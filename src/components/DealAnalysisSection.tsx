const DealAnalysisSection = () => (
  <section id="deal-analysis" className="bg-muted px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Example Acquisition Analysis
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-relaxed text-muted-foreground md:text-base">
        A simplified illustration of how we evaluate acquisition opportunities for our clients.
      </p>

      <div className="mx-auto max-w-[720px] rounded-md border border-border bg-card p-8 shadow-sm md:p-10">
        {/* Business Overview */}
        <h3 className="mb-5 font-['Playfair_Display',Georgia,serif] text-lg font-semibold text-foreground">
          Electrical Services Company
        </h3>

        <div className="mb-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Revenue</p>
            <p className="mt-1 text-lg font-bold text-foreground">£2.3m</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">EBITDA</p>
            <p className="mt-1 text-lg font-bold text-foreground">£410k</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Multiple</p>
            <p className="mt-1 text-lg font-bold text-foreground">3.8x</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">EV</p>
            <p className="mt-1 text-lg font-bold text-foreground">£1.56m</p>
          </div>
        </div>

        <hr className="my-7 border-border" />

        {/* Key Risks */}
        <div className="mb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Key Risks Identified</p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Customer concentration — top 3 clients represent 55% of revenue
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Owner dependency — founder manages all key client relationships
            </li>
          </ul>
        </div>

        <hr className="my-7 border-border" />

        {/* Indicative Structure */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Indicative Deal Structure</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded border-2 border-border bg-background p-4 text-center">
              <p className="text-lg font-bold text-foreground">60%</p>
              <p className="mt-1 text-xs text-muted-foreground">Cash</p>
            </div>
            <div className="rounded border-2 border-border bg-background p-4 text-center">
              <p className="text-lg font-bold text-foreground">20%</p>
              <p className="mt-1 text-xs text-muted-foreground">Vendor Loan</p>
            </div>
            <div className="rounded border-2 border-border bg-background p-4 text-center">
              <p className="text-lg font-bold text-foreground">20%</p>
              <p className="mt-1 text-xs text-muted-foreground">Earn-out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DealAnalysisSection;
