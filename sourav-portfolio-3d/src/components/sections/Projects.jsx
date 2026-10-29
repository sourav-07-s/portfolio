import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Asterisk,
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import ProjectArtwork from "../ProjectArtwork";
import { projects } from "../../data/site";

const filters = ["All", "Frontend", "Backend", "Full Stack"];
const buttonBase =
  "inline-flex min-h-[38px] items-center justify-center gap-2.5 border px-[11px] text-[10px] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter(
    (p) =>
      filter === "All" ||
      p.category.toLowerCase().includes(filter.toLowerCase()),
  );
  const [expanded, setExpanded] = useState([]);
  const toggle = (id) =>
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  return (
    <section
      id="projects"
      className="mx-auto w-[calc(100%-72px)] max-w-7xl py-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:py-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <SectionTitle
        index="03"
        eyebrow="SELECTED WORK"
        title={
          <>
            Proof in the
            <br />
            <span className="text-[#8b8b86]">projects.</span>
          </>
        }
        note="A closer look at the problems I've worked on and how I approached them."
      />
      <div className="mb-[22px] flex items-center justify-between gap-[18px] border-b border-(--border) pb-4 max-[760px]:flex-col max-[760px]:items-start">
        <span className="font-mono text-[9px] text-(--muted)">
          03 PROJECTS / 2026
        </span>
        <div
          className="flex flex-wrap gap-[5px] max-[760px]:w-full max-[760px]:flex-nowrap max-[760px]:overflow-x-auto"
          aria-label="Filter projects"
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`whitespace-nowrap border px-2.5 py-[7px] text-[10px] transition ${filter === f ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]" : "border-[#2a2a2a] bg-[var(--surface)] text-(--muted) hover:border-(--border) hover:bg-[#131313] hover:text-(--text)"}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {shown.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i * 0.06}
            className={`grid grid-cols-1 overflow-hidden border border-(--border) bg-[var(--surface)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] lg:grid-cols-[0.93fr_1.07fr] [perspective:1000px] [transform-style:preserve-3d]`}
          >
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-(--border) bg-(--bg) p-[11px] sm:min-h-[270px] lg:min-h-[345px] lg:border-b-0 lg:border-r">
              <ProjectArtwork type={p.visual} />
              <span className="absolute left-[17px] top-[17px] z-[2] font-mono text-[8px] tracking-[.12em] text-[#c4c9bc]">
                {p.id} / 03
              </span>
              <span
                className={`absolute right-3.5 top-3.5 z-[2] flex items-center gap-1.5 border border-[color-mix(in_srgb,var(--accent)_23%,transparent)] bg-[#111710] px-2 py-1.5 font-mono text-[8px] text-[#d9e9bd] ${p.status === "In Progress" ? "border-[#c6a35d40] text-[#e8c98a]" : ""}`}
              >
                <i
                  className={`h-[5px] w-[5px] rounded-full bg-[var(--accent)] ${p.status === "In Progress" ? "bg-[#e8c98a]" : ""}`}
                />
                {p.status}
              </span>
            </div>
            <div className="flex flex-col items-start p-[22px] sm:p-[27px]">
              <div className="flex items-center gap-[11px] font-mono text-[8px] tracking-[.1em] text-(--accent)">
                <span>{p.category}</span>
                <span className="h-px w-7 bg-[color-mix(in_srgb,var(--accent)_46%,transparent)]" />
              </div>
              <h3 className="mb-2.5 mt-[15px] font-display text-[clamp(1.5rem,2.5vw,2.15rem)] font-medium leading-[1.15] tracking-[-.045em]">
                {p.title}
              </h3>
              <p className="mb-[17px] max-w-[470px] text-xs leading-[1.8] text-(--muted)">
                {p.summary}
              </p>
              <div className="mb-[15px] flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-[#2c2c2c] bg-[var(--surface-2)] px-[7px] py-[5px] font-mono text-[8px] text-[#c4c8bd]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                className="flex items-center gap-2 bg-transparent py-2 text-[11px] text-[var(--text)] transition hover:text-(--accent)"
                onClick={() => toggle(p.id)}
                aria-expanded={expanded.includes(p.id)}
              >
                {expanded.includes(p.id) ? "Hide details" : "What I built"}
                <ChevronDown
                  size={15}
                  className={`transition-transform ${expanded.includes(p.id) ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expanded.includes(p.id) && (
                  <motion.ul
                    className="my-1 flex list-none flex-col gap-[9px] overflow-hidden p-0"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {p.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[11px] leading-[1.65] text-(--muted)"
                      >
                        <Check
                          size={14}
                          className="mt-0.75 shrink-0 text-(--accent)"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <div className="mt-auto flex w-full flex-wrap items-center gap-3 border-t border-(--border) pt-[15px]">
                {p.github ? (
                  <a
                    className={`${buttonBase} border-[#373737] bg-transparent text-[var(--text)] hover:border-[var(--accent)]`}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> View source <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span
                    className={`${buttonBase} cursor-not-allowed border-(--border) bg-[#ffffff02] text-[#73786e]`}
                    title="Repository URL needs confirmation"
                  >
                    <Github size={16} /> Repo link to confirm
                  </span>
                )}
                <span className="font-mono text-[7px] tracking-[.06em] text-[#7f857a]">
                  {p.status === "In Progress"
                    ? "IN DEVELOPMENT"
                    : "NO LIVE DEMO PROVIDED"}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-[17px] flex items-start gap-3 border border-(--border) bg-[#ffffff02] px-[18px] py-4 text-(--muted)">
        <Asterisk size={18} className="shrink-0 text-(--accent)" />
        <p className="m-0 text-[11px] leading-[1.7]">
          Live demos will appear here when verified URLs are available. The Job
          Application Tracker repository is omitted until its URL is confirmed.
        </p>
      </div>
    </section>
  );
}
