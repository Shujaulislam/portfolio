'use client'

import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a Front End Developer with 1 year of experience in developing and implementing user-friendly web applications. My expertise lies in React, HTML, CSS, and JavaScript, with a strong focus on creating responsive and performant web experiences.
            </p>
            <p className="text-lg text-gray-600">
              I'm passionate about translating design concepts into functional, interactive websites and applications. My experience includes collaborating with designers and back-end developers to deliver high-quality solutions that meet both user needs and business objectives.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
                <Link 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
                >
                    Download Resume
                </Link>
            </motion.div>
        </div>
        <motion.div
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className="relative h-80 md:h-full"
        >
            <Image
            src="/images/profilePhoto.jpg"
            alt="Shuja Ul Islam"
            fill
            objectFit="cover"
            className="rounded-lg shadow-lg"
            />
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default About