const metrics = [
  "200+ vendor conversations",
  "100+ opportunities screened",
  "UK SME acquisition focus",
  "Bolt-on acquisition strategies",
];

const CredibilityStrip = () => (
  <section className="border-y border-border bg-card px-6 py-3.5">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2">
      {metrics.map((m, i) => (
        <span key={m} className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {i > 0 && <span className="hidden text-border sm:inline">|</span>}
          {m}
        </span>
      ))}
    </div>
  </section>
);

export default CredibilityStrip;
