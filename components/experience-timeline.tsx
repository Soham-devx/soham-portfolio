import { experience } from '@/lib/data'
import { Reveal, SectionLabel } from './primitives'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-border" aria-labelledby="experience-heading">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>04 / Experience</SectionLabel>
            <h2 id="experience-heading" className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Learning, <span className="text-muted-foreground">in progress.</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Academic study, structured learning programs, and the projects that connect them. Each entry is labelled by
              type so coursework, programs, and internships stay clearly distinct.
            </p>
          </div>
        </Reveal>

        <ol className="relative lg:col-span-7 lg:col-start-6">
          <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-border" />
          {experience.map((entry, i) => (
            <li key={entry.title} className="relative pb-12 pl-10 last:pb-0">
              <Reveal delay={i * 0.06}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 size-[11px] rounded-full border border-signal bg-background"
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-signal">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-muted-foreground">{entry.kind}</span>
                  {entry.period && <span className="text-muted-foreground">· {entry.period}</span>}
                </div>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em]">{entry.title}</h3>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">{entry.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                  {entry.focus.map((f) => (
                    <li key={f} className="rounded-md border border-border px-2.5 py-1 text-xs text-foreground/85">
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
