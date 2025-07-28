import { useRef, useState } from 'react';

export default function LeftSide() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      console.log("music on");

      // If audio is paused or ended, restart it
      if (audio.paused || audio.ended) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.warn('Audio play error:', err);
        });
      }
      console.log("music off");
      // Toggle muted state
      const newMuteState = !isMuted;
      audio.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <div className="leftside" style={{ position: 'relative' }}>
      <audio ref={audioRef} src="/music/theme.mp3" />
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
