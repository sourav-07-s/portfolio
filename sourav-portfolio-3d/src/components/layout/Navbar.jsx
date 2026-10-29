import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import PalettePicker from "./PalettePicker";

const navLinks = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Services", "services"],
];

export default function Navbar({ theme, toggleTheme, palette, setPalette }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);
  const brandClasses = "flex shrink-0 items-center gap-2.5";
  const actionClasses =
    "inline-flex min-h-[36px] items-center justify-center gap-2 border border-[#333] bg-[var(--surface-2)] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[.06em] text-[var(--accent-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-highlight)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";

  return (
    <header className="sticky top-0 z-100 h-[var(--header)] border-b border-(--border) bg-(--bg) backdrop-blur-[18px]">
      <a
        href="#main"
        className="fixed left-2 top-2 z-[1000] -translate-y-[150%] rounded-sm bg-[var(--accent)] px-3.5 py-2.5 text-[#10120b] focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex h-full w-[calc(100%-72px)] max-w-[1360px] items-center justify-between gap-[22px] max-[1000px]:w-[calc(100%_-_48px)] max-[760px]:w-[calc(100%-36px)] max-[760px]:gap-3 max-[420px]:w-[calc(100%-30px)]"
        aria-label="Primary"
      >
        <a className={brandClasses} href="#home" onClick={close}>
          <img
            src="/logo.png"
            alt=""
            className="h-[38px] w-[38px] shrink-0 object-contain transition duration-200 hover:scale-105 hover:drop-shadow-[0_0_7px_var(--accent)] max-[760px]:h-[34px] max-[760px]:w-[34px]"
            width="50"
            height="50"
          />
          <span className="flex flex-col text-[10px] font-bold leading-[1.4] tracking-[.13em] text-[var(--text)]">
            SOURAV SAHOO
            <small className="mt-0.75 font-mono text-[7px] font-normal tracking-[.09em] text-(--muted)">
              FULL STACK DEVELOPER
            </small>
          </span>
        </a>

        <div
          className={`${open ? "flex max-[760px]:absolute max-[760px]:left-0 max-[760px]:right-0 max-[760px]:top-[calc(100%+1px)] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:border-0 max-[760px]:border-b max-[760px]:border-(--border) max-[760px]:bg-[#050505] max-[760px]:px-[18px] max-[760px]:pb-5 max-[760px]:pt-4" : "hidden"} relative h-[34px] items-center border border-(--border) px-[14px] md:flex max-[760px]:h-auto max-[760px]:px-0`}
        >
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className={`relative flex h-full items-center px-3 text-[9px] uppercase tracking-[.045em] transition-colors max-[760px]:h-auto max-[760px]:border-b max-[760px]:border-(--border) max-[760px]:py-[13px] max-[760px]:text-[13px] ${active === id ? "text-[var(--text)] after:absolute after:bottom-[5px] after:left-1/2 after:h-[3px] after:w-[3px] after:-translate-x-1/2 after:rounded-full after:bg-[var(--accent)] max-[760px]:after:left-auto max-[760px]:after:right-1 max-[760px]:after:top-1/2 max-[760px]:after:bottom-auto" : "text-(--muted) hover:text-(--text)"}`}
            >
              {label}
            </a>
          ))}
          <a
            className={`${actionClasses} hidden max-[760px]:mt-[13px] max-[760px]:flex`}
            href="#contact"
            onClick={close}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 max-[760px]:gap-1.5">
          <PalettePicker palette={palette} setPalette={setPalette} />
          <button
            className="grid h-[34px] w-[34px] place-items-center border border-(--border) bg-[var(--surface)] transition hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className={`${actionClasses} max-[760px]:hidden`} href="#contact">
            Let’s talk{" "}
            <ArrowUpRight size={15} className="text-(--accent)" />
          </a>
          <button
            className="hidden h-[34px] w-[34px] place-items-center border border-(--border) bg-[var(--surface)] transition hover:border-[var(--accent)] max-[760px]:grid"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
