import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science Engineering',
    org: 'RV College of Engineering, Bangalore',
    period: '2022 — 2026',
    description:
      'Pursuing final year with a CGPA of 8.7. Coursework in Data Structures, DBMS, Operating Systems, Machine Learning, and Distributed Systems.',
    tags: ['Data Structures', 'Algorithms', 'ML', 'DBMS'],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    org: 'TechVerse Solutions',
    period: 'Summer 2025',
    description:
      'Built and optimized REST APIs serving 50K+ daily requests. Developed a real-time analytics dashboard using React and WebSocket. Reduced API latency by 35%.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    type: 'achievement',
    title: 'Winner — Smart India Hackathon 2024',
    org: 'Government of India',
    period: '2024',
    description:
      'Led a team of 6 to build an AI-driven disaster management system. Won among 300+ teams nationwide with a cash prize of Rs 1,00,000.',
    tags: ['AI', 'IoT', 'Team Leadership'],
  },
  {
    type: 'work',
    title: 'ML Research Intern',
    org: 'IISc Bangalore',
    period: 'Winter 2024',
    description:
      'Researched transformer-based architectures for low-resource language translation. Co-authored a paper accepted at a national NLP conference.',
    tags: ['PyTorch', 'NLP', 'Transformers', 'Research'],
  },
  {
    type: 'achievement',
    title: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    period: '2024',
    description:
      'Demonstrated foundational knowledge of AWS cloud services, architecture, security, and billing.',
  },
  {
    type: 'education',
    title: 'Higher Secondary (PCM + CS)',
    org: 'Delhi Public School',
    period: '2020 — 2022',
    description:
      'Graduated with 94.2% in Science stream. Introduced to programming through C++ and developed a passion for computer science.',
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
};

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((child, i) => {
            setTimeout(() => child.classList.add('is-visible'), i * 120);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-16 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
            04 — Journey
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">
            My Path So Far
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-400">
            Education, experience, and milestones that shaped my journey in
            tech.
          </p>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-400/50 via-ink-700 to-transparent sm:left-1/2" />

          {timeline.map((item, i) => {
            const Icon = iconMap[item.type];
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`reveal relative mb-10 flex ${
                  isLeft ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                <div className="absolute left-4 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink-700 bg-ink-900">
                    <Icon size={14} className="text-accent-400" />
                  </div>
                </div>

                <div
                  className={`ml-12 w-full sm:ml-0 sm:w-[44%] ${
                    isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                  }`}
                >
                  <div className="group rounded-2xl border border-ink-700 bg-ink-900/50 p-5 backdrop-blur transition-all duration-300 hover:border-accent-400/30 hover:bg-ink-800/50">
                    <span className="font-mono text-xs text-accent-400">
                      {item.period}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold text-ink-50">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-400">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div
                        className={`mt-3 flex flex-wrap gap-1.5 ${
                          isLeft ? 'sm:justify-end' : ''
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-ink-800/60 px-2 py-0.5 font-mono text-xs text-ink-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
