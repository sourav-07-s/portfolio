import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollReveal.js';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/20' : 'py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-lime-400 font-display text-sm font-bold text-ink-950 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            SS
          </span>
          <span className="font-display text-lg font-semibold text-ink-50">
            Sourav<span className="text-accent-400">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.id
                    ? 'text-accent-300'
                    : 'text-ink-300 hover:text-ink-50'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go('contact')}
          className="hidden rounded-full border border-accent-400/40 px-5 py-2 text-sm font-medium text-accent-300 transition-all duration-300 hover:bg-accent-400 hover:text-ink-950 md:block"
        >
          Let's Talk
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink-100 md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass-strong mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-accent-400/10 text-accent-300'
                    : 'text-ink-300 hover:bg-ink-800'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
