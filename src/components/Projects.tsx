'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects= [
    {
        title: 'Accumens.INC',
        description: 'Implemented new features, UI enhancements, and website optimization, improving SEO score from 32 to 79 and increasing web traffic by 50%.',
        image: '/placeholder.svg',  /*'/images/placeholder.svg',*/
        tags: ['JavaScript', 'React.js', 'WordPress', 'PHP', 'HTML/CSS', 'Tailwind'],
        link: 'https://www.acumensinc.com/',
        size: 'small'
    },
    {
        title: 'Humaya Power',
        description: 'Implemented new features, UI enhancements, and website optimization, improving SEO score from 32 to 79 and increasing web traffic by 50%.',
        image: '/placeholder.svg',  /*'/images/placeholder.svg',*/
        tags: ['JavaScript', 'Next.js', 'Tailwind', 'TypeScript', 'Framer Motion'],
        link: 'https://humayapower.in/', 
        size: 'large'
    },
    {
        title: 'Calendar App',
        description: 'Engineered a responsive calendar application with resource management, event creation, and drag-and-drop functionality, enhancing user interaction and achieving a 25% improvement in scheduling efficiency.',
        image: '/placeholder.svg',  /*'/images/placeholder.svg',*/
        tags: ['JavaScript', 'Vite', 'React.js', 'HTML5', 'Tailwind CSS'],
        link: 'https://calender-tawny.vercel.app/',
        size: 'medium'
    },
    {
        title: 'E-commerce Platform',
        description: 'Developed a responsive e-commerce platform using React.js, TypeScript, and Tailwind CSS, ensuring seamless user interactions and enhanced performance, resulting in a 20% increase in performance.',
        image: '/placeholder.svg',  /*'/images/placeholder.svg',*/
        tags: ['React.js', 'TypeScript', 'Framer Motion', 'SwiperJS'],
        link: 'https://vocal-crepe-ca1835.netlify.app/',
        size: 'small'
    },
]

const Projects: React.FC = () => {
    return (
      <section id="projects" className="section-padding bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">My Projects</h2>
            <p className="text-lg text-gray-600">Here are some of my recent works:</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg overflow-hidden shadow-md ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                  project.size === 'medium' ? 'md:col-span-2' : ''
                }`}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-primary text-white px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects