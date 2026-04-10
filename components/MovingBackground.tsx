"use client";

import { motion } from "framer-motion";

export default function MovingBackground() {
    return (
        // Container utama: fixed di belakang semua elemen (z-[-1]) dengan warna dasar gelap
        <div className="fixed inset-0 z-[-1] h-screen w-full bg-slate-950 overflow-hidden">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] z-0"
                style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Abstract lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-12"></div>
                <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -rotate-12"></div>
                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-6"></div>
            </div>

            {/* Orb 1: Biru Gelap */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/40 blur-[120px] md:blur-[150px]"
                animate={{
                    x: ["0%", "20%", "0%"],
                    y: ["0%", "30%", "0%"],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18, // Bergerak sangat lambat (18 detik per loop)
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orb 2: Ungu */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/30 blur-[120px] md:blur-[150px]"
                animate={{
                    x: ["0%", "-30%", "0%"],
                    y: ["0%", "-20%", "0%"],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 22, // Durasi berbeda agar pergerakannya tidak sinkron (terlihat lebih natural)
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orb 3: Aksen Biru Terang (Opsional) */}
            <motion.div
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-800/20 blur-[100px] md:blur-[120px]"
                animate={{
                    x: ["0%", "40%", "0%"],
                    y: ["0%", "-40%", "0%"],
                    scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}