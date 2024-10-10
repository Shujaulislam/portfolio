"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { DivOrigami } from './LogoOrigami'
import { SiAxios, SiBabel, SiCss3, SiGit, SiHtml5, SiJavascript, SiJquery, SiMantine, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVite } from 'react-icons/si'





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
                <p className="text-lg text-gray-600">Here are some of the technologies I work with: </p>
            </motion.div>
            
        </div>
        <div className='flex justify-center items-center'>
              <DivOrigami
              icons={[
                {icon: SiHtml5, color: "#e34c26", backgroundColor: "bg-neutral-200"},
                {icon: SiCss3, color: "#264de4", backgroundColor: "bg-neutral-200"},
                {icon: SiJavascript, color: "yellow", backgroundColor: ""},
                {icon: SiTypescript, color: "#3178c6", backgroundColor: "bg-white"},
                {icon: SiGit, color: "#F05033", backgroundColor: "bg-white"},
              ]}
              >Languages</DivOrigami>
              <DivOrigami
              icons={[
                {icon: SiReact, color: "#61dbfb", backgroundColor: "bg-gray-500"},
                {icon: SiNextdotjs, color: "black", backgroundColor: "bg-white"},
                {icon: SiTailwindcss, color: "#3178c6", backgroundColor: "bg-white"},
              ]}
              >Frameworks</DivOrigami>
              <DivOrigami
              icons={[
                {icon: SiVite, color: "#646CFF", backgroundColor: "bg-white"},
                {icon: SiBabel, color: "#FBDE44", backgroundColor: "bg-gray-500"},
                {icon: SiVisualstudiocode, color: "#3178c6", backgroundColor: "bg-neutral-200"},
                {icon: SiPostman, color: "#FC6D35", backgroundColor: "bg-white"},
                {icon: SiMantine, color: "yellow", backgroundColor: ""},
                {icon: SiAxios, color: "#3178c6", backgroundColor: "bg-neutral-200"},
                {icon: SiJquery, color: "#3178c6", backgroundColor: "bg-neutral-200"},
              ]}
              >Dev Tools & Libraries</DivOrigami>
        </div>
    </section>
  )

}

export default Skills
