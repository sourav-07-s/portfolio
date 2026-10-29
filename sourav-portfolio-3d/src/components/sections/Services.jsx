import {
  ArrowUpRight,
  Braces,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/site";

const serviceIcons = [Smartphone, Workflow, Braces, Database];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-[calc(100%-72px)] max-w-7xl py-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:py-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <SectionTitle
        index="05"
        eyebrow="HOW I CAN HELP"
        title={
          <>
            From interface to
            <br />
            <span className="text-[#8b8b86]">infrastructure.</span>
          </>
        }
        note="Ways I can contribute, grounded in the technologies and projects in my portfolio."
      />
      <div className="grid grid-cols-1 gap-[11px] sm:grid-cols-2 lg:grid-cols-4 max-[420px]:grid-cols-1">
        {services.map((service, i) => {
          const Icon = serviceIcons[i] || Braces;
          return (
            <Reveal
              key={service.n}
              delay={i * 0.05}
              className="flex min-h-[250px] flex-col items-start border border-(--border) bg-[var(--surface)] p-[21px] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] max-[760px]:min-h-[235px] max-[760px]:p-[17px] max-[420px]:min-h-[190px]"
            >
              <div className="mb-8 flex w-full items-center justify-between text-(--accent) max-[760px]:mb-6 max-[420px]:mb-[18px]">
                <span className="font-mono text-[9px] text-[#767670]">
                  {service.n}
                </span>
                <Icon size={20} />
              </div>
              <h3 className="mb-[11px] font-display text-[17px] font-medium leading-[1.3] tracking-[-.03em] max-[760px]:text-[15px]">
                {service.title}
              </h3>
              <p className="mb-[22px] text-[11px] leading-[1.8] text-(--muted)">
                {service.desc}
              </p>
              <a
                href={`#contact?subject=${encodeURIComponent(service.title)}`}
                className="mt-auto inline-flex items-center gap-[7px] text-[10px] text-[var(--accent-highlight)] transition hover:text-(--accent)"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  window.dispatchEvent(
                    new CustomEvent("prefill-contact", {
                      detail: service.title,
                    }),
                  );
                }}
              >
                Discuss this <ArrowUpRight size={15} />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
