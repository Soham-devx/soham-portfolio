import { ArrowUpRight } from 'lucide-react'
import { projects, site } from '@/lib/data'
import { GitHubIcon } from './github-icon'
import { Reveal, SectionLabel, buttonPrimary } from './primitives'

type Repo = {
  name: string
  description: string | null
  language: string | null
  url: string
}

type GitHubApiRepo = {
  name: string
  description: string | null
  language: string | null
  html_url: string
  fork: boolean
  pushed_at: string
}

async function getRepos(): Promise<Repo[] | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${site.githubHandle}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = (await res.json()) as GitHubApiRepo[]
    const repos = data
      .filter((r) => !r.fork && r.name.toLowerCase() !== site.githubHandle.toLowerCase())
      .slice(0, 6)
      .map((r) => ({ name: r.name, description: r.description, language: r.language, url: r.html_url }))
    return repos.length > 0 ? repos : null
  } catch {
    return null
  }
}

const fallbackRepos: Repo[] = projects
  .filter((p) => p.repo)
  .map((p) => ({ name: p.name, description: p.description, language: p.tech[0], url: p.repo as string }))

export async function GitHubSection() {
  const live = await getRepos()
  const repos = live ?? fallbackRepos

  return (
    <section id="github" className="border-t border-border" aria-labelledby="github-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Open Source</SectionLabel>
            <h2 id="github-heading" className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              The code behind <span className="text-muted-foreground">the concepts.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
              <GitHubIcon className="size-4" />
              Visit GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-14 flex flex-col gap-6 rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/25 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-center gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-md border border-border bg-background">
                <GitHubIcon className="size-7" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">github.com /</p>
                <p className="mt-1 truncate text-2xl font-medium tracking-tight sm:text-3xl">{site.githubHandle}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {site.github.replace('https://', '')}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>{live ? 'Recently updated repositories' : 'Repositories'}</span>
          <span>{live ? 'via GitHub API' : 'verified links'}</span>
        </div>

        <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <li key={repo.url} className="bg-background">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col p-6 transition-colors hover:bg-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="break-all font-mono text-sm font-medium">{repo.name}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {repo.description ?? 'No description provided.'}
                </p>
                {repo.language && (
                  <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-[11px] text-muted-foreground">
                    <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
                    {repo.language}
                  </span>
                )}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
