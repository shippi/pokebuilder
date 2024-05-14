/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/lucario_model/lucario.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/lucario.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0.489, 0]} scale={0.025}>
        <primitive object={nodes.pm0448_51} />
        <skinnedMesh geometry={nodes.LucarioMega_1.geometry} material={materials.Material__191} skeleton={nodes.LucarioMega_1.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_2.geometry} material={materials.Material__192} skeleton={nodes.LucarioMega_2.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_3.geometry} material={materials.Material__193} skeleton={nodes.LucarioMega_3.skeleton} />
        <skinnedMesh geometry={nodes.LucarioMega_4.geometry} material={materials['Material.001']} skeleton={nodes.LucarioMega_4.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/lucario.gltf')