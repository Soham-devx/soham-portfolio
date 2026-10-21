import { ArrowUpRight, Mail, UserRound as Linkedin } from 'lucide-react'
import { site } from '@/lib/data'
import { GitHubIcon } from './github-icon'
import { Reveal, SectionLabel } from './primitives'

type Channel = {
  label: string
  value: string
  href: string | null
  icon: React.ComponentType<{ className?: string }>
  external: boolean
}

export function ContactSection() {
  const channels: Channel[] = [
    { label: 'GitHub', value: `github.com/${site.githubHandle}`, href: site.github, icon: GitHubIcon, external: true },
    {
      label: 'Email',
      value: site.email ?? 'Email address coming soon',
      href: site.email ? `mailto:${site.email}` : null,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: site.linkedin ? site.linkedin.replace(/^https?:\/\/(www\.)?/, '') : 'LinkedIn profile coming soon',
      href: site.linkedin,
      icon: Linkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className="border-t border-border" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel>05 / Get in Touch</SectionLabel>
            <h2 id="contact-heading" className="mt-6 text-balance text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Have an interesting problem <span className="text-signal">in mind?</span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {"I'm"} always interested in connecting with developers, exploring ideas, learning new technologies, and
              building meaningful projects.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <ul className="overflow-hidden rounded-lg border border-border">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:border-signal group-hover:text-signal">
                      <c.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
                      <span className={c.href ? 'mt-0.5 block truncate text-base' : 'mt-0.5 block truncate text-base text-muted-foreground'}>
                        {c.value}
                      </span>
                    </span>
                    {c.href && (
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )
                return (
                  <li key={c.label} className="border-border [&:not(:last-child)]:border-b">
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-center gap-4 p-5 transition-colors hover:bg-card"
                      >
                        {inner}
                        {c.external && <span className="sr-only">(opens in a new tab)</span>}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 opacity-80">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
