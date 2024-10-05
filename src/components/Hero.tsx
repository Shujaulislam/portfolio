'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      <BackgroundAnimation />
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
            { Icon: FaGithub, url: 'https://github.com/Shujaulislam' },
            { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/shuja-ul-islam' },
            { Icon: FaTwitter, url: '#' },
          ].map(({ Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <Icon size={30} />
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

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white opacity-45 rounded-full"
          initial={{
            left: '50%', //.`${Math.random() * 100}%`,
            top: '50%', //`${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Hero