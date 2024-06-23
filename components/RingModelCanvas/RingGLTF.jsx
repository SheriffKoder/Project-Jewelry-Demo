
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Ring01(props) {
  const { nodes, materials } = useGLTF('/models/ring01.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Ring_01498-FIN'].geometry}
        material={nodes['Ring_01498-FIN'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/ring01.glb')