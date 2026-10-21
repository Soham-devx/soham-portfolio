import { ArrowUp } from 'lucide-react'
import { site } from '@/lib/data'
import { GitHubIcon } from './github-icon'
import { Wordmark } from './navbar'
import { CurrentYear } from './current-year'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Wordmark />
          <p className="text-sm text-muted-foreground">Designed with curiosity. Built with code.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
          <span>
            © <CurrentYear /> {site.name}
          </span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
