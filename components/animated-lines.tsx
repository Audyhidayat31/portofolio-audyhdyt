"use client";

import { useEffect, useState } from "react";

export default function AnimatedLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // The paths matching the static geometric background
  // Colors updated to Pink and Purple based on the new reference image
  // Durations decreased slightly to make it faster
  const lines = [
    { id: 1, d: "M 200 1000 L 700 0", color: "#ff0055", dur: "12s", delay: "0s", reverse: false },
    { id: 2, d: "M 500 1000 L 1000 0", color: "#8a2be2", dur: "15s", delay: "2s", reverse: true },
    { id: 3, d: "M -100 600 L 1000 100", color: "#ff0055", dur: "18s", delay: "1s", reverse: false },
    { id: 4, d: "M 0 200 L 400 1000", color: "#8a2be2", dur: "10s", delay: "3s", reverse: true },
    { id: 5, d: "M 400 0 L 1000 800", color: "#ff0055", dur: "16s", delay: "0.5s", reverse: false },
    { id: 6, d: "M 800 0 L 1000 400", color: "#8a2be2", dur: "10s", delay: "4s", reverse: false },
    { id: 7, d: "M 0 800 L 400 1000", color: "#ff0055", dur: "9s", delay: "2.5s", reverse: true },
    { id: 8, d: "M 300 0 L 0 500", color: "#8a2be2", dur: "12s", delay: "1.5s", reverse: false },
    { id: 9, d: "M 700 1000 L 1000 600", color: "#ff0055", dur: "14s", delay: "3.5s", reverse: true },
    { id: 10, d: "M 0 400 L 600 0", color: "#8a2be2", dur: "15s", delay: "0.2s", reverse: false },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] w-full h-full overflow-hidden mix-blend-screen opacity-90">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">
        <defs>
          <filter id="neon-glow-anim" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur1" />
            <feGaussianBlur stdDeviation="3" result="blur2" />
            <feGaussianBlur stdDeviation="6" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <style>
            {`
              @keyframes dash-travel-fwd {
                0% { stroke-dashoffset: 2500; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes dash-travel-rev {
                0% { stroke-dashoffset: -2500; }
                100% { stroke-dashoffset: 0; }
              }
              .beam-fwd {
                stroke-dasharray: 250 2250; /* Panjang garis dipendekkan */
                animation: dash-travel-fwd linear infinite;
                will-change: stroke-dashoffset;
              }
              .beam-rev {
                stroke-dasharray: 250 2250; /* Panjang garis dipendekkan */
                animation: dash-travel-rev linear infinite;
                will-change: stroke-dashoffset;
              }
            `}
          </style>
        </defs>

        <g filter="url(#neon-glow-anim)">
          {lines.map((line) => (
            <path
              key={line.id}
              d={line.d}
              fill="none"
              stroke={line.color}
              strokeWidth="2"
              strokeLinecap="round"
              className={line.reverse ? 'beam-rev' : 'beam-fwd'}
              style={{
                animationDuration: line.dur,
                animationDelay: line.delay,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
