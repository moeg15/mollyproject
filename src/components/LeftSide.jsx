import { useRef, useState } from 'react';

export default function LeftSide() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      audio.muted = newMuteState;

      if (!newMuteState && (audio.paused || audio.ended)) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.warn('Audio play error:', err);
        });
      }
    }
  };

  return (
    <div className="leftside" style={{ position: 'relative' }}>
      <audio ref={audioRef} src="/music/theme.mp3" muted loop />
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          padding: '6px 12px',
          fontSize: '14px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}
