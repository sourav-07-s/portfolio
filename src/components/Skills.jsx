import { useEffect, useRef, useState } from 'react';
import {
  Code2, Database, Brain, Cloud, Layers, Terminal, Cpu, Github,
} from 'lucide-react';

const skills = [
  {
    name: 'Languages',
    Icon: Code2,
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    color: 'from-accent-400 to-accent-600',
    level: 90,
  },
  {
    name: 'Frontend',
    Icon: Layers,
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux'],
    color: 'from-lime-400 to-lime-600',
    level: 95,
  },
  {
    name: 'Backend',
    Icon: Database,
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase', 'REST'],
    color: 'from-accent-400 to-lime-400',
    level: 85,
  },
  {
    name: 'AI / ML',
    Icon: Brain,
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'NLP'],
    color: 'from-lime-500 to-accent-500',
    level: 80,
  },
  {
    name: 'DevOps & Cloud',
    Icon: Cloud,
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Vercel'],
    color: 'from-accent-500 to-accent-700',
    level: 75,
  },
  {
    name: 'Tools',
    Icon: Terminal,
    items: ['VS Code', 'Git', 'Figma', 'Postman', 'Jira', 'Vim'],
    color: 'from-lime-400 to-accent-400',
    level: 88,
  },
];

function TiltCard({ skill, index }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setBarWidth(skill.level), index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [skill.level, index]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 16;
    const rotX = -(py - 0.5) * 16;
    setTransform(`perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`);
    setGlare({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)');
    setGlare({ x: 50, y: 50 });
  };

  const { Icon } = skill;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: 'transform 0.2s ease-out' }}
      className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/50 p-6 backdrop-blur"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.12), transparent 50%)` }}
      />

      <div className="flex items-start justify-between">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-ink-950 transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={22} />
        </div>
        <span className="font-mono text-xs text-ink-700">0{index + 1}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-ink-50">{skill.name}</h3>

      {/* Proficiency bar */}
      <div className="mt-3">
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-ink-500">Proficiency</span>
          <span className="font-mono text-accent-400">{skill.level}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-ink-800">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
            style={{ width: `${barWidth}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-ink-700 bg-ink-800/50 px-2.5 py-1 text-xs font-medium text-ink-300 transition-all duration-200 hover:border-accent-400/30 hover:bg-accent-400/5 hover:text-ink-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">02 — Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">My Tech Stack</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-400">
            Technologies I work with to bring ideas to life — from concept to deployment.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <TiltCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-ink-700 bg-ink-900/40 p-5">
          <Cpu size={18} className="text-accent-400" />
          <span className="text-sm text-ink-300">Currently exploring:</span>
          {['Rust', 'WebGL', 'Kubernetes', 'LLMs'].map((t) => (
            <span key={t} className="rounded-full border border-lime-400/30 bg-lime-400/5 px-3 py-1 text-xs font-medium text-lime-400 transition-all hover:bg-lime-400/10">
              {t}
            </span>
          ))}
          <Github size={16} className="ml-2 text-ink-500" />
        </div>
      </div>
    </section>
  );
}
