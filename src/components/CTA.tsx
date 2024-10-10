'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import FancyButton from './UI/FancyButton'



const ContactCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex items-center justify-center h-[60vh] bg-gradient-to-br from-purple-700 to-indigo-900">
      <motion.div
        className="relative w-[650px] h-[350px] perspective-1000"
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
          <div className="w-full h-full p-8 rounded-2xl bg-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg border border-purple-400 border-opacity-30 flex flex-col justify-between">
            <div>
              <h2 className="text-6xl font-extrabold text-white text-center mb-4">Contact<span className="text-blue-400">.</span></h2>
              <p className="text-gray-100 mb-4 text-2xl text-center">
              Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed.
              </p>
            </div>
            <div className="text-center pb-14">
              <Link 
                href="mailto:shujaulisla@gmail.com" 
                className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl"
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
          <div className="w-full h-full p-8 rounded-2xl bg-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg border border-purple-400 border-opacity-30 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-8 pb-9">
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={40} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <FancyButton onClick={flipCard}>
            {isFlipped ? 'Show Info' : 'Show Socials'}
          </FancyButton>
        </div>
        
        {/* Flip button */}

        {/* <button
          onClick={flipCard}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm"
        >
          {isFlipped ? 'Show Info' : 'Show Socials'}
        </button> */}
      </motion.div>
    </div>
  )
}

export default ContactCard