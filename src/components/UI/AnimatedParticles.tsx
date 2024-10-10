import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'





const AnimatedParticles: React.FC = () => {
    const [particles, setParticles] = useState<Array<{
      left: string;
      top: string;
      scale: number;
      width: string;
      height: string;
      duration: number;
    }>>([])
  
    useEffect(() => {
      const newParticles = [...Array(60)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        duration: Math.random() * 20 + 10,
      }))
      setParticles(newParticles)
    }, [])
  
    if (particles.length === 0) {
      return null // or a loading placeholder
    }
  
    return (
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-white opacity-45 rounded-full"
            initial={{
              left: '50%',
              top: '50%',
              scale: particle.scale,
            }}
            animate={{
              left: particle.left,
              top: particle.top,
              scale: particle.scale,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{
              width: particle.width,
              height: particle.height,
            }}
          />
        ))}
      </div>
    )
  }

  export default AnimatedParticles