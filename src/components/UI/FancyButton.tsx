'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface TracingBeamButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const TracingBeamButton: React.FC<TracingBeamButtonProps> = ({ onClick, children }) => {
  return (
    <motion.div
      className="relative group"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        variants={{
          rest: {
            opacity: 0.5,
            rotate: 0,
            transition: { duration: 3, ease: "linear", repeat: Infinity }
          },
          hover: {
            opacity: 1,
            rotate: 360,
            transition: { duration: 2, ease: "linear", repeat: Infinity }
          }
        }}
        style={{
          originX: 0.5,
          originY: 0.5,
          scaleX: 1.05,
          scaleY: 1.15,
          fill: "none",
          strokeWidth: 3,
          strokeLinecap: "round",
          stroke: "white",
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))",
        }}
      >
        <motion.svg width="100%" height="100%" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            strokeDasharray="0.1 1"
            variants={{
              rest: { pathLength: 0.1 },
              hover: { pathLength: 0.2 }
            }}
          />
        </motion.svg>
      </motion.span>
      <svg className="absolute inset-0 w-full h-full" style={{ visibility: "hidden" }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <button
        onClick={onClick}
        className="relative px-6 py-2 bg-purple-900 bg-opacity-80 rounded-full text-white font-medium transition-colors duration-200 group-hover:bg-opacity-100"
      >
        {children}
      </button>
    </motion.div>
  );
};

export default TracingBeamButton;