import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socials = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-ink-800 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-lime-400 font-display text-xs font-bold text-ink-950">
              SS
            </span>
            <span className="font-display text-sm font-semibold text-ink-200">
              Sourav Sahoo
            </span>
          </div>

          <p className="text-center text-sm text-ink-500">
            Designed & built with{' '}
            <Heart size={12} className="inline fill-accent-400 text-accent-400" />{' '}
            by Sourav
          </p>

          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-800 text-ink-500 transition-all duration-300 hover:border-accent-400/40 hover:text-accent-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-ink-600">
          © {new Date().getFullYear()} Sourav Sahoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
