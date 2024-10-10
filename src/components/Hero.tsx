'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Canvas } from '@react-three/fiber'
import AnimatedSphere from './UI/Blob'
import { OrbitControls } from '@react-three/drei'
import AnimatedParticles from './UI/AnimatedParticles'



const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      {/* <AnimatedParticles/> */}
      {/* <div className="absolute inset-0 z-0 flex justify-center items-center">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere
                radius={1} 
                widthSegments={100}
                heightSegments={200}
                position={[0, 0, 0]} 
                distort={0.5} 
                speed={3}
                />
                <OrbitControls />
            </Canvas>
      </div> */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Shuja Ul Islam
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          <TypeAnimation
            sequence={[
              'Front End Developer',
              2000,
              'React Specialist',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Crafting seamless digital experiences with cutting-edge web technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {[
            { Icon: FaGithub, color: 'black', url: 'https://github.com/Shujaulislam' },
            { Icon: FaLinkedin, color: 'darkblue', url: 'https://www.linkedin.com/in/shuja-ul-islam' },
            { Icon: FaTwitter, color: 'blue', url: '#' },
          ].map(({ Icon, color, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <Icon size={30} color={color} />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className=" text-black"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



export default Hero