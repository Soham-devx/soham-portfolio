'use client'

import { ArrowUpRight, Info } from 'lucide-react'
import type { Project } from '@/lib/data'
import { site } from '@/lib/data'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ProjectPreview } from './project-previews'
import { GitHubIcon } from './github-icon'
import { Tag } from './primitives'

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border py-6 sm:grid-cols-4 sm:gap-6">
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</h4>
      <div className="sm:col-span-3">{children}</div>
    </section>
  )
}

export function ProjectDetailDialog({
  project,
  onOpenChange,
}: {
  project: Project | null
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90svh] w-[calc(100%-2rem)] flex-col max-w-3xl gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        {project && (
          <>
            <ProjectPreview headerClassName="pr-12" kind={project.preview} label={`Fig. ${project.index}`} className="aspect-[16/10] shrink-0 overflow-hidden border-b border-border sm:aspect-[16/9]" />

            <div className="px-6 pb-6 pt-7 sm:px-8">
              <DialogHeader className="gap-0 text-left">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-signal">{project.index}</span> — {project.category}
                </p>
                <DialogTitle className="mt-3 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">{project.name}</DialogTitle>
                <DialogDescription className="mt-3 text-pretty text-base leading-relaxed">{project.description}</DialogDescription>
              </DialogHeader>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <DetailBlock label="Overview">
                  <p className="text-pretty leading-relaxed text-muted-foreground">{project.overview}</p>
                </DetailBlock>

                <DetailBlock label="Implementation">
                  <ul className="space-y-2.5">
                    {project.implementation.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 bg-signal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock label="Key Concepts">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.concepts.map((c) => (
                      <li key={c}>
                        <Tag className="text-foreground">{c}</Tag>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                {project.considerations && (
                  <DetailBlock label="Challenges">
                    <ul className="space-y-2.5">
                      {project.considerations.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1 shrink-0 bg-foreground/40" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                )}
              </div>

              <p className="flex gap-2.5 rounded-md border border-border bg-muted/50 p-3.5 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>
                  The preview above is a conceptual mockup, not a screenshot of the application.
                  {project.note && ` ${project.note}`}
                  {!project.repo && ' The individual repository link will be added once confirmed — the button opens the GitHub profile.'}
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={project.repo ?? site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-[filter] hover:brightness-95"
                >
                  <GitHubIcon className="size-4" />
                  {project.repo ? 'View Source Code' : 'Visit GitHub Profile'}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
