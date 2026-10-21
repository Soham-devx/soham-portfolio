import { Binary, BrainCircuit, Code2, Network, Wrench } from 'lucide-react'
import { skillGroups } from '@/lib/data'
import { Reveal, SectionLabel } from './primitives'

const icons = { LANG: Code2, CORE: Binary, NET: Network, TOOLS: Wrench, DATA: BrainCircuit } as const

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>03 / Tech Stack</SectionLabel>
            <h2 id="skills-heading" className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              The tools behind the thinking.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Technologies and concepts {"I've"} studied and used in coursework and projects. No percentages — just an honest
              map of where {"I've"} been spending my time.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden rounded-lg border border-border">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.code as keyof typeof icons]
            return (
              <Reveal key={group.code} delay={i * 0.05}>
                <div className="group grid gap-5 border-border p-6 transition-colors hover:bg-card sm:p-8 md:grid-cols-12 md:items-center [&:not(:last-child)]:border-b">
                  <div className="flex items-center gap-4 md:col-span-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-signal group-hover:text-signal">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{group.code}</p>
                      <h3 className="mt-0.5 text-lg font-medium tracking-tight">{group.title}</h3>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:col-span-8">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
