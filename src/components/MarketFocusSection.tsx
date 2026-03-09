const focuses = [
  "UK SME acquisitions",
  "Enterprise value £1m–£10m",
  "Owner-managed businesses",
  "Bolt-on acquisition strategies",
  "Profitable operating businesses",
];

const MarketFocusSection = () => (
  <section id="market-focus" className="bg-muted px-6 py-14 md:py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Market Focus
      </h2>
      <p className="mx-auto mb-10 max-w-[680px] text-center text-sm leading-[1.6] text-muted-foreground md:text-base">
        We focus on the UK lower mid-market, where disciplined execution makes the biggest difference.
      </p>

      <ul className="mx-auto w-fit max-w-[380px] list-none space-y-3 pl-0">
        {focuses.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm leading-[1.6] text-muted-foreground md:text-base">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MarketFocusSection;
