import { ArrowUpRight, Code2, Layers3, MapPin } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { site } from "../../data/site";

const baseLink =
  "inline-flex items-center gap-2 border-b border-(--border) pb-1.5 text-xs transition hover:border-[var(--accent)] hover:text-(--accent)";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-[calc(100%-72px)] max-w-7xl py-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:py-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <SectionTitle
        index="01"
        eyebrow="A LITTLE ABOUT ME"
        title={
          <>
            Curious by nature.
            <br />
            <span className="text-[#8b8b86]">Builder by choice.</span>
          </>
        }
        note="I like turning complex problems into clear, useful digital experiences."
      />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-[100px] max-[1020px]:gap-[45px]">
        <Reveal className="max-w-[570px]">
          <p className="mb-[17px] text-[21px] leading-[1.6] tracking-[-.025em] text-[var(--text)] max-[760px]:text-[19px]">
            I'm a{" "}
            <strong className="font-semibold text-[#f2f2ef]">
              Full Stack Developer
            </strong>{" "}
            working across the frontend and backend to make web products feel
            intuitive, dependable, and thoughtfully built.
          </p>
          <p className="mb-[17px] text-[14px] leading-[1.95] text-(--muted)">
            My work spans responsive React interfaces, REST API development,
            authentication, and MongoDB data modelling. I enjoy understanding
            how the pieces fit together — from the first interaction to the
            logic behind it.
          </p>
          <p className="mb-[17px] text-[14px] leading-[1.95] text-(--muted)">
            I'm currently pursuing a B.Tech in Computer Science &amp;
            Engineering and looking to contribute to a team building useful
            products.
          </p>
          <div className="mt-[27px] flex flex-wrap gap-[22px]">
            <a
              className={`${baseLink} text-2xl font-semibold gap-2 px-5 py-3`}
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={19} />
            </a>
            <a
              className={`${baseLink} text-2xl font-semibold gap-2 px-5 py-3`}
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={19} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-2.5">
          <div className="col-span-2 flex min-h-[130px] flex-col items-start gap-2.5 border border-(--border) bg-gradient-to-br from-[#111] to-[#0a0a0a] p-[21px]">
            <span className="mb-auto font-mono text-[8px] tracking-[.1em] text-(--muted)">
              01 / BASE
            </span>
            <MapPin size={18} className="text-(--accent)" />
            <strong className="text-[13px] font-semibold">Puri, Odisha</strong>
            <small className="text-[10px] leading-[1.5] text-(--muted)">
              Open to on-site work in Bhubaneswar
            </small>
          </div>
          <div className="flex min-h-[150px] flex-col items-start gap-2.5 border border-(--border) bg-gradient-to-br from-[#111] to-[#0a0a0a] p-[17px] max-[760px]:min-h-[120px]">
            <span className="mb-auto font-mono text-[8px] tracking-[.1em] text-(--muted)">
              02 / EDUCATION
            </span>
            <Layers3 size={18} className="text-(--accent)" />
            <strong className="text-[13px] font-semibold">B.Tech · CSE</strong>
            <small className="text-[10px] leading-[1.5] text-(--muted)">
              BPUT · Expected 2027
            </small>
          </div>
          <div className="flex min-h-[150px] flex-col items-start gap-2.5 border border-[color-mix(in_srgb,var(--accent)_24%,#292929)] bg-gradient-to-br from-[#17100e] to-[#0a0a0a] p-[17px] max-[760px]:min-h-[120px]">
            <span className="mb-auto font-mono text-[8px] tracking-[.1em] text-(--muted)">
              03 / CURRENT FOCUS
            </span>
            <Code2 size={18} className="text-(--accent)" />
            <strong className="text-[13px] font-semibold">
              Full Stack Development
            </strong>
            <small className="text-[10px] leading-[1.5] text-(--muted)">
              React · Node · Express · MongoDB
            </small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
