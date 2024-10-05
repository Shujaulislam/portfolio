'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const ContactCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900">
      <motion.div
        className="relative w-96 h-64 perspective-1000"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front of the card */}
        <motion.div
          className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'invisible' : 'visible'
          }`}
        >
          <div className="w-full h-full p-8 rounded-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg border border-white border-opacity-20 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Contact<span className="text-blue-400">.</span></h2>
              <p className="text-gray-200 mb-4">
                Let's connect! Reach out via email or find me on social media.
              </p>
            </div>
            <div className="text-center mb-8">
              <Link 
                href="mailto:shujaulisla@gmail.com" 
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                ✉️ shujaulisla@gmail.com
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className={`absolute inset-0 w-full h-full backface-hidden ${
            isFlipped ? 'visible' : 'invisible'
          }`}
          style={{
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full h-full p-8 rounded-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg border border-white border-opacity-20 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: FaGithub, link: 'https://github.com/Shujaulislam' },
                { icon: FaLinkedin, link: 'https://www.linkedin.com/in/shuja-ul-islam' },
                { icon: FaTwitter, link: '#' },
                { icon: FaEnvelope, link: 'mailto:shujaulisla@gmail.com' },
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={40} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Flip button */}
        <button
          onClick={flipCard}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
        >
          {isFlipped ? 'Show Info' : 'Show Socials'}
        </button>
      </motion.div>
    </div>
  )
}

export default ContactCard