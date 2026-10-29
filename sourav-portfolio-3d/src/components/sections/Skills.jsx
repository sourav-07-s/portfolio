import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { skillGroups } from "../../data/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-[calc(100%-72px)] max-w-7xl py-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:py-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <SectionTitle
        index="02"
        eyebrow="TOOLS OF THE TRADE"
        title={
          <>
            The stack behind
            <br />
            <span className="text-[#8b8b86]">the work.</span>
          </>
        }
        note="A practical toolkit for building and shipping web applications."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.05}
            className={`group border border-(--border) bg-[var(--surface)] p-[22px] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-border)] max-[760px]:p-4 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === 2 ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            <div className="mb-5 flex items-center gap-2.5 max-[760px]:gap-2">
              <span className="font-mono text-[9px] text-(--accent)">
                {group.number}
              </span>
              <h3 className="m-0 text-[13px] font-semibold max-[760px]:text-xs">
                {group.category}
              </h3>
              <ArrowUpRight
                size={15}
                className="ml-auto text-(--accent)"
              />
            </div>
            <div className="flex flex-wrap gap-[7px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-(--border) bg-[var(--surface-2)] px-[9px] py-1.5 text-[10px] text-[#c1c1ba] transition hover:border-[var(--accent-border)] hover:bg-[var(--accent-panel)] hover:text-[var(--accent-highlight)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-[23px] flex items-center gap-2.5 font-mono text-[8px] tracking-[.08em] text-(--muted) max-[760px]:flex-wrap">
        <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent)]" />{" "}
        SKILLS LISTED FROM MY RESUME{" "}
        <span className="h-px flex-1 bg-[var(--border)] max-[760px]:hidden" />
        <span>NO MADE-UP SCORES. JUST THE TOOLS I USE.</span>
      </div>
    </section>
  );
}
