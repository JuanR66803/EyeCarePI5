/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const Floor = () => {
    const PATH = useMemo(() => "/textures/floor/gray/gray-polished-granite_", []);

    const floorTexture = useTexture({
        map: `${PATH}albedo.png`,
        normalMap: `${PATH}normal-ogl.png`,
        roughnessMap: `${PATH}roughness.png`,
        aoMap: `${PATH}ao.png`,
        displacementMap: `${PATH}height.png`,
        metalnessMap: `${PATH}metallic.png`,
    })
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]} position-y={-1} receiveShadow={true}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial 
        color={"lightblue"}
        transparent={true}
        opacity={0.4}
        />
    </mesh>
  )
};

export default Floor;
