'use client'

import React, { useRef } from 'react'
import * as THREE from 'three'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import {motion} from 'framer-motion'
import Link from 'next/link'


const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
        }
    })

    return (
        <Sphere args={[1, 100, 200]} ref = {meshRef}>
            <MeshDistortMaterial
            color="#4FD1C5"
            attach="material"
            distort={0.5}
            speed={3}
            />
        </Sphere>
    )
}

const Hero1 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere/>
            </Canvas>
        </div>
        <div className="relative z-10 text-center">
            <motion.h1
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-xl font-bold mb-4"
            >
                Shuja Ul Islam
            </motion.h1>
            <motion.p
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-xl mb-8"
            >
                Frontend Developer | React Specialist | Next.js | TypeScript
            </motion.p>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.4}}
            className="flex justify-center space-x-4"
            >
            <Link href="#projects" 
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
                View Projects
            </Link>
            <Link href="#contact" 
            className="bg-gray-200 hover:bg-gray-300 text-text font-bold py-2 px-6 rounded-md transition-colors duration-300">
                Contact Me
            </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero1