"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Konfigurasi layout persis berdasarkan kotak (HUD Frame) pada sketsa, tanpa mengubah style animasi lama
  const desktopVerticals = [
    { left: "20%", color: "#00f3ff", dur: 6, delay: 0.2, dir: "down" },
    { left: "80%", color: "#00f3ff", dur: 6, delay: 2.2, dir: "down" },
    { left: "15%", color: "#bc13fe", dur: 7, delay: 4.5, dir: "up" },
    { left: "85%", color: "#bc13fe", dur: 7, delay: 1.5, dir: "up" },
  ];

  const desktopHorizontals = [
    { top: "30%", color: "#bc13fe", dur: 7, delay: 1.0, dir: "right" },
    { top: "70%", color: "#bc13fe", dur: 7, delay: 3.5, dir: "left" },
    { top: "25%", color: "#00ff66", dur: 8, delay: 0.5, dir: "left" },
    { top: "75%", color: "#00ff66", dur: 8, delay: 2.5, dir: "right" },
  ];

  const mobileVerticals = [
    { left: "10%", color: "#00f3ff", dur: 6, delay: 0.2, dir: "down" },
    { left: "90%", color: "#00f3ff", dur: 6, delay: 2.2, dir: "down" },
  ];

  const mobileHorizontals = [
    { top: "25%", color: "#bc13fe", dur: 7, delay: 1.0, dir: "right" },
    { top: "75%", color: "#bc13fe", dur: 7, delay: 3.5, dir: "left" },
  ];

  // Helper render untuk menghasilkan beam persis seperti aslinya
  const renderVerticals = (configs: any[], prefix: string) => (
    <div className="absolute inset-0 h-full w-full">
      {configs.map((v, i) => {
        const moveFrom = v.dir === "down" ? "-30vh" : "120vh";
        const moveTo = v.dir === "down" ? "120vh" : "-30vh";
        const gradientDir = v.dir === "down" ? "to bottom" : "to top";

        return (
          <div key={`${prefix}-v-${i}`} className="absolute bottom-0 top-0 w-[1px] bg-white/5" style={{ left: v.left }}>
            <motion.div
              className="absolute left-0 w-full"
              style={{
                height: "35vh", // Panjang ekor beam
                background: `linear-gradient(${gradientDir}, transparent, ${v.color})`,
                boxShadow: `0 0 10px ${v.color}, 0 0 20px ${v.color}`,
              }}
              initial={{ y: moveFrom, opacity: 0 }}
              animate={{
                y: [moveFrom, moveTo],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: v.dur, // Kecepatan dipertahankan sama seperti aslinya
                ease: "linear",
                delay: v.delay,
                times: [0, 0.2, 0.8, 1], // transisi halus
              }}
            />
          </div>
        );
      })}
    </div>
  );

  const renderHorizontals = (configs: any[], prefix: string) => (
    <div className="absolute inset-0 h-full w-full">
      {configs.map((h, i) => {
        const moveFrom = h.dir === "right" ? "-30vw" : "120vw";
        const moveTo = h.dir === "right" ? "120vw" : "-30vw";
        const gradientDir = h.dir === "right" ? "to right" : "to left";

        return (
          <div key={`${prefix}-h-${i}`} className="absolute left-0 right-0 h-[1px] bg-white/5" style={{ top: h.top }}>
            <motion.div
              className="absolute top-0 h-full"
              style={{
                width: "25vw", // Panjang beam horizontal
                background: `linear-gradient(${gradientDir}, transparent, ${h.color})`,
                boxShadow: `0 0 10px ${h.color}, 0 0 20px ${h.color}`,
              }}
              initial={{ x: moveFrom, opacity: 0 }}
              animate={{
                x: [moveFrom, moveTo],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: h.dur, // Kecepatan dipertahankan
                ease: "linear",
                delay: h.delay,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center overflow-hidden opacity-80 mix-blend-screen"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
      }}
    >
      {/* Desktop View */}
      <div className="hidden h-full w-full md:block">
        {renderVerticals(desktopVerticals, "desk")}
        {renderHorizontals(desktopHorizontals, "desk")}
      </div>
      
      {/* Mobile View */}
      <div className="block h-full w-full md:hidden">
        {renderVerticals(mobileVerticals, "mob")}
        {renderHorizontals(mobileHorizontals, "mob")}
      </div>
    </div>
  );
}
