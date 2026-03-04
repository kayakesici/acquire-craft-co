const points = [
  "Owner-managed businesses (£1m–£20m revenue)",
  "Acquisition entrepreneurs and private investors",
  "Companies pursuing bolt-on acquisition strategies",
  "Buyers seeking structured deal execution rather than brokers",
];

const WhoWeWorkWithSection = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Who We Work With
      </h2>
      <p className="mb-10 text-sm text-muted-foreground md:text-base">
        Owner-operators and investors actively acquiring UK businesses.
      </p>
      <div className="flex flex-col items-center gap-3">
        {points.map((p) => (
          <p key={p} className="text-sm text-muted-foreground md:text-base">
            {p}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWithSection;
