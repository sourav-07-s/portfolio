import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'souravsahoo407@gmail.com', href: 'mailto:souravsahoo407@gmail.com' },
    { Icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { Icon: MapPin, label: 'Location', value: 'Odisha, India', href: '#' },
  ];

  const socials = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
            05 — Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Let's Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-400">
            Have a project in mind or just want to say hi? My inbox is always
            open. Let's create something amazing together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-700 bg-ink-900/50 p-4 backdrop-blur transition-all duration-300 hover:border-accent-400/30 hover:bg-ink-800/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800 text-accent-400 transition-colors group-hover:bg-accent-400 group-hover:text-ink-950">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">{label}</p>
                    <p className="text-sm font-medium text-ink-200">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all duration-300 hover:border-accent-400/40 hover:text-accent-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
                </span>
                <p className="text-sm font-medium text-lime-400">
                  Available for full-time roles & internships
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-700 bg-ink-900/50 p-6 backdrop-blur sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-ink-400">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-accent-400/50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-ink-400">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-accent-400/50"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium text-ink-400">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-ink-700 bg-ink-950/50 px-4 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-accent-400/50"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-lime-400 px-6 py-3.5 font-medium text-ink-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] disabled:opacity-70"
              >
                {sent ? <>Message Sent!</> : <>Send Message <Send size={16} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
