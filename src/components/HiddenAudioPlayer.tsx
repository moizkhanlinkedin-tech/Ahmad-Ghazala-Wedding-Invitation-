import React, { useEffect, useRef, useState } from 'react';

const AUDIO_URL =
  'https://www.dropbox.com/scl/fi/3d2at2urqd3pygxv3rd8g/Kaafi-Hai-Na-Full-Video-Musafir-Cafe-Vikrant-Massey-Vedika-Mahima-Garvit-Priyansh-Jonita_trimmed.mp3?rlkey=vynalliuc8v04gb40hs5n31dr&st=cogc7xbz&raw=1';

interface HiddenAudioPlayerProps {
  shouldPlay: boolean;
}

export const HiddenAudioPlayer: React.FC<HiddenAudioPlayerProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // When shouldPlay becomes true (triggered by the user seal click), trigger playback immediately in background
  useEffect(() => {
    if (!shouldPlay || hasStarted) return;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.75;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setHasStarted(true);
            })
            .catch(() => {
              // If browser blocked initial autoplay, attach a one-time gesture listener
              const fallbackPlay = () => {
                if (audioRef.current) {
                  audioRef.current.play().then(() => setHasStarted(true)).catch(() => {});
                }
                window.removeEventListener('click', fallbackPlay);
                window.removeEventListener('touchstart', fallbackPlay);
              };
              window.addEventListener('click', fallbackPlay, { once: true });
              window.addEventListener('touchstart', fallbackPlay, { once: true });
            });
        }
      }
    };

    playAudio();
  }, [shouldPlay, hasStarted]);

  return (
    <audio
      ref={audioRef}
      src={AUDIO_URL}
      preload="auto"
      loop
      aria-hidden="true"
      tabIndex={-1}
      className="hidden pointer-events-none select-none invisible"
      style={{ display: 'none' }}
    />
  );
};
