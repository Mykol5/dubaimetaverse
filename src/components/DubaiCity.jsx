import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function DubaiCity() {
  const { nodes, materials } = useGLTF('/models/dubai-scene.glb'); // You'll need this model
  
  return (
    <group position={[0, -1, 0]} scale={1.5}>
      {/* Main Roads */}
      <mesh geometry={nodes.roads.geometry} material={materials.asphalt} receiveShadow />
      
      {/* Buildings */}
      <group position={[0, 0, -50]}>
        <mesh geometry={nodes.burj_khalifa.geometry} material={materials.glass} castShadow />
        <mesh geometry={nodes.downtown_buildings.geometry} material={materials.concrete} castShadow />
      </group>
      
      {/* Palm Jumeirah */}
      <mesh geometry={nodes.palm_jumeirah.geometry} material={materials.sand} />
      
      {/* Street Lights */}
      <instancedMesh args={[nodes.street_light.geometry, materials.metal, 100]} />
    </group>
  );
}