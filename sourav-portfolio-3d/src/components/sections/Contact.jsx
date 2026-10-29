import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { site } from "../../data/site";

const inputClass =
  "mb-[17px] w-full resize-y border border-(--border) bg-(--bg) px-[13px] py-3 text-xs text-[var(--text)] placeholder:text-[#686f64] focus:border-[color-mix(in_srgb,var(--accent)_52%,transparent)] focus:outline-none aria-[invalid=true]:border-[#ff8585]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const [honeypot, setHoneypot] = useState("");
  useEffect(() => {
    const handler = (e) =>
      setForm((f) => ({
        ...f,
        message: `I'd like to discuss: ${e.detail}\n\n`,
      }));
    window.addEventListener("prefill-contact", handler);
    return () => window.removeEventListener("prefill-contact", handler);
  }, []);
  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 80)
      next.name = "Please enter your name (2–80 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10 || form.message.trim().length > 1000)
      next.message = "Message must be 10–1000 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (e) => {
    e.preventDefault();
    if (honeypot || !validate()) return;
    setState("loading");
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name.trim()}`,
    );
    const body = encodeURIComponent(
      `${form.message.trim()}\n\nReply to: ${form.email.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setState("success");
  };

  return (
    <section
      id="contact"
      className="mx-auto w-[calc(100%-72px)] max-w-7xl pb-[125px] pt-[105px] max-[760px]:w-[calc(100%-36px)] max-[760px]:pb-20 max-[760px]:pt-[75px] max-[420px]:w-[calc(100%-30px)]"
    >
      <div className="mb-11">
        <SectionTitle
          index="06"
          eyebrow="HAVE A PROJECT IN MIND?"
          title={
            <>
              Let's make something
              <br />
              <span className="text-[#8b8b86]">that matters.</span>
            </>
          }
          note="Have a role, idea, or collaboration in mind? I'd be glad to hear from you."
        />
      </div>
      <div className="grid grid-cols-1 gap-[35px] md:grid-cols-[.8fr_1.2fr] md:gap-[70px]">
        <Reveal className="pt-[7px]">
          <span className="font-mono text-[9px] tracking-[.12em] text-(--muted)">
            GET IN TOUCH DIRECTLY
          </span>
          <a
            className="mt-3 flex items-center justify-between gap-2.5 border-b border-(--border) pb-[14px] font-display text-[clamp(1.1rem,2vw,1.6rem)] font-medium tracking-[-.04em] text-[var(--text)] [overflow-wrap:anywhere]"
            href={`mailto:${site.email}`}
          >
            {site.email}
            <ArrowUpRight size={19} className="shrink-0 text-(--accent)" />
          </a>
          <div className="mt-6 flex items-center gap-[13px]">
            <span className="grid h-[37px] w-[37px] place-items-center border border-(--border) bg-[#1a100e] text-(--accent)">
              <MapPin size={16} />
            </span>
            <div>
              <small className="font-mono text-[8px] tracking-[.1em] text-(--muted)">
                BASED IN
              </small>
              <p className="m-0 text-xs">{site.location}, India</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-[13px]">
            <span className="grid h-[37px] w-[37px] place-items-center border border-(--border) bg-[#1a100e] text-(--accent)">
              <Clock3 size={16} />
            </span>
            <div>
              <small className="font-mono text-[8px] tracking-[.1em] text-(--muted)">
                AVAILABILITY
              </small>
              <p className="m-0 text-xs">On-site · Bhubaneswar</p>
            </div>
          </div>
          <div className="mt-[29px] flex gap-2">
            <a
              className="grid h-[38px] w-[38px] place-items-center border border-(--border) text-(--muted) transition hover:border-[var(--accent)] hover:text-(--accent)"
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              className="grid h-[38px] w-[38px] place-items-center border border-(--border) text-(--muted) transition hover:border-[var(--accent)] hover:text-(--accent)"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
            <a
              className="grid h-[38px] w-[38px] place-items-center border border-(--border) text-(--muted) transition hover:border-[var(--accent)] hover:text-(--accent)"
              href={`mailto:${site.email}`}
              aria-label="Email Sourav"
            >
              <Mail size={17} />
            </a>
          </div>
          <p className="mt-[23px] max-w-[280px] text-[11px] leading-[1.8] text-(--muted)">
            Prefer email? Send a note directly and I'll have your message in my
            inbox.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            className="flex flex-col items-stretch border border-(--border) bg-[var(--surface)] p-7 max-[760px]:p-[21px]"
            onSubmit={submit}
            noValidate
          >
            <div className="mb-[25px] flex items-start justify-between gap-[15px] max-[420px]:flex-col max-[420px]:gap-[7px]">
              <div>
                <span className="font-mono text-[8px] tracking-[.12em] text-[var(--accent-highlight)]">
                  SEND A MESSAGE
                </span>
                <h3 className="mt-2 font-display text-[22px] font-medium tracking-[-.04em] max-[760px]:text-[19px]">
                  Tell me a little about it.
                </h3>
              </div>
              <span className="whitespace-nowrap pt-[5px] font-mono text-[8px] text-(--muted)">
                * REQUIRED
              </span>
            </div>
            <label
              className="mb-[7px] text-[11px] text-[var(--text)]"
              htmlFor="name"
            >
              Your name <span className="text-(--accent)">*</span>
            </label>
            <input
              className={inputClass}
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={validate}
              placeholder="Jane Smith"
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <small
                className="-mt-3.5 mb-[15px] text-[10px] text-[#ff8585]"
                id="name-error"
              >
                {errors.name}
              </small>
            )}
            <label
              className="mb-[7px] text-[11px] text-[var(--text)]"
              htmlFor="email"
            >
              Email address <span className="text-(--accent)">*</span>
            </label>
            <input
              className={inputClass}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={validate}
              placeholder="jane@company.com"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <small
                className="-mt-3.5 mb-[15px] text-[10px] text-[#ff8585]"
                id="email-error"
              >
                {errors.email}
              </small>
            )}
            <label
              className="mb-[7px] text-[11px] text-[var(--text)]"
              htmlFor="message"
            >
              What would you like to build?{" "}
              <span className="text-(--accent)">*</span>
            </label>
            <textarea
              className={inputClass}
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={validate}
              placeholder="A little context about your project, role, or idea…"
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <small
                className="-mt-3.5 mb-[15px] text-[10px] text-[#ff8585]"
                id="message-error"
              >
                {errors.message}
              </small>
            )}
            <div
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                tabIndex="-1"
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <button
              className="inline-flex min-h-[45px] min-w-40 self-start items-center justify-center gap-3 bg-[var(--accent)] px-4 text-xs font-bold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-highlight)] disabled:cursor-wait disabled:opacity-60"
              type="submit"
              disabled={state === "loading"}
            >
              {state === "loading" ? (
                "Opening email…"
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
            <p className="mt-[13px] text-[9px] leading-[1.65] text-(--muted)">
              This opens your email app with the message prepared. No message is
              sent until you confirm it there.
            </p>
            {state === "success" && (
              <p
                className="mt-3 flex items-center gap-2 text-[11px] text-(--accent)"
                role="status"
              >
                <Check size={15} /> Email draft prepared. Complete sending from
                your email app.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
