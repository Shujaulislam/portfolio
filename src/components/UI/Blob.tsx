'use client'

import React, { useRef } from 'react'
import * as THREE from 'three'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

interface BlobProps {
  radius?: number
  widthSegments?: number
  heightSegments?: number
  position?: [number, number, number]
  color?: string
  distort?: number
  speed?: number
}

const AnimatedSphere: React.FC<BlobProps> = ({
  radius = 1,
  widthSegments = 100,
  heightSegments = 200,
  position = [0, 0, 0],
  color = "#4FD1C5",
  distort = 0.5,
  speed = 3
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere args={[radius, widthSegments, heightSegments]} ref={meshRef} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
      />
    </Sphere>
  )
}

export default AnimatedSphere