const metrics = [
  "200+ vendor conversations",
  "100+ opportunities screened",
  "Financial modelling discipline",
  "UK SME acquisition focus",
];

const CredibilityStrip = () => (
  <section className="border-y border-border bg-card px-6 py-5">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2">
      {metrics.map((m, i) => (
        <span key={m} className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {i > 0 && <span className="hidden text-border sm:inline">|</span>}
          {m}
        </span>
      ))}
    </div>
  </section>
);

export default CredibilityStrip;
