/* eslint-disable react/no-unknown-property */
/** eslint-disable react/no-unknown-property **/
/*
* Modified from auto-generated gltfjsx
*/
import React from 'react';
import { useGLTF } from '@react-three/drei';


// Infected Eye Component
export function InfectedEye(props) {
  const { nodes, materials } = useGLTF('/models-3d/conjuntivitis/eye-infected.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ScleraInfected.geometry}
        material={materials.ScleraInfected}
        position={[1.167, 0.232, 0.877]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Iris.geometry}
        material={materials.Iris}
        position={[0.041, -0.007, -0.024]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cornea.geometry}
        material={materials.Cornea}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.134}
      />
    </group>
  );
}

// Preload the model
useGLTF.preload('/models-3d/conjuntivitis/eye-infected.glb');

export default InfectedEye;