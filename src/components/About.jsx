import { useEffect, useRef } from 'react';
import { Code2, GraduationCap, MapPin, Coffee, Download } from 'lucide-react';
import CountUp from './CountUp.jsx';

const stats = [
  { value: 8.7, label: 'CGPA', suffix: '/10', decimals: 1 },
  { value: 15, label: 'Projects Built', suffix: '+', decimals: 0 },
  { value: 5, label: 'Internships', suffix: '', decimals: 0 },
  { value: 3, label: 'Years Coding', suffix: '+', decimals: 0 },
];

const facts = [
  { Icon: GraduationCap, text: 'B.Tech CSE — Final Year' },
  { Icon: MapPin, text: 'Odisha, India' },
  { Icon: Code2, text: 'Full-Stack & AI/ML' },
  { Icon: Coffee, text: 'Chai-powered developer' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((child, i) => {
            setTimeout(() => child.classList.add('is-visible'), i * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 px-6">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
            01 — About
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            Who I Am
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Portrait card */}
          <div className="reveal perspective-1000">
            <div
              className="group relative mx-auto max-w-sm"
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.tilt-card');
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width - 0.5;
                const py = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.tilt-card');
                if (card) card.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
              }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-500/20 to-lime-500/10 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="tilt-card relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-900/60 backdrop-blur transition-transform duration-300 ease-out" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[120px] font-bold text-gradient opacity-30">SS</span>
                  </div>
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-ink-950/80 px-3 py-1 text-xs font-medium text-lime-400 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                    Online
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink-50">Sourav Sahoo</h3>
                  <p className="mt-1 text-sm text-accent-300">Computer Science Engineering</p>
                  <div className="mt-4 space-y-2">
                    {facts.map(({ Icon, text }) => (
                      <div key={text} className="flex items-center gap-2.5 text-sm text-ink-400">
                        <Icon size={15} className="text-accent-400" />
                        {text}
                      </div>
                    ))}
                  </div>
                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-ink-700 py-2.5 text-sm font-medium text-ink-300 transition-all duration-300 hover:border-accent-400/40 hover:bg-accent-400/5 hover:text-accent-300">
                    <Download size={15} /> Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + stats */}
          <div className="reveal">
            <p className="text-lg leading-relaxed text-ink-300">
              I'm a final-year <span className="text-ink-50">B.Tech Computer Science</span> student
              passionate about building software that solves real problems. From writing my first
              line of code to deploying full-stack applications, my journey has been driven by
              curiosity and a love for clean, elegant solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-400">
              I specialize in <span className="text-accent-300">full-stack web development</span> and
              have a strong interest in <span className="text-lime-400">machine learning</span> and
              AI. I enjoy turning complex problems into intuitive interfaces and robust backend
              systems.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-400">
              When I'm not coding, you'll find me contributing to open source, participating in
              hackathons, or exploring the latest in tech.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/40 p-4 text-center transition-all duration-300 hover:border-accent-400/40 hover:bg-ink-800/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-400/0 to-accent-400/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-400/5 group-hover:to-lime-400/5 group-hover:opacity-100" />
                  <p className="relative font-display text-2xl font-bold text-ink-50">
                    <CountUp end={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                  <p className="relative mt-1 text-xs text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
