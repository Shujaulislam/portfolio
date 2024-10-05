'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface FancyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const FancyButton: React.FC<FancyButtonProps> = ({ onClick, children }) => {
  return (
    <motion.div
      className="relative p-[3px] overflow-hidden rounded-full group"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{
          backgroundSize: '200% 200%',
        }}
        variants={{
          rest: {
            backgroundPosition: '0% 50%',
          },
          hover: {
            backgroundPosition: '100% 50%',
          },
        }}
        transition={{
          duration: 0.5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <button
        onClick={onClick}
        className="relative px-6 py-2 bg-purple-900 rounded-full text-white font-medium transition-colors duration-200 group-hover:bg-purple-800 z-10"
      >
        {children}
      </button>
    </motion.div>
  );
};

export default FancyButton;