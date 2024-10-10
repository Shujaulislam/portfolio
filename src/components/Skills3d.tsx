'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Float, Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { SiJavascript, SiReact, SiHtml5, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" />, color: "#f0db4f" },
  { name: 'React', icon: <SiReact color="#61dafb" />, color: "#61dafb" },
  { name: 'HTML/CSS', icon: <SiHtml5 color="#e34c26" />, color: "#e34c26" },
  { name: 'TypeScript', icon: <SiTypescript color="#007acc" />, color: "#007acc" },
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" />, color: "#ffffff" },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38b2ac" />, color: "#38b2ac" },
]

const SkillIcon = ({ name, icon, color, position }: { name: string, icon: React.ReactNode, color: string, position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, hovered ? state.mouse.y / aspect : 0, 0.1)
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, hovered ? state.mouse.x / aspect : 0, 0.1)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
      <mesh 
        ref={mesh} 
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHovered(false)
        }}
      >
        {/* <boxGeometry args={[1, 1, 1]} /> */}
        <meshStandardMaterial color={hovered ? 'hotpink' : color} transparent opacity={0.7} />
        <Html transform occlude position={[0, 0, 0.51]} distanceFactor={10}>
          <div style={{ 
            fontSize: '3rem', 
            color: '#000000', 
            transition: 'transform 0.3s ease-in-out',
            transform: `translate3d(-50%, -50%, 0) scale(${hovered ? 1.2 : 1})`
          }}>
            {icon}
          </div>
        </Html>
        <Text
          position={[0, -0.7, 0.51]}
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
  const { viewport } = useThree()
  const gridSize = Math.ceil(Math.sqrt(skills.length))
  const spacing = Math.min(viewport.width, viewport.height) / (gridSize + 1)

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {skills.map((skill, index) => {
        const row = Math.floor(index / gridSize)
        const col = index % gridSize
        const x = (col - (gridSize - 1) / 2) * spacing
        const y = ((gridSize - 1) / 2 - row) * spacing
        return (
          <SkillIcon
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            position={[x, y, 0]}
          />
        )
      })}
    </>
  )
}

const Skills3d: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">Explore my technical expertise in 3D</p>
        </motion.div>
        <div className="h-[400px] md:h-[600px]">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Skills3d