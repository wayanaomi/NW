import { trustedTech } from "@/constants/tech-stack";

export function TrustedTech() {
  const loopItems = [...trustedTech, ...trustedTech];

  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="container-custom">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted technologies I build with
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-12">
          {loopItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 text-muted-foreground/80 transition-colors hover:text-primary"
            >
              <tech.icon className="size-6 shrink-0" />
              <span className="whitespace-nowrap text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
