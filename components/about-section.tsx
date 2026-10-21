import { Cpu, Layers, Sparkles } from 'lucide-react'
import { Reveal, SectionLabel } from './primitives'

const values = [
  {
    no: '01',
    title: 'Systems Thinking',
    body: 'Understanding software architecture, operating-system concepts, memory management, and system design.',
    icon: Cpu,
  },
  {
    no: '02',
    title: 'Engineering Fundamentals',
    body: 'Applying object-oriented programming, data structures, algorithms, and clean coding principles.',
    icon: Layers,
  },
  {
    no: '03',
    title: 'Intelligent Technologies',
    body: 'Exploring Data Science and AI/ML through practical learning and project development.',
    icon: Sparkles,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>01 / The Developer</SectionLabel>
            <h2 id="about-heading" className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Curiosity drives the code. <span className="text-muted-foreground">Engineering shapes the solution.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p>
              {"I'm"} a Computer Science student specializing in Data Science. What pulls me into this field is the question
              of <span className="text-foreground">how things actually work underneath</span> — how a file system tracks its
              files, how memory is laid out inside a running process, how two machines talk over a socket.
            </p>
            <p>
              I learn by building. I write structured, object-oriented code, work through data structures and algorithms,
              and spend time debugging until I understand why something broke — not just that it did. Alongside systems
              and networking, {"I'm"} exploring data-driven technologies and machine learning.
            </p>
            <p className="font-mono text-sm text-muted-foreground/80">
              {'>'} turning concepts into functional projects, one commit at a time.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid overflow-hidden rounded-lg border border-border md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.no} className="border-border not-last:border-b md:not-last:border-b-0 md:not-last:border-r">
              <Reveal delay={i * 0.08} className="group relative h-full p-7 transition-colors hover:bg-card sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-signal">{v.no}</span>
                  <v.icon className="size-5 text-muted-foreground transition-colors group-hover:text-signal" aria-hidden="true" />
                </div>
                <h3 className="mt-14 text-xl font-medium tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
