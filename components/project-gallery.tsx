'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projectFilters, projects, type Project, type ProjectFilter } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ProjectCard } from './project-card'
import { ProjectDetailDialog } from './project-detail-dialog'
import { Reveal, SectionLabel } from './primitives'

export function ProjectGallery() {
  const [filter, setFilter] = useState<'All' | ProjectFilter>('All')
  const [active, setActive] = useState<Project | null>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.filters.includes(filter))

  return (
    <section id="projects" className="border-t border-border" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel>02 / Selected Work</SectionLabel>
            <h2 id="projects-heading" className="mt-6 max-w-2xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Built to solve. <span className="text-muted-foreground">Designed to demonstrate.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-1.5">
              {projectFilters.map((f) => {
                const count = f === 'All' ? projects.length : projects.filter((p) => p.filters.includes(f)).length
                const selected = filter === f
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFilter(f)}
                    className={cn(
                      'inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-sm transition-colors',
                      selected
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
                    )}
                  >
                    {f}
                    <span className={cn('font-mono text-[10px]', selected ? 'text-background/60' : 'text-muted-foreground/70')}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <motion.ul layout className="mt-14 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => {
              const featured = i === 0 && visible.length % 2 === 1
              return (
                <motion.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(featured && 'md:col-span-2')}
                >
                  <ProjectCard project={project} featured={featured} onOpen={setActive} />
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {'* Previews are conceptual mockups illustrating each project, not application screenshots.'}
        </p>
      </div>

      <ProjectDetailDialog project={active} onOpenChange={(open) => !open && setActive(null)} />
    </section>
  )
}
