import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import ParticleField from './ParticleField.jsx';
import Typewriter from './Typewriter.jsx';
import MagneticButton from './MagneticButton.jsx';

const terminalLines = [
  { text: 'whoami', output: 'Sourav Sahoo' },
  { text: 'cat education.txt', output: 'B.Tech CSE — Final Year' },
  { text: 'ls skills/', output: 'react/ python/ ml/ nodejs/ docker/' },
  { text: 'echo $STATUS', output: 'open_to_work' },
];

export default function Hero() {
  const sceneRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [termIndex, setTermIndex] = useState(0);
  const [termLines, setTermLines] = useState([]);

  useEffect(() => {
    setMounted(true);
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    if (termIndex >= terminalLines.length) {
      const reset = setTimeout(() => {
        setTermLines([]);
        setTermIndex(0);
      }, 3000);
      return () => clearTimeout(reset);
    }
    const line = terminalLines[termIndex];
    const t1 = setTimeout(() => {
      setTermLines((prev) => [...prev, { type: 'cmd', text: line.text }]);
    }, 600);
    const t2 = setTimeout(() => {
      setTermLines((prev) => [...prev, { type: 'out', text: line.output }]);
    }, 1400);
    const t3 = setTimeout(() => setTermIndex((i) => i + 1), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [termIndex]);

  const parallax = (depth) => ({
    transform: `translate3d(${mouse.x * depth}px, ${mouse.y * depth}px, 0)`,
  });

  return (
    <section
      id="home"
      ref={sceneRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-bg" />
      <ParticleField />

      <div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent-500/20 blur-[100px] animate-pulse-glow"
        style={parallax(20)}
      />
      <div
        className="absolute right-[15%] bottom-[15%] h-96 w-96 rounded-full bg-lime-500/10 blur-[120px] animate-pulse-glow"
        style={{ ...parallax(-15), animationDelay: '1.5s' }}
      />

      <div className="pointer-events-none absolute inset-0 perspective-1000">
        <div className="absolute left-[8%] top-[18%] animate-float" style={parallax(40)}>
          <div className="preserve-3d h-16 w-16 animate-spin-slow">
            <div className="absolute inset-0 border border-accent-400/40 bg-accent-400/5" />
            <div className="absolute inset-0 border border-accent-400/40 bg-accent-400/5 [transform:rotateY(90deg)]" />
            <div className="absolute inset-0 border border-accent-400/40 bg-accent-400/5 [transform:rotateX(90deg)]" />
          </div>
        </div>
        <div className="absolute right-[10%] top-[22%] animate-float-slow" style={parallax(-30)}>
          <div className="h-24 w-24 rounded-full border-2 border-lime-400/30 [transform:rotateX(60deg)]" />
        </div>
        <div className="absolute left-[15%] bottom-[18%] animate-float" style={{ ...parallax(25), animationDelay: '1s' }}>
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent-400/30 to-transparent shadow-[0_0_40px_rgba(34,211,238,0.3)]" />
        </div>
        <div className="absolute right-[18%] bottom-[22%] animate-float-slow font-mono text-4xl text-ink-700" style={{ ...parallax(-20), animationDelay: '0.5s' }}>
          {'{ }'}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: text */}
        <div
          className={`text-center transition-all duration-1000 lg:text-left ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/50 px-4 py-1.5 text-xs font-medium text-ink-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Open to opportunities
          </div>

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent-400" style={parallax(8)}>
            Hello, I'm
          </p>

          <h1 className="font-display text-5xl font-bold leading-tight text-ink-50 sm:text-6xl md:text-7xl" style={parallax(6)}>
            Sourav <span className="text-gradient-animated">Sahoo</span>
          </h1>

          <h2 className="mt-4 font-display text-lg font-medium text-ink-300 sm:text-xl md:text-2xl" style={parallax(4)}>
            <Typewriter
              words={[
                'Final Year B.Tech CSE Student',
                'Full-Stack Developer',
                'AI/ML Enthusiast',
                'Problem Solver',
                'Open Source Contributor',
              ]}
            />
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-400 lg:mx-0" style={parallax(2)}>
            Crafting digital experiences with code. Passionate about{' '}
            <span className="text-accent-300">AI/ML</span>,{' '}
            <span className="text-lime-400">web technologies</span>, and building
            things that matter.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start" style={parallax(3)}>
            <MagneticButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-400 to-lime-400 px-7 py-3.5 font-medium text-ink-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <Sparkles size={18} className="transition-transform group-hover:rotate-12" />
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-ink-700 px-7 py-3.5 font-medium text-ink-200 hover:border-accent-400/50 hover:text-accent-300"
            >
              Get In Touch
            </MagneticButton>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all duration-300 hover:border-accent-400/50 hover:bg-accent-400/10 hover:text-accent-300 hover:-translate-y-1"
              >
                <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: terminal window */}
        <div
          className={`hidden transition-all duration-1000 delay-300 lg:block ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={parallax(-6)}
        >
          <div className="group relative mx-auto max-w-md">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-500/20 to-lime-500/10 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-950/80 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-ink-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-ink-500">
                  <Terminal size={12} /> sourav@portfolio: ~
                </span>
              </div>
              <div className="h-72 space-y-1.5 p-4 font-mono text-sm">
                {termLines.map((line, i) => (
                  <div key={i} className="animate-fade-up">
                    {line.type === 'cmd' ? (
                      <div className="text-ink-200">
                        <span className="text-lime-400">sourav@portfolio</span>
                        <span className="text-ink-600">:</span>
                        <span className="text-accent-400">~</span>
                        <span className="text-ink-600">$ </span>
                        {line.text}
                      </div>
                    ) : (
                      <div className="pl-4 text-ink-400">{line.text}</div>
                    )}
                  </div>
                ))}
                <div className="text-ink-200">
                  <span className="text-lime-400">sourav@portfolio</span>
                  <span className="text-ink-600">:</span>
                  <span className="text-accent-400">~</span>
                  <span className="text-ink-600">$ </span>
                  <span className="cursor-blink text-accent-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-ink-500">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} className="animate-bounce text-accent-400" />
        </div>
      </div>
    </section>
  );
}
