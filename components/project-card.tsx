import { ArrowUpRight, Maximize2 } from 'lucide-react'
import type { Project } from '@/lib/data'
import { site } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ProjectPreview } from './project-previews'
import { GitHubIcon } from './github-icon'
import { Tag } from './primitives'

export function ProjectCard({
  project,
  featured = false,
  onOpen,
}: {
  project: Project
  featured?: boolean
  onOpen: (project: Project) => void
}) {
  const sourceHref = project.repo ?? site.github
  const sourceLabel = project.repo ? 'Source Code' : 'GitHub Profile'

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/25',
        featured && 'lg:grid lg:grid-cols-12',
      )}
      aria-labelledby={`${project.id}-title`}
    >
      <ProjectPreview
        kind={project.preview}
        label={`Fig. ${project.index}`}
        className={cn('aspect-[16/10] border-b border-border', featured && 'lg:col-span-7 lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 lg:border-r')}
      />

      <div className={cn('flex flex-1 flex-col p-6 sm:p-7', featured && 'lg:col-span-5 lg:p-10')}>
        <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>{project.category}</span>
          <span className="text-signal">{project.index}</span>
        </div>

        <h3
          id={`${project.id}-title`}
          className={cn('mt-5 text-balance font-medium tracking-[-0.02em]', featured ? 'text-3xl sm:text-4xl' : 'text-2xl')}
        >
          {project.name}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Project
            <Maximize2 className="size-3.5" aria-hidden="true" />
            <span className="sr-only">: {project.name} details</span>
          </button>
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3.5 text-sm transition-colors hover:border-foreground/40 hover:bg-muted"
          >
            <GitHubIcon className="size-3.5" />
            {sourceLabel}
            <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">for {project.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  )
}
