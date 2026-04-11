"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Tipe data untuk garis
interface LineOption {
  id: number;
  isHorizontal: boolean;
  isReverse: boolean;
  top?: string;
  left?: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
  color: string;
}

// Fungsi generate garis secara random
const generateLines = (count: number): LineOption[] => {
  return Array.from({ length: count }).map((_, i) => {
    // Arah pergerakan:
    // 0: Horizontal (kiri ke kanan)
    // 1: Horizontal (kanan ke kiri)
    // 2: Vertical (atas ke bawah)
    // 3: Vertical (bawah ke atas)
    const dir = Math.floor(Math.random() * 4);
    const isHorizontal = dir < 2;
    const isReverse = dir % 2 !== 0;

    return {
      id: i,
      isHorizontal,
      isReverse,
      // Posisi awal random
      top: isHorizontal ? `${Math.random() * 100}%` : undefined,
      left: !isHorizontal ? `${Math.random() * 100}%` : undefined,
      // Ukuran bergantung pada arah
      width: isHorizontal ? `${Math.random() * 150 + 50}px` : "2px",
      height: !isHorizontal ? `${Math.random() * 150 + 50}px` : "2px",
      // Durasi dan delay random agar tidak seragam
      duration: Math.random() * 15 + 15, // 15s - 30s untuk kesan smooth dan lambat
      delay: Math.random() * 10,
      // Warna neon acak
      color: ["#00f3ff", "#bc13fe", "#00ff66"][Math.floor(Math.random() * 3)],
    };
  });
};

export default function AnimatedLines() {
  const [lines, setLines] = useState<LineOption[]>([]);

  // Generate garis hanya di client-side (mencegah hydration mismatch)
  useEffect(() => {
    setLines(generateLines(12)); // Jumlah garis yang ditampilkan (sedang untuk performa)
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden opacity-60">
      {lines.map((line) => {
        // Tentukan animasi sumbu X atau Y
        const initialX = line.isHorizontal ? (line.isReverse ? "120vw" : "-20vw") : 0;
        const animateX = line.isHorizontal ? (line.isReverse ? "-20vw" : "120vw") : 0;
        
        const initialY = !line.isHorizontal ? (line.isReverse ? "120vh" : "-20vh") : 0;
        const animateY = !line.isHorizontal ? (line.isReverse ? "-20vh" : "120vh") : 0;

        return (
          <motion.div
            key={line.id}
            className="absolute rounded-full"
            style={{
              top: line.top,
              left: line.left,
              width: line.width,
              height: line.height,
              backgroundColor: line.color,
              boxShadow: `0 0 10px ${line.color}, 0 0 20px ${line.color}`,
              opacity: 0,
            }}
            animate={
              line.isHorizontal
                ? {
                    x: [initialX, animateX],
                    opacity: [0, 1, 1, 0],
                  }
                : {
                    y: [initialY, animateY],
                    opacity: [0, 1, 1, 0],
                  }
            }
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
              // times menentukan kapan nilai di array `animate` diaplikasikan (fade in/out di awal/akhir)
              times: [0, 0.2, 0.8, 1],
            }}
          />
        );
      })}
    </div>
  );
}
