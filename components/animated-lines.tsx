"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mencegah hydration mismatch
  if (!mounted) return null;

  // Konfigurasi warna neon murni untuk template beams
  const colors = {
    cyan: "#00f3ff",
    purple: "#bc13fe",
    green: "#00ff66",
  };

  // Konfigurasi jumlah grid track
  const verticalColumns = 7;
  const horizontalRows = 5;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center overflow-hidden opacity-70"
      style={{
        // Efek Masking: Terang di bagian tengah layar, dan secara halus memudar/menghilang di area tepi layar
        maskImage: "radial-gradient(ellipse at center, black 10%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 100%)",
      }}
    >
      
      {/* --- Kumpulan Tracks Vertikal (Kolom Beraturan) --- */}
      <div className="absolute inset-0 flex h-full w-full flex-row justify-evenly">
        {Array.from({ length: verticalColumns }).map((_, i) => {
          const cArray = [colors.cyan, colors.purple, colors.green];
          const color = cArray[i % cArray.length];
          
          // Pengaturan waktu animasi yang rapi dan terukur
          const delay = i * 0.7; 
          const duration = 6 + (i % 3); 

          // Selang-seling arah jatuhnya beam (dari atas ke bawah & dari bawah ke atas)
          const isDownward = i % 2 === 0;
          const moveFrom = isDownward ? "-30vh" : "120vh";
          const moveTo = isDownward ? "120vh" : "-30vh";
          const gradientDir = isDownward ? "to bottom" : "to top";

          return (
            <div key={`v-${i}`} className="relative h-full w-[1px] bg-white/5">
              <motion.div
                className="absolute left-0 w-full"
                style={{
                  height: "35vh", // Panjang ekor beam
                  background: `linear-gradient(${gradientDir}, transparent, ${color})`,
                  boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                }}
                initial={{ y: moveFrom, opacity: 0 }}
                animate={{
                  y: [moveFrom, moveTo],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  ease: "linear",
                  delay: delay,
                  times: [0, 0.2, 0.8, 1], // transisi muncul dan menghilangnya cahaya di start and end
                }}
              />
            </div>
          );
        })}
      </div>

      {/* --- Kumpulan Tracks Horizontal (Baris Beraturan) --- */}
      <div className="absolute inset-0 flex flex-col justify-evenly">
        {Array.from({ length: horizontalRows }).map((_, i) => {
          const cArray = [colors.purple, colors.green, colors.cyan];
          const color = cArray[i % cArray.length];
          
          // Delay saling mengisi dengan vertikal agar pola terlihat kompleks namun terstruktur
          const delay = 1.2 + i * 0.9;
          const duration = 7 + (i % 2) * 1.5;

          // Selang-seling arah jalannya sinar dari Kiri-Kanan / Kanan-Kiri
          const isRightward = i % 2 === 0;
          const moveFrom = isRightward ? "-30vw" : "120vw";
          const moveTo = isRightward ? "120vw" : "-30vw";
          const gradientDir = isRightward ? "to right" : "to left";

          return (
            <div key={`h-${i}`} className="relative h-[1px] w-full bg-white/5">
              <motion.div
                className="absolute top-0 h-full"
                style={{
                  width: "25vw", // Panjang beam secara horizontal
                  background: `linear-gradient(${gradientDir}, transparent, ${color})`,
                  boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                }}
                initial={{ x: moveFrom, opacity: 0 }}
                animate={{
                  x: [moveFrom, moveTo],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  ease: "linear",
                  delay: delay,
                  times: [0, 0.2, 0.8, 1],
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
