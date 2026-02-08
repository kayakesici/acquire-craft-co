import { Briefcase, Target, Settings } from "lucide-react";

const credentials = [
  { icon: Briefcase, text: "UK SME acquisition focus" },
  { icon: Target, text: "Execution-first, not brokerage" },
  { icon: Settings, text: "Process-driven and buyer-aligned" },
];

const TeamSection = () => (
  <section className="bg-muted px-6 py-20 md:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Who We Are
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        The Acquisition Team is built by practitioners with direct experience in UK small-cap acquisitions, modelling, diligence execution, and transaction support.
      </p>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        We bring a structured, institutional approach typically seen in private equity and corporate finance — adapted for serious SME buyers.
      </p>

      {/* Headshot placeholder */}
      <div className="mx-auto mb-10 flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
        <span className="text-xs text-muted-foreground">Photo</span>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
        {credentials.map((c) => (
          <div key={c.text} className="flex items-center gap-2">
            <c.icon className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">{c.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
