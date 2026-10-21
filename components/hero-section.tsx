import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/data'
import { HeroVisual } from './hero-visual'
import { GitHubIcon } from './github-icon'
import { Reveal, buttonPrimary, buttonSecondary } from './primitives'

const heroTags = ['Java', 'C/C++', 'Data Structures', 'Networking', 'AI/ML']

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16" aria-labelledby="hero-heading">
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 *:min-w-0 px-5 pb-20 pt-14 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-background/70 py-1.5 pl-2.5 pr-3.5 text-xs text-muted-foreground backdrop-blur">
              <span className="size-2 rounded-full bg-signal animate-pulse-dot" aria-hidden="true" />
              Open to learning, collaboration &amp; opportunities
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Computer Science <span className="text-signal">×</span> Data Science
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-5 text-balance text-[2.75rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Engineering Ideas Into <span className="text-signal">Intelligent</span> Systems.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"I'm"} a Computer Science student specializing in Data Science, passionate about software engineering, system
              design, data structures, networking, and AI/ML. I build practical projects that combine strong programming
              fundamentals with real-world problem-solving.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#projects" className={buttonPrimary}>
                Explore My Work
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a href="#contact" className={buttonSecondary}>
                {"Let's Connect"}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 px-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
                github.com/{site.githubHandle}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground" aria-label="Core technologies">
              {heroTags.map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-signal">{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-5">
          <HeroVisual />
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground lg:flex"
      >
        Scroll
        <span className="relative block h-10 w-px bg-border" aria-hidden="true">
          <span className="absolute inset-0 bg-signal animate-scroll-line" />
        </span>
      </a>
    </section>
  )
}
