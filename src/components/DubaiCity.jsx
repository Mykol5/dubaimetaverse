// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function DubaiCity() {
//   const { nodes, materials } = useGLTF('/models/dubai-scene.glb'); // You'll need this model
  
//   return (
//     <group position={[0, -1, 0]} scale={1.5}>
//       {/* Main Roads */}
//       <mesh geometry={nodes.roads.geometry} material={materials.asphalt} receiveShadow />
      
//       {/* Buildings */}
//       <group position={[0, 0, -50]}>
//         <mesh geometry={nodes.burj_khalifa.geometry} material={materials.glass} castShadow />
//         <mesh geometry={nodes.downtown_buildings.geometry} material={materials.concrete} castShadow />
//       </group>
      
//       {/* Palm Jumeirah */}
//       <mesh geometry={nodes.palm_jumeirah.geometry} material={materials.sand} />
      
//       {/* Street Lights */}
//       <instancedMesh args={[nodes.street_light.geometry, materials.metal, 100]} />
//     </group>
//   );
// }



// import { useGLTF } from '@react-three/drei';
// import { RigidBody } from '@react-three/rapier';

// export default function DubaiCity() {
//   const { nodes, materials } = useGLTF('/models/dubai-scene.glb');
  
//   return (
//     <group>
//       {/* Main city with colliders */}
//       <RigidBody type="fixed" colliders="trimesh">
//         <primitive 
//           object={nodes.Scene} 
//           receiveShadow
//           castShadow
//         />
//       </RigidBody>

//       {/* Additional colliders for streets */}
//       <RigidBody type="fixed">
//         <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[200, 200]} />
//           <meshStandardMaterial visible={false} />
//         </mesh>
//       </RigidBody>
//     </group>
//   );
// }

// // Preload the model
// useGLTF.preload('/models/dubai-scene.glb');



// import { useGLTF } from '@react-three/drei';
// import { RigidBody } from '@react-three/rapier';

// export default function DubaiCity() {
//   const { scene } = useGLTF('/models/dubai-scene.glb') || {};

//   if (!scene) {
//     console.error('Failed to load Dubai city model');
//     return null;
//   }

//   return (
//     <group>
//       <RigidBody type="fixed" colliders="trimesh">
//         <primitive object={scene} />
//       </RigidBody>
      
//       {/* Fallback ground */}
//       <RigidBody type="fixed">
//         <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[200, 200]} />
//           <meshStandardMaterial color="gray" />
//         </mesh>
//       </RigidBody>
//     </group>
//   );
// }

// // Preload with error handling
// try {
//   useGLTF.preload('/models/dubai-scene.glb');
// } catch (error) {
//   console.error('Failed to preload Dubai city:', error);
// }




import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { optimizeTextures } from '../utils/textureOptimizer';

export default function DubaiCity() {
  const { scene } = useGLTF('/models/dubai-scene.glb') || {};

  useEffect(() => {
    if (scene) {
      optimizeTextures(scene);
    }
  }, [scene]);

  if (!scene) {
    console.error('Failed to load Dubai city model');
    return null;
  }

  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={scene} />
      </RigidBody>
    </group>
  );
}