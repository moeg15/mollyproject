import { useState, useEffect, useRef } from 'react';

export function useTypedText(fullText = '', speed = 50) {
  const [typedText, setTypedText] = useState('');
  const audioRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    setTypedText('');
    indexRef.current = 0;
    const text = fullText || '';
    audioRef.current = new Audio('/sounds/types.wav');
    audioRef.current.volume = 0.2;

    let cancelled = false;

    function type() {
      if (cancelled || indexRef.current > text.length) return;

      setTypedText(text.slice(0, indexRef.current));
      if (audioRef.current && indexRef.current < text.length) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      indexRef.current++;
      setTimeout(type, speed);
    }

    type();

    return () => { cancelled = true; };
  }, [fullText, speed]);

  return typedText;
}
