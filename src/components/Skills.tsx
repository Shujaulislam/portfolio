"use client"
import React from 'react'
import {motion} from 'framer-motion'
// import { DivOrigami } from './LogoOrigami'


const skills = [
    { name: "JavaScript", level:90 },
    { name: "React", level:85 },
    { name: "HTML/CSS", level:95 },
    { name: "Typescript", level:80 },
    { name: "Next.js", level:75 },
    { name: "Tailwind CSS", level:85 },
]

const SkillBar: React.FC<{name: string, level: number}> = ({name, level}) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-text">{name}</span>
            <span className="text-sm font-medium text-text">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
            className='bg-primary rounded-full h-2.5'
            initial={{width: 0}}
            whileInView={{width: `${level}%`}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{once: true}}
            />
        </div>
    </div>
)

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
        <div className="container">
            <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className='text-center mb-12'
            >
                <h2 className="text-3xl text-text font-bold mb-4">My Skills</h2>
                <p className="text-lg text-gray-600">Here are some of the technologies I work with:</p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
        {/* <DivOrigami/> */}
    </section>
  )

}

export default Skills
