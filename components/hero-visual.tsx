'use client'

import { useReducedMotion } from 'motion/react'

const nodes = [
  { id: 'io', x: 70, y: 70, label: 'INPUT', sub: 'stream' },
  { id: 'ds', x: 330, y: 70, label: 'DS/ALGO', sub: 'graph' },
  { id: 'core', x: 200, y: 175, label: 'CORE', sub: 'engine', core: true },
  { id: 'net', x: 60, y: 270, label: 'NET', sub: 'tcp/ip' },
  { id: 'ml', x: 340, y: 250, label: 'ML', sub: 'model' },
]

const edges = [
  { id: 'e1', d: 'M70 70 L70 130 L200 130 L200 175', dur: 3.2 },
  { id: 'e2', d: 'M330 70 L330 130 L200 130', dur: 2.6 },
  { id: 'e3', d: 'M60 270 L60 220 L150 220 L200 175', dur: 3.6 },
  { id: 'e4', d: 'M200 175 L250 220 L340 220 L340 250', dur: 2.8 },
]

export function HeroVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <figure className="relative w-full" aria-label="Illustration of a software system architecture with a code terminal">
      <div className="relative overflow-hidden rounded-lg border border-border bg-card/60">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Fig. 01 — System Sketch</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden="true" />
            live
          </span>
        </div>

        <div className="bg-grid relative">
          <svg viewBox="0 0 400 320" className="block h-auto w-full" role="img" aria-hidden="true">
            <defs>
              <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" className="stroke-signal" strokeWidth="1" opacity="0.35" />
              </pattern>
            </defs>

            {[40, 120, 200, 280, 360].map((x) => (
              <text key={x} x={x} y={312} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="7" opacity="0.6">
                {String(x).padStart(3, '0')}
              </text>
            ))}

            {edges.map((e) => (
              <g key={e.id}>
                <path d={e.d} fill="none" className="stroke-foreground/15" strokeWidth="1" />
                <path d={e.d} fill="none" className={`stroke-signal/60 ${reduceMotion ? '' : 'animate-dash'}`} strokeWidth="1" strokeDasharray="4 6" />
                {!reduceMotion && (
                  <circle r="2.6" className="fill-signal">
                    <animateMotion dur={`${e.dur}s`} repeatCount="indefinite" path={e.d} />
                  </circle>
                )}
              </g>
            ))}

            {nodes.map((n) =>
              n.core ? (
                <g key={n.id}>
                  <rect x={n.x - 46} y={n.y - 30} width="92" height="60" rx="4" className="fill-background stroke-signal" strokeWidth="1" />
                  <rect x={n.x - 46} y={n.y - 30} width="92" height="60" rx="4" fill="url(#hatch)" />
                  <rect x={n.x - 34} y={n.y - 12} width="68" height="24" rx="2" className="fill-background stroke-foreground/20" />
                  <text x={n.x} y={n.y + 3} textAnchor="middle" className="fill-foreground font-mono" fontSize="9" fontWeight="600" letterSpacing="2">
                    {n.label}
                  </text>
                  <text x={n.x - 42} y={n.y - 34} className="fill-signal font-mono" fontSize="7">
                    {'// '}
                    {n.sub}
                  </text>
                </g>
              ) : (
                <g key={n.id}>
                  <rect x={n.x - 32} y={n.y - 16} width="64" height="32" rx="3" className="fill-background stroke-foreground/30" strokeWidth="1" />
                  <circle cx={n.x - 22} cy={n.y} r="2" className="fill-signal" />
                  <text x={n.x - 15} y={n.y - 1} className="fill-foreground font-mono" fontSize="7.5" fontWeight="600" letterSpacing="1">
                    {n.label}
                  </text>
                  <text x={n.x - 15} y={n.y + 8} className="fill-muted-foreground font-mono" fontSize="6">
                    {n.sub}
                  </text>
                </g>
              ),
            )}

            {[
              [12, 12],
              [388, 12],
              [12, 296],
              [388, 296],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`} className="stroke-foreground/40" strokeWidth="1">
                <line x1={x - 5} y1={y} x2={x + 5} y2={y} />
                <line x1={x} y1={y - 5} x2={x} y2={y + 5} />
              </g>
            ))}
          </svg>
        </div>

        <div className="border-t border-border bg-background/80 font-mono text-[11.5px] leading-relaxed sm:text-xs">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2">
            <span className="size-2 rounded-full bg-foreground/20" aria-hidden="true" />
            <span className="size-2 rounded-full bg-foreground/20" aria-hidden="true" />
            <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
            <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Router.java</span>
            <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-muted-foreground">illustrative</span>
          </div>
          <pre className="overflow-x-auto px-4 py-3 text-muted-foreground" tabIndex={0} aria-label="Illustrative Java snippet">
            <code>
              <span className="text-signal">public final class</span> <span className="text-foreground">Router</span> {'{'}
              {'\n'}
              {'  '}
              <span className="text-signal">private final</span> Graph&lt;Node&gt; system;
              {'\n\n'}
              {'  '}
              <span className="text-signal">public</span> Result <span className="text-foreground">route</span>(Request req) {'{'}
              {'\n'}
              {'    '}Node next = system.shortestPath(req.src(), req.dst());
              {'\n'}
              {'    '}
              <span className="text-signal">return</span> next.process(req);
              {'\n'}
              {'  }'}
              {'\n'}
              {'}'}
              {'\n'}
              <span className="text-foreground">$</span> javac Router.java <span className="text-foreground">&amp;&amp;</span> java Router
              <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-signal animate-blink" aria-hidden="true" />
            </code>
          </pre>
        </div>
      </div>

      <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>input → core → output</span>
        <span>sv.lab</span>
      </figcaption>
    </figure>
  )
}
