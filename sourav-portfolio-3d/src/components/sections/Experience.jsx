import { Layers3 } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { experience, education } from "../../data/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-[calc(100%-72px)] max-w-7xl py-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:py-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <SectionTitle
        index="04"
        eyebrow="THE JOURNEY SO FAR"
        title={
          <>
            Learning by
            <br />
            <span className="text-[#8b8b86]">doing the work.</span>
          </>
        }
        note="Hands-on experience building responsive interfaces and collaborating with Git."
      />
      <div className="relative py-1 pl-[25px] max-[760px]:pl-5">
        <div className="absolute bottom-[25px] left-1 top-2.5 w-px bg-[#2e2e2e]">
          <span className="absolute left-[-3px] top-1.5 h-[7px] w-[7px] rounded-full bg-[var(--accent)] shadow-[0_0_0_5px_color-mix(in_srgb,var(--accent)_8%,transparent)]" />
        </div>
        {experience.map((job, i) => (
          <Reveal
            key={job.company}
            delay={i * 0.08}
            className="grid grid-cols-1 gap-3 border-b border-(--border) pb-6 md:grid-cols-[210px_1fr] md:gap-9"
          >
            <div className="flex flex-col gap-[7px] pt-[3px] max-[760px]:flex-row max-[760px]:items-center max-[760px]:gap-3">
              <span className="font-mono text-[10px] text-(--accent)">
                {job.period}
              </span>
              <small className="text-[11px] text-(--muted) max-[760px]:border-l max-[760px]:border-(--border) max-[760px]:pl-3">
                {job.mode}
              </small>
            </div>
            <div className="pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="m-0 font-display text-xl font-medium tracking-[-.03em]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-xs text-(--muted)">
                    {job.company}
                  </p>
                </div>
                <span className="whitespace-nowrap border border-[#44302a] px-[7px] py-[5px] font-mono text-[8px] text-[#d9a99c]">
                  INTERNSHIP
                </span>
              </div>
              <ul className="mt-[19px] flex list-none flex-col gap-2.5 p-0">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <p className="m-0 text-xs leading-[1.8] text-(--muted)">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-[38px]">
        <div className="mb-[15px] flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[.12em] text-[var(--accent-highlight)]">
            EDUCATION
          </span>
          <span className="font-mono text-[8px] text-(--muted)">
            01 ENTRY
          </span>
        </div>
        {education.map((item) => (
          <div
            className="flex items-center gap-[18px] border border-(--border) bg-[var(--surface)] p-5 max-[760px]:flex-wrap max-[760px]:gap-[13px] max-[760px]:p-4"
            key={item.school}
          >
            <div className="grid h-[43px] w-[43px] shrink-0 place-items-center border border-[color-mix(in_srgb,var(--accent)_19%,transparent)] bg-[var(--accent-panel)] text-(--accent)">
              <Layers3 size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 font-display text-[15px] font-medium max-[760px]:text-sm">
                {item.degree}
              </h3>
              <p className="m-0 text-[11px] text-(--muted)">
                {item.school}
              </p>
              <span className="mt-[7px] inline-block font-mono text-[8px] text-(--accent)">
                {item.affiliation}
              </span>
            </div>
            <div className="ml-auto whitespace-nowrap font-mono text-[9px] text-(--muted) max-[760px]:ml-[56px] max-[760px]:w-full">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
