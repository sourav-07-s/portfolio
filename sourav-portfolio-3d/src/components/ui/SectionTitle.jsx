export default function SectionTitle({ index, eyebrow, title, note }) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-8">
      <div>
        <div className="flex items-center gap-2.5 font-mono text-[9px] tracking-[.12em] text-[var(--accent-highlight)]">
          <span className="text-[#777773]">{index}</span>
          <span className="h-px w-[22px] bg-[var(--accent)]" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="mt-4 font-display text-[clamp(2.6rem,5.3vw,4.7rem)] font-normal leading-[.99] tracking-[-.055em] text-[var(--text)]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="mb-1 max-w-[300px] text-[13px] leading-[1.8] text-(--muted) md:max-w-[300px]">
          {note}
        </p>
      )}
    </div>
  );
}
