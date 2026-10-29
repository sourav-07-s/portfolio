import { ArrowUpRight, Asterisk } from "lucide-react";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--bg)">
      <div className="mx-auto w-[calc(100%-72px)] max-w-7xl max-[760px]:w-[calc(100%-36px)] max-[420px]:w-[calc(100%-30px)]">
        <div className="flex items-center justify-between gap-6 border-b border-(--border) py-9 max-[760px]:flex-wrap max-[760px]:items-start">
          <a className="flex shrink-0 items-center gap-2.5" href="#home">
            <img
              src="/logo.png"
              alt=""
              className="h-11 w-11 object-contain"
              width="60"
              height="60"
            />
            <span className="flex flex-col text-[10px] font-bold leading-[1.4] tracking-[.13em] text-(--text)">
              SOURAV SAHOO
              <small className="mt-0.75 font-mono text-[7px] font-normal tracking-[.09em] text-(--muted)">
                FULL STACK DEVELOPER
              </small>
            </span>
          </a>
          <p className="m-0 text-[11px] leading-[1.7] text-(--muted) max-[760px]:order-3 max-[760px]:w-full">
            Building reliable, user-friendly
            <br />
            web products with intent.
          </p>
          <a
            className="flex items-center gap-2 font-mono text-[9px] tracking-[.08em] text-(--muted) transition hover:text-(--text)"
            href="#home"
          >
            BACK TO TOP{" "}
            <ArrowUpRight size={15} className="text-(--accent)" />
          </a>
        </div>
        <div className="flex items-center justify-between gap-4 py-4.5 font-mono text-[8px] tracking-[.04em] text-(--muted) max-[760px]:flex-wrap max-[760px]:gap-3">
          <span>
            © {new Date().getFullYear()} Sourav Sahoo. All rights reserved.
          </span>
          <span className="flex items-center gap-1 max-[760px]:hidden">
            DESIGNED WITH INTENT{" "}
            <Asterisk size={13} className="text-(--accent)" />
          </span>
          <div className="flex gap-4.25 max-[420px]:gap-3">
            <a
              className="transition hover:text-(--accent)"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="transition hover:text-(--accent)"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className="transition hover:text-(--accent)"
              href={`mailto:${site.email}`}
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
