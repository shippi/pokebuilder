import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import { Lucario } from './Lucario'
import { Suspense } from 'react'

function Scene() {
  return (
    <Canvas camera={{ fov: 50 }} className='z-10 animate-fadeIn'>
      <OrbitControls enableZoom={false} enablePan={false}/>
      <ambientLight intensity={4}/>
      <Environment preset='sunset'/>
      <Suspense fallback={null}>
			  <Lucario/>
      </Suspense>
		</Canvas>

  )
}

export default Scene