import { Reveal } from './primitives'

const principles = [
  'Understand the problem before designing the solution.',
  'Prefer clarity, modularity, and maintainable code.',
  'Learn by building, testing, debugging, and improving.',
]

export function EngineeringPhilosophy() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-card" aria-labelledby="philosophy-heading">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden w-[34rem] -translate-y-1/2 text-foreground/10 lg:block"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="130" strokeDasharray="3 6" />
        <circle cx="200" cy="200" r="70" />
        <line x1="0" y1="200" x2="400" y2="200" />
        <line x1="200" y1="0" x2="200" y2="400" />
        <rect x="185" y="185" width="30" height="30" className="fill-signal stroke-none" opacity="0.8" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span className="text-signal">§</span> Engineering Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="mt-8 max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
          >
            {"Good software isn't just written."}{' '}
            <span className="text-muted-foreground">{"It's understood, structured, tested, and refined."}</span>
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {principles.map((p, i) => (
            <li key={p} className="bg-background p-7 sm:p-8">
              <Reveal delay={i * 0.08}>
                <span className="font-mono text-xs text-signal">{`P.0${i + 1}`}</span>
                <p className="mt-10 text-pretty text-xl font-medium leading-snug tracking-tight">{p}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
