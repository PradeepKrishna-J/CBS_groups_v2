import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div ref={ref} className={`split-text ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: `${wordIndex * 0.08}s`,
            }}
          >
            {word}
            {wordIndex < words.length - 1 && '\u00A0'}
          </span>
        </span>
      ))}
    </div>
  );
};
