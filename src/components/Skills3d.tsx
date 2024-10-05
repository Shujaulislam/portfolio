'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { SiJavascript, SiReact, SiHtml5, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" />, color: "#f0db4f" },
  { name: 'React', icon: <SiReact color="#61dafb" />, color: "#61dafb" },
  { name: 'HTML/CSS', icon: <SiHtml5 color="#e34c26" />, color: "#e34c26" },
  { name: 'TypeScript', icon: <SiTypescript color="#007acc" />, color: "#007acc",},
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" />, color: "#ffffff" },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38b2ac" />, color: "#38b2ac" },
]

const SkillIcon = ({ name, icon, color, position }: { name: string, icon: React.ReactNode, color: string, position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      mesh.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
      
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        {/* <boxGeometry args={[1, 1, 1]} /> */}
        <meshStandardMaterial color={color} transparent opacity={0.9}/>
        <Html transform occlude position={[0, 0, 0.55]} distanceFactor={10}>
          <div style={{ fontSize: '4rem', color: '#000000', transform: 'translate3d(-50%, -50%, 0)' }}>
            {icon}
          </div>
        </Html>
        <Text
          position={[0, -0.6, 0.51]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </mesh>
    </Float>
  )
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          color={skill.color}
          position={[
            (index % 3) * 2 - 2,
            Math.floor(index / 3) * 2 - 1,
            0
          ]}
        />
      ))}
    </>
  )
}

const Skills3d: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">Explore my technical expertise in 3D</p>
        </motion.div>
        <div className="h-[400px] md:h-[600px]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Skills3d