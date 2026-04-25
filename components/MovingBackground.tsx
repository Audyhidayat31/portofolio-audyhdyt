"use client";

import { motion } from "framer-motion";

export default function MovingBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#030303] overflow-hidden">
            {/* Subtle background texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-screen"
                style={{
                    backgroundImage: `linear-gradient(45deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">


                {/* Static Thin White Lines */}
                <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.15">
                    <path d="M 200 1000 L 700 0" />
                    <path d="M 500 1000 L 1000 0" />
                    <path d="M -100 600 L 1000 100" />
                    <path d="M 0 200 L 400 1000" />
                    <path d="M 400 0 L 1000 800" />
                    <path d="M 800 0 L 1000 400" />
                    <path d="M 0 800 L 400 1000" />
                    {/* Extra structural lines */}
                    <path d="M 300 0 L 0 500" strokeWidth="0.5" strokeOpacity="0.1" />
                    <path d="M 700 1000 L 1000 600" strokeWidth="0.5" strokeOpacity="0.1" />
                    <path d="M 0 400 L 600 0" strokeWidth="0.5" strokeOpacity="0.1" />
                </g>
            </svg>
        </div>
    );
}