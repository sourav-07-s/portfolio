const techs = [
  'React', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL',
  'Docker', 'AWS', 'PyTorch', 'Next.js', 'Tailwind CSS', 'MongoDB',
  'Supabase', 'Redis', 'GraphQL', 'Kubernetes', 'C++', 'Java',
];

export default function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="relative overflow-hidden border-y border-ink-800 bg-ink-950/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-8">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-medium text-ink-600 transition-colors hover:text-accent-400">
              {tech}
            </span>
            <span className="text-accent-400/30">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
