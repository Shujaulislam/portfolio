'use client'

import React from 'react'
import {motion} from 'framer-motion'

const experiences = [
    {
        company: 'Humaya Power',
        position: 'Frontend Developer',
        period: 'December 2023 - Present',
        description: [
            'Led the development of Humaya Power\'s main website using Next.js, delivering a high-performance, SEO-optimized platform that boosted user engagement by 30%.',
            'Collaborated with the client to define their brand identity and requirements, translating them into a visually appealing and user-centric design, increasing client satisfaction by 20%.',
            'Optimized the website for maximum speed and scalability, increasing performance by 40%.'
        ],
    },
    {
        company: 'Sale Gully Retail Private Limited',
        position: 'Frontend Developer Intern',
        period: 'January 2024 - June 2024',
        description: [
            'Spearheaded the creation of company websites, enhancing UI/UX with HTML, CSS, JavaScript, and React, resulting in a 25% increase in user engagement and a 15% improvement in retention.',
            'Played a key role in optimizing website performance, achieving faster load times and responsiveness across various devices.',
            'Drove the development of an E-learning platform, boosting user engagement by 35%, while collaborating with cross-functional teams to reduce project turnaround time by 10%.',
          ],
    },
]

const Experience: React.FC = () => {
  return (
    <section id='experience' className='section-padding bg-white'>
      <div className='container'>
        <motion.div 
        className='text-center mb-12'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duaration: 0.8}}
        viewport={{once: true}}
        >
            <h2 className='text-3xl text-text font-bold mb-4'>Work Experience</h2>
            <p className='text-lg text-gray-600'>My professional journey has been marked by a commitment to delivering excellence and continuous learning. Here are some highlights:</p>
        </motion.div>
        <div className='space-y-12'>
            {experiences.map((exp, index) => (
                <motion.div
                key={index}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: index * 0.2}}
                viewport={{once: true}}
                className='bg-background p-6 rounded-lg shadow-md'
                >
                    <h3 className='text-xl text-text font-semibold mb-2'>{exp.position}</h3>
                    <p className='text-primary font-medium mb-2'>{exp.company}</p>
                    <p className='text-gray-600 mb-4'>{exp.period}</p>
                    <ul className='list-disc list-inside space-y-2'>
                        {exp.description.map((item, i) => (
                            <li key={i} className='text-gray-700'>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
