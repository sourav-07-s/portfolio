import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setExit(true), 400);
        setTimeout(onDone, 1000);
      }
      setProgress(Math.min(p, 100));
    }, 120);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        exit ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative mb-8">
        <div className="h-20 w-20 animate-spin-slow rounded-full border-2 border-transparent border-t-accent-400 border-r-accent-400" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-bold text-gradient">SS</span>
        </div>
      </div>
      <div className="font-mono text-sm text-ink-400">
        <span className="text-accent-400">{Math.floor(progress)}</span>
        <span className="text-ink-600"> / 100</span>
      </div>
      <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-ink-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-lime-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
        Initializing
      </p>
    </div>
  );
}
