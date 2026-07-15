import { useEffect, useRef, useState } from 'react';

export default function Typewriter({ words, className = '' }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const word = words[wordIndex % words.length];

    if (!isDeleting && text === word) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeoutRef.current);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
      setSpeed(100);
      return;
    }

    const nextChar = isDeleting
      ? word.substring(0, text.length - 1)
      : word.substring(0, text.length + 1);

    timeoutRef.current = setTimeout(() => {
      setText(nextChar);
      setSpeed(isDeleting ? 50 : 120);
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, wordIndex, words, speed]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-accent-400">|</span>
    </span>
  );
}
