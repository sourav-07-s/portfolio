import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Star } from 'lucide-react';

const projects = [
  {
    title: 'NeuralStudy — AI Study Companion',
    category: 'AI / ML',
    description:
      'An AI-powered study platform that generates summaries, flashcards, and quizzes from uploaded notes using NLP. Features spaced-repetition learning and progress analytics.',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    link: '#',
    repo: '#',
    stats: { stars: '1.2k', forks: '180' },
  },
  {
    title: 'DevConnect — Developer Social Network',
    category: 'Full-Stack',
    description:
      'A social platform for developers to showcase projects, share code snippets, and collaborate. Real-time chat, code highlighting, and GitHub integration.',
    tech: ['Next.js', 'Socket.io', 'Node.js', 'MongoDB'],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    link: '#',
    repo: '#',
    stats: { stars: '850', forks: '120' },
  },
  {
    title: 'MediScan — Pneumonia Detection',
    category: 'Deep Learning',
    description:
      'A CNN-based model that detects pneumonia from chest X-ray images with 94% accuracy. Deployed as a web app for radiologists to get instant second opinions.',
    tech: ['PyTorch', 'Flask', 'React', 'Docker'],
    image:
      'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    repo: '#',
    stats: { stars: '420', forks: '65' },
  },
  {
    title: 'EcoTrack — Carbon Footprint App',
    category: 'Mobile / Web',
    description:
      'A sustainability tracker that calculates your carbon footprint and suggests personalized eco-friendly habits. Gamified with achievements and leaderboards.',
    tech: ['React Native', 'Supabase', 'Chart.js'],
    image:
      'https://images.pexels.com/photos/3933526/pexels-photo-3933526.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    repo: '#',
    stats: { stars: '310', forks: '45' },
  },
  {
    title: 'CodeArena — Competitive Programming Hub',
    category: 'Web App',
    description:
      'A platform for hosting coding contests with a real-time code editor, automated judge system, and live leaderboard. Supports 10+ programming languages.',
    tech: ['React', 'Node.js', 'Redis', 'Docker', 'WebSocket'],
    image:
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    repo: '#',
    stats: { stars: '680', forks: '90' },
  },
  {
    title: 'Smart Campus — IoT Dashboard',
    category: 'IoT / Cloud',
    description:
      'An IoT-based campus management system monitoring classroom occupancy, energy usage, and air quality in real-time with predictive maintenance alerts.',
    tech: ['Python', 'AWS', 'MQTT', 'React', 'InfluxDB'],
    image:
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    repo: '#',
    stats: { stars: '250', forks: '35' },
  },
];

const categories = ['All', 'AI / ML', 'Full-Stack', 'Deep Learning', 'Web App', 'IoT / Cloud'];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 10;
    const rotX = -(py - 0.5) * 10;
    setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`);
    setGlare({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)');
    setGlare({ x: 50, y: 50 });
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: 'transform 0.3s ease-out' }}
      className="group relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-900/50 backdrop-blur hover:border-accent-400/30"
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.1), transparent 50%)` }}
      />

      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-accent-400/30 bg-ink-950/80 px-3 py-1 text-xs font-medium text-accent-300 backdrop-blur">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-lime-400/90 px-3 py-1 text-xs font-bold text-ink-950">
              <Star size={10} className="fill-ink-950" /> Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-4 flex items-center gap-3 font-mono text-xs text-ink-400">
          <span className="flex items-center gap-1"><Star size={11} className="text-lime-400" /> {project.stats.stars}</span>
          <span className="flex items-center gap-1"><Github size={11} /> {project.stats.forks}</span>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink-50 transition-colors group-hover:text-accent-300">
            {project.title}
          </h3>
          <div className="flex gap-1.5">
            {project.link && (
              <a
                href={project.link}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 text-ink-400 transition-all hover:border-accent-400/40 hover:text-accent-300"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 text-ink-400 transition-all hover:border-accent-400/40 hover:text-accent-300"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-ink-800/60 px-2 py-0.5 font-mono text-xs text-ink-300 transition-colors group-hover:text-ink-100">
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute right-5 top-[55%] z-10 text-ink-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight size={24} className="text-accent-400" />
      </span>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">03 — Projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">Things I've Built</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-400">
            A selection of projects that showcase my skills across full-stack development, AI/ML, and everything in between.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-accent-400 text-ink-950 shadow-lg shadow-accent-500/20'
                  : 'border border-ink-700 text-ink-400 hover:border-accent-400/40 hover:text-ink-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-ink-300 transition-all duration-300 hover:border-accent-400/40 hover:bg-accent-400/5 hover:text-accent-300"
          >
            <Github size={16} /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
