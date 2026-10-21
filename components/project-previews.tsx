import type { PreviewKind } from '@/lib/data'
import { cn } from '@/lib/utils'

const mono = 'font-mono text-[10px] uppercase tracking-[0.14em]'

function ParkingPreview() {
  const floors = [
    { name: 'F1', slots: 'CCBCCTCBCC', taken: [0, 1, 3, 6, 7] },
    { name: 'F2', slots: 'CCCBBCCTCC', taken: [2, 3, 5, 9] },
  ]
  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      <div className={cn(mono, 'flex items-center justify-between text-muted-foreground')}>
          <span>Parking Display Board</span>
        <span className="flex gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-[2px] bg-signal" />
            occupied
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-[2px] border border-foreground/30" />
            free
          </span>
        </span>
      </div>
      <div className="grid flex-1 gap-3">
        {floors.map((f) => (
          <div key={f.name} className="flex items-stretch gap-3">
            <span className={cn(mono, 'flex w-6 items-center text-foreground')}>{f.name}</span>
            <div className="grid flex-1 grid-cols-10 gap-1.5">
              {f.slots.split('').map((type, i) => {
                const taken = f.taken.includes(i)
                return (
                  <div
                    key={i}
                    className={cn(
                      'flex min-h-10 items-end justify-center rounded-[3px] border pb-1 font-mono text-[9px]',
                      taken ? 'border-signal bg-signal/15 text-signal' : 'border-foreground/15 text-muted-foreground',
                    )}
                  >
                    {type}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className={cn(mono, 'grid grid-cols-3 gap-2 text-muted-foreground')}>
        {['Entry Gate', 'Strategy', 'Exit Gate'].map((g) => (
          <span key={g} className="rounded-[3px] border border-border px-2 py-1.5 text-center">
            {g}
          </span>
        ))}
      </div>
    </div>
  )
}

function FilesystemPreview() {
  const rows = [
    ['01', 'notes.txt', 'rw-', '128'],
    ['02', 'demo.c', 'rw-', '512'],
    ['03', 'log.dat', 'r--', '064'],
    ['04', 'config', 'rw-', '032'],
  ]
  return (
    <div className="flex h-full flex-col p-4 font-mono text-[11px] sm:p-5">
      <p className="text-muted-foreground">
        <span className="text-signal">cvfs {'>'}</span> ls -i
      </p>
      <table className="mt-3 w-full text-left">
        <thead className={cn(mono, 'text-muted-foreground')}>
          <tr className="border-b border-border">
            <th className="py-1.5 font-normal">inode</th>
            <th className="py-1.5 font-normal">name</th>
            <th className="py-1.5 font-normal">perm</th>
            <th className="py-1.5 text-right font-normal">size</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-border/60 text-foreground/90">
              <td className="py-1.5 text-signal">{r[0]}</td>
              <td className="py-1.5">{r[1]}</td>
              <td className="py-1.5 text-muted-foreground">{r[2]}</td>
              <td className="py-1.5 text-right text-muted-foreground">{r[3]}B</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto pt-4">
        <div className={cn(mono, 'mb-1.5 flex justify-between text-muted-foreground')}>
          <span>heap blocks</span>
          <span>illustrative</span>
        </div>
        <div className="flex h-3 gap-0.5">
          {[3, 5, 2, 1, 4, 6, 2, 3].map((w, i) => (
            <span key={i} style={{ flexGrow: w }} className={cn('rounded-[1px]', i % 3 === 2 ? 'bg-foreground/10' : 'bg-signal/70')} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FtpPreview() {
  const clients = [
    { x: 40, y: 40 },
    { x: 40, y: 110 },
    { x: 40, y: 180 },
  ]
  return (
    <div className="grid h-full grid-cols-5">
      <svg viewBox="0 0 240 220" className="col-span-3 h-full w-full" aria-hidden="true">
        {clients.map((c, i) => (
          <g key={i}>
            <path d={`M${c.x + 22} ${c.y} C 120 ${c.y}, 120 110, 170 110`} fill="none" className="stroke-signal/60 animate-dash" strokeWidth="1" />
            <rect x={c.x - 22} y={c.y - 13} width="44" height="26" rx="3" className="fill-background stroke-foreground/30" />
            <text x={c.x} y={c.y + 3} textAnchor="middle" className="fill-foreground font-mono" fontSize="8">
              {`C-${i + 1}`}
            </text>
          </g>
        ))}
        <rect x="170" y="80" width="56" height="60" rx="4" className="fill-background stroke-signal" />
        <text x="198" y="106" textAnchor="middle" className="fill-signal font-mono" fontSize="8" fontWeight="600">
          SERVER
        </text>
        <text x="198" y="120" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="6.5">
          :21 tcp
        </text>
      </svg>
      <div className="col-span-2 flex flex-col justify-center gap-1.5 border-l border-border p-3 font-mono text-[9.5px] leading-snug text-muted-foreground">
        <span className="text-signal">[accept] C-1</span>
        <span>[thread-1] LIST</span>
        <span className="text-signal">[accept] C-2</span>
        <span>[thread-2] RETR</span>
        <span>[thread-1] STOR</span>
        <span className="text-signal">[accept] C-3</span>
        <span>[thread-3] QUIT</span>
      </div>
    </div>
  )
}

function PackerPreview() {
  const File = ({ label }: { label: string }) => (
    <div className="flex h-7 items-center gap-1.5 rounded-[3px] border border-foreground/20 bg-background px-2 font-mono text-[9.5px] text-foreground/80">
      <span className="size-1.5 bg-foreground/40" />
      {label}
    </div>
  )
  return (
    <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3 p-4 sm:p-5">
      <div className="flex flex-col gap-1.5">
        {['a.txt', 'b.java', 'c.png', 'd.csv'].map((f) => (
          <File key={f} label={f} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className={cn(mono, 'text-muted-foreground')}>pack →</span>
        <div className="grid size-20 place-items-center rounded-md border border-signal bg-signal/10 font-mono text-[10px] text-signal">
          .pack
        </div>
        <span className={cn(mono, 'text-muted-foreground')}>→ unpack</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {['a.txt', 'b.java', 'c.png', 'd.csv'].map((f) => (
          <File key={f} label={f} />
        ))}
      </div>
    </div>
  )
}

function ChatPreview() {
  return (
    <div className="grid h-full grid-cols-5">
      <div className="col-span-3 flex flex-col justify-end gap-2 p-4">
        <div className="max-w-[85%] self-start rounded-md rounded-bl-none border border-border bg-background px-3 py-2 text-[11px]">
          Is the server up?
          <span className="mt-1 block font-mono text-[9px] text-muted-foreground">10:42:07</span>
        </div>
        <div className="max-w-[85%] self-end rounded-md rounded-br-none bg-signal/90 px-3 py-2 text-[11px] text-primary-foreground">
          Yes — connected on port 5000.
          <span className="mt-1 block font-mono text-[9px] opacity-70">10:42:11</span>
        </div>
        <div className="max-w-[85%] self-start rounded-md rounded-bl-none border border-border bg-background px-3 py-2 text-[11px]">
          Great, sending now.
          <span className="mt-1 block font-mono text-[9px] text-muted-foreground">10:42:15</span>
        </div>
      </div>
      <div className="col-span-2 border-l border-border p-3 font-mono text-[9.5px] leading-relaxed text-muted-foreground">
        <p className={cn(mono, 'mb-2 text-foreground')}>chat.log</p>
        <p>10:42:02 CONNECT</p>
        <p>10:42:07 MSG in</p>
        <p>10:42:11 MSG out</p>
        <p>10:42:15 MSG in</p>
        <p className="text-signal">10:42:19 WRITE log</p>
      </div>
    </div>
  )
}

function MemoryPreview() {
  const segments = [
    { name: 'stack', addr: '0x7ffd…', h: 'flex-[2]', accent: true, note: '↓ grows down' },
    { name: '', addr: '', h: 'flex-[3]', gap: true },
    { name: 'heap', addr: '0x55a1…', h: 'flex-[2]', accent: true, note: '↑ grows up' },
    { name: 'bss / data', addr: '0x55a0…', h: 'flex-[1.4]' },
    { name: 'text', addr: '0x55a0…', h: 'flex-[1.6]' },
  ]
  return (
    <div className="flex h-full gap-4 p-4 sm:p-5">
      <div className="flex flex-1 flex-col gap-1">
        {segments.map((s, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center justify-between rounded-[3px] px-3 font-mono text-[10px]',
              s.h,
              s.gap
                ? 'bg-dots border border-dashed border-foreground/15'
                : s.accent
                  ? 'border border-signal bg-signal/10 text-signal'
                  : 'border border-foreground/20 bg-background text-foreground/80',
            )}
          >
            <span>{s.name}</span>
            {s.note && <span className="text-muted-foreground">{s.note}</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between py-1 font-mono text-[9px] text-muted-foreground">
        <span>high</span>
        <span>0x…</span>
        <span>low</span>
      </div>
    </div>
  )
}

function StudyPreview() {
  const subjects = [
    { name: 'Data Structures', v: 72 },
    { name: 'Operating Systems', v: 54 },
    { name: 'Networking', v: 38 },
  ]
  const week = [2, 3, 1, 4, 3, 0, 2]
  return (
    <div className="grid h-full grid-cols-5 gap-4 p-4 sm:p-5">
      <div className="col-span-3 flex flex-col justify-center gap-4">
        {subjects.map((s) => (
          <div key={s.name}>
            <div className="mb-1.5 flex justify-between text-[11px]">
              <span>{s.name}</span>
              <span className="font-mono text-muted-foreground">{s.v}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-foreground/10">
              <div className="h-full rounded-full bg-signal" style={{ width: `${s.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 flex flex-col">
        <span className={cn(mono, 'text-muted-foreground')}>sessions / wk</span>
        <div className="mt-3 flex flex-1 items-end gap-1.5">
          {week.map((n, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-[2px] bg-signal/70" style={{ height: `${n * 14 + 4}px` }} />
              <span className="font-mono text-[8px] text-muted-foreground">{'MTWTFSS'[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const previews: Record<PreviewKind, () => React.JSX.Element> = {
  parking: ParkingPreview,
  filesystem: FilesystemPreview,
  ftp: FtpPreview,
  packer: PackerPreview,
  chat: ChatPreview,
  memory: MemoryPreview,
  study: StudyPreview,
}

export function ProjectPreview({
  kind,
  label,
  className,
  headerClassName,
}: {
  kind: PreviewKind
  label: string
  className?: string
  headerClassName?: string
}) {
  const Preview = previews[kind]
  return (
    <div className={cn('flex flex-col overflow-hidden', className)} aria-hidden="true">
      <div className={cn(mono, 'flex items-center justify-between border-b border-border px-4 py-2 text-muted-foreground', headerClassName)}>
        <span>{label}</span>
        <span>Concept mockup</span>
      </div>
      <div className="bg-grid-sm min-h-0 flex-1">
        <Preview />
      </div>
    </div>
  )
}
