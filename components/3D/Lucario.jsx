/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 lucario.gltf 
*/
'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Lucario(props) {
  const { nodes, materials } = useGLTF('/lucario_model/lucario.gltf');
  const modelRef = useRef(null);

  useFrame(() => {
    if (modelRef.current.position.z > -3) modelRef.current.position.z -= modelRef.current.position.z * 0.025;
    if (modelRef.current.rotation.x > 0) modelRef.current.rotation.x -= modelRef.current.rotation.x * 0.025;
    modelRef.current.rotation.y += 0.001;
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[0.3, -0.6, 0]} scale={0.035} position={[0, -2.5, 1]} ref={modelRef}>
      <primitive object={nodes.pm0448_51} />
        <skinnedMesh geometry={nodes.LucarioMega_1.geometry} material={materials.Material__191} skeleton={nodes.LucarioMega_1.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_2.geometry} material={materials.Material__192} skeleton={nodes.LucarioMega_2.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_3.geometry} material={materials.Material__193} skeleton={nodes.LucarioMega_3.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_4.geometry} material={materials['Material.001']} skeleton={nodes.LucarioMega_4.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/lucario_model/lucario.gltf')
