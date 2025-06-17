// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sky } from '@react-three/drei';
// import { useAvatarStore } from '../store/avatarStore';

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);

//   return (
//     <div className="h-screen w-full">
//       <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />
//         <Sky sunPosition={[100, 20, 100]} />

//         {/* Ground */}
//         <mesh rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[100, 100]} />
//           <meshStandardMaterial color="#EDEDED" />
//         </mesh>

//         {/* Simple Burj Model Placeholder */}
//         <mesh position={[0, 2, 0]}>
//           <boxGeometry args={[1, 4, 1]} />
//           <meshStandardMaterial color="steelblue" />
//         </mesh>

//         {/* Avatar Cube */}
//         {avatar && (
//           <mesh position={[2, 1, 0]}>
//             <boxGeometry args={[1, 2, 1]} />
//             <meshStandardMaterial color={avatar === 'male' ? 'blue' : avatar === 'female' ? 'pink' : 'gray'} />
//           </mesh>
//         )}

//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }




// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sky } from '@react-three/drei';
// import { useAvatarStore } from '../store/avatarStore';

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);

//   console.log("Selected Avatar:", avatar); // Debug

//   return (
//     <div className="h-screen w-full">
//       <Canvas camera={{ position: [0, 5, 10], fov: 50 }} style={{ background: '#dbeafe' }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />
//         <Sky sunPosition={[100, 20, 100]} />

//         {/* Ground */}
//         <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//           <planeGeometry args={[100, 100]} />
//           <meshStandardMaterial color="#cfcfcf" />
//         </mesh>

//         {/* Simple Building */}
//         <mesh position={[0, 2, 0]}>
//           <boxGeometry args={[1, 4, 1]} />
//           <meshStandardMaterial color="steelblue" />
//         </mesh>

//         {/* Avatar Box */}
//         {avatar && (
//           <mesh position={[2, 1, 0]}>
//             <boxGeometry args={[1, 2, 1]} />
//             <meshStandardMaterial color={avatar === 'male' ? 'blue' : avatar === 'female' ? 'pink' : 'gray'} />
//           </mesh>
//         )}

//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }





// src/components/VirtualWorld.jsx

// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sky } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl, { KeyboardControls } from 'ecctrl';
// import { useAvatarStore } from '../store/avatarStore';

// // Define keyboard mapping
// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] },
// ];

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);
//   const outfit = useAvatarStore((s) => s.selectedOutfit);

//   console.log('Playing as:', avatar, outfit);

//   return (
//     <div className="h-screen w-full">
//       <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />
//         <Sky sunPosition={[100, 20, 100]} />

//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl>
//                 {/* Replace this with your actual GLTF avatar model */}
//                 <mesh>
//                   <capsuleGeometry args={[0.5, 1.0, 8, 16]} />
//                   <meshStandardMaterial color={outfit === 'Traditional' ? 'goldenrod' : outfit === 'Smart Casual' ? 'teal' : 'gray'} />
//                 </mesh>
//               </Ecctrl>
//             </KeyboardControls>

//             {/* Ground plane */}
//             <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
//               <planeGeometry args={[100, 100]} />
//               <meshStandardMaterial color="#cfcfcf" />
//             </mesh>

//             {/* Burj Khalifa placeholder */}
//             <mesh position={[0, 2, -10]}>
//               <boxGeometry args={[1, 8, 1]} />
//               <meshStandardMaterial color="steelblue" />
//             </mesh>
//           </Physics>
//         </Suspense>

//         {/* Optional orbit camera as fallback */}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }


// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sky, useGLTF } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl, { KeyboardControls } from 'ecctrl';
// import { useAvatarStore } from '../store/avatarStore';

// // Load the GLTF model dynamically
// function AvatarGLB({ gender }) {
//   const path = gender === 'male'
//     ? '/models/male-traditional.glb'
//     : '/models/female-traditional.glb';

//   const { scene } = useGLTF(path);
//   return (
//     <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
//   );
// }

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] },
// ];

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);
//   const outfit = useAvatarStore((s) => s.selectedOutfit);

//   console.log('Playing as:', avatar, outfit);

//   return (
//     <div className="h-screen w-full">
//       <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />
//         <Sky sunPosition={[100, 20, 100]} />

//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl
//                 debug={false}
//                 capsuleRadius={0.5}
//                 capsuleHalfHeight={1}
//               >
//                 {avatar ? (
//                   <AvatarGLB gender={avatar} />
//                 ) : (
//                   // fallback in case no avatar selected
//                   <mesh>
//                     <capsuleGeometry args={[0.5, 1.0, 8, 16]} />
//                     <meshStandardMaterial color="gray" />
//                   </mesh>
//                 )}
//               </Ecctrl>
//             </KeyboardControls>

//             {/* Ground */}
//             <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
//               <planeGeometry args={[100, 100]} />
//               <meshStandardMaterial color="#cfcfcf" />
//             </mesh>

//             {/* Burj Khalifa placeholder */}
//             <mesh position={[0, 4, -10]}>
//               <boxGeometry args={[1, 8, 1]} />
//               <meshStandardMaterial color="steelblue" />
//             </mesh>
//           </Physics>
//         </Suspense>

//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }




// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sky } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl from 'ecctrl';
// import { KeyboardControls } from '@react-three/drei';
// import AvatarModel from './AvatarModel';
// import { Suspense } from 'react';
// import { useAvatarStore } from '../store/avatarStore';

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] },
// ];

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);
//   const outfit = useAvatarStore((s) => s.selectedOutfit);

//   const modelUrl = avatar === 'male'
//     ? '/models/male-traditional.glb'
//     : '/models/female-traditional.glb';

//   return (
//     <div className="h-screen w-full relative">
//       {/* Tutorial UI */}
//       <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow text-sm z-10">
//         <p>🕹 Use <strong>WASD</strong> to move</p>
//         <p>🖱 Move mouse to look around</p>
//         <p>␣ Press <strong>Space</strong> to jump</p>
//       </div>

//       <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />
//         <Sky sunPosition={[100, 20, 100]} />

//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl cameraFollow>
//                 <AvatarModel url={modelUrl} />
//               </Ecctrl>
//             </KeyboardControls>

//             {/* Ground */}
//             <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
//               <planeGeometry args={[100, 100]} />
//               <meshStandardMaterial color="#eee" />
//             </mesh>

//             {/* Burj Khalifa Placeholder */}
//             <mesh position={[0, 4, -10]}>
//               <boxGeometry args={[2, 8, 2]} />
//               <meshStandardMaterial color="steelblue" />
//             </mesh>
//           </Physics>
//         </Suspense>

//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }






import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Sky, Environment, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import AvatarModel from './AvatarModel';
import { Suspense } from 'react';
import { useAvatarStore } from '../store/avatarStore';
import { Perf } from 'r3f-perf';

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
];

export default function VirtualWorld() {
  const avatar = useAvatarStore((s) => s.selectedAvatar);
  const outfit = useAvatarStore((s) => s.selectedOutfit);

  const modelUrl = `/models/${avatar}-${outfit.toLowerCase().replace(' ', '-')}.glb`;

  return (
    <div className="h-screen w-full relative">
      {/* Controls Info */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-xl shadow text-sm z-10">
        <p>🕹 <strong>WASD</strong> to move</p>
        <p>🖱 <strong>Mouse</strong> to look</p>
        <p>␣ <strong>Space</strong> to jump</p>
      </div>

      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Perf position="top-left" />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Sky sunPosition={[100, 20, 100]} />

        <Suspense fallback={null}>
          <Physics gravity={[0, -9.8, 0]}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl
                camInitDis={-5}
                camMaxDis={-10}
                camMinDis={-2}
                camFollowMult={10}
              >
                <AvatarModel url={modelUrl} />
              </Ecctrl>
            </KeyboardControls>

            {/* Ground */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#f0f0f0" />
            </mesh>

            {/* Dubai Buildings */}
            <mesh position={[0, 0, -20]} castShadow>
              <boxGeometry args={[10, 20, 5]} />
              <meshStandardMaterial color="#a0a0a0" />
            </mesh>
          </Physics>
        </Suspense>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}