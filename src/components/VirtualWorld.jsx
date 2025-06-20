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






// import { Canvas } from '@react-three/fiber';
// import { KeyboardControls, Sky, Environment, OrbitControls } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl from 'ecctrl';
// import AvatarModel from './AvatarModel';
// import { Suspense } from 'react';
// import { useAvatarStore } from '../store/avatarStore';
// import { Perf } from 'r3f-perf';

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] },
//   { name: 'run', keys: ['Shift'] },
// ];

// export default function VirtualWorld() {
//   const avatar = useAvatarStore((s) => s.selectedAvatar);
//   const outfit = useAvatarStore((s) => s.selectedOutfit);

//   const modelUrl = `/models/${avatar}-${outfit.toLowerCase().replace(' ', '-')}.glb`;

//   return (
//     <div className="h-screen w-full relative">
//       {/* Controls Info */}
//       <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-xl shadow text-sm z-10">
//         <p>🕹 <strong>WASD</strong> to move</p>
//         <p>🖱 <strong>Mouse</strong> to look</p>
//         <p>␣ <strong>Space</strong> to jump</p>
//       </div>

//       <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
//         <Perf position="top-left" />
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[10, 10, 5]}
//           intensity={1}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />
//         <Sky sunPosition={[100, 20, 100]} />

//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl
//                 camInitDis={-5}
//                 camMaxDis={-10}
//                 camMinDis={-2}
//                 camFollowMult={10}
//               >
//                 <AvatarModel url={modelUrl} />
//               </Ecctrl>
//             </KeyboardControls>

//             {/* Ground */}
//             <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//               <planeGeometry args={[100, 100]} />
//               <meshStandardMaterial color="#f0f0f0" />
//             </mesh>

//             {/* Dubai Buildings */}
//             <mesh position={[0, 0, -20]} castShadow>
//               <boxGeometry args={[10, 20, 5]} />
//               <meshStandardMaterial color="#a0a0a0" />
//             </mesh>
//           </Physics>
//         </Suspense>

//         <Environment preset="city" />
//       </Canvas>
//     </div>
//   );
// }





// import { Canvas } from '@react-three/fiber';
// import { KeyboardControls, Sky, Environment, OrbitControls, Loader } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl, { EcctrlAnimation } from 'ecctrl';
// import AvatarModel from './AvatarModel';
// import DubaiCity from './DubaiCity';
// import { Suspense, useState } from 'react';
// import { Perf } from 'r3f-perf';

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] },
//   { name: 'run', keys: ['Shift'] },
//   { name: 'action', keys: ['KeyE'] }
// ];

// export default function VirtualWorld() {
//   const [debug, setDebug] = useState(false);
  
//   return (
//     <div className="h-screen w-full relative">
//       <button 
//         onClick={() => setDebug(!debug)}
//         className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded z-50"
//       >
//         {debug ? 'Hide Debug' : 'Show Debug'}
//       </button>

//       <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
//         {debug && <Perf position="top-left" />}
        
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[10, 20, 10]}
//           intensity={2}
//           castShadow
//           shadow-mapSize={[2048, 2048]}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />
        
//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]} debug={debug}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl
//                 animated
//                 camInitDis={-5}
//                 camMaxDis={-15}
//                 camMinDis={-3}
//                 camFollowMult={15}
//                 maxVelLimit={10}
//                 jumpVel={8}
//               >
//                 <AvatarModel url="/models/male-traditional.glb" />
//                 <EcctrlAnimation characterURL="/models/male-traditional.glb" />
//               </Ecctrl>
//             </KeyboardControls>

//             <DubaiCity />
//           </Physics>
//         </Suspense>

//         <Environment preset="sunset" background blur={0.5} />
//       </Canvas>
//       <Loader />
//     </div>
//   );
// }


// import { Canvas } from '@react-three/fiber';
// import { KeyboardControls, Sky, Environment, Loader } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl from 'ecctrl';
// import AvatarModel from './AvatarModel';
// import DubaiCity from './DubaiCity';
// import { Suspense, useState } from 'react';
// import { Perf } from 'r3f-perf';
// import { useAvatarStore } from '../store/avatarStore';

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] }
// ];

// export default function VirtualWorld() {
//   const [debug, setDebug] = useState(false);
//   const avatar = useAvatarStore(state => state.selectedAvatar);
  
//   // Simple model selection - only use existing files
//   const modelUrl = `/models/${avatar}-traditional.glb`;

//   return (
//     <div className="h-screen w-full relative">
//       <button 
//         onClick={() => setDebug(!debug)}
//         className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded z-50"
//       >
//         {debug ? 'Hide Debug' : 'Show Debug'}
//       </button>

//       <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
//         {debug && <Perf position="top-left" />}
        
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[10, 20, 10]}
//           intensity={1}
//           castShadow
//           shadow-mapSize={[1024, 1024]}
//         />
        
//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]} debug={debug}>
//             <KeyboardControls map={keyboardMap}>
//               <Ecctrl
//                 camInitDis={-5}
//                 camMaxDis={-10}
//                 camMinDis={-3}
//               >
//                 <AvatarModel url={modelUrl} />
//               </Ecctrl>
//             </KeyboardControls>

//             <DubaiCity />
//           </Physics>
//         </Suspense>

//         <Environment preset="sunset" />
//       </Canvas>
//       <Loader />
//     </div>
//   );
// }




// import { Canvas } from '@react-three/fiber';
// import { KeyboardControls, Sky, Environment, Loader } from '@react-three/drei';
// import { Physics } from '@react-three/rapier';
// import Ecctrl from 'ecctrl';
// import AvatarModel from './AvatarModel';
// import DubaiCity from './DubaiCity';
// import { Suspense, useState } from 'react';
// import { Perf } from 'r3f-perf';
// import Joystick from './Joystick';
// import { useAvatarStore } from '../store/avatarStore';

// const keyboardMap = [
//   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
//   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
//   { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
//   { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
//   { name: 'jump', keys: ['Space'] }
// ];

// export default function VirtualWorld() {
//   const [debug, setDebug] = useState(false);
//   const [controls, setControls] = useState({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false
//   });
  
//   const avatar = useAvatarStore(state => state.selectedAvatar);
//   const modelUrl = `/models/${avatar}-traditional.glb`;

//   return (
//     <div className="h-screen w-full relative">
//       {/* Debug Toggle */}
//       <button 
//         onClick={() => setDebug(!debug)}
//         className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded z-50"
//       >
//         {debug ? 'Hide Debug' : 'Show Debug'}
//       </button>

//       {/* Joystick Controller */}
//       <Joystick 
//         onMove={(movement) => setControls(movement)}
//         onStop={() => setControls({
//           forward: false,
//           backward: false,
//           left: false,
//           right: false
//         })}
//       />

//       <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
//         {debug && <Perf position="top-left" />}
        
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[10, 20, 10]}
//           intensity={1}
//           castShadow
//           shadow-mapSize={[1024, 1024]}
//         />
        
//         <Suspense fallback={null}>
//           <Physics gravity={[0, -9.8, 0]} debug={debug}>
//             <KeyboardControls 
//               map={keyboardMap}
//               onChange={(name, pressed) => setControls(prev => ({
//                 ...prev,
//                 [name.replace('ward', '')]: pressed
//               }))}
//             >
//               <Ecctrl
//                 // Movement controls
//                 forward={controls.forward}
//                 backward={controls.backward}
//                 left={controls.left}
//                 right={controls.right}
                
//                 // Character settings
//                 camInitDis={-5}
//                 camMaxDis={-10}
//                 camMinDis={-3}
//                 camFollowMult={12}
//                 maxVelLimit={5}
//                 jumpVel={5}
//               >
//                 <AvatarModel url={modelUrl} />
//               </Ecctrl>
//             </KeyboardControls>

//             <DubaiCity />
//           </Physics>
//         </Suspense>

//         <Environment preset="sunset" />
//       </Canvas>
//       <Loader />
//     </div>
//   );
// }






import { Canvas } from '@react-three/fiber';
import { Environment, Sky, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import { useControls } from './Controls';
import { MobileJoystick } from './MobileJoystick';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function VirtualWorld() {
  const controls = useControls();
  const [mobileControls, setMobileControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false
  });

  // Combine keyboard and mobile controls
  const movement = isMobile ? mobileControls : controls;

  return (
    <div className="h-screen w-full relative">
      {/* Mobile Controls */}
      {isMobile && (
        <div className="fixed inset-0 touch-none">
          <MobileJoystick onMove={setMobileControls} />
          
          {/* Jump button */}
          <button 
            className="absolute bottom-8 left-8 px-6 py-4 bg-blue-500 rounded-full text-white"
            onTouchStart={() => setMobileControls(p => ({ ...p, jump: true }))}
            onTouchEnd={() => setMobileControls(p => ({ ...p, jump: false }))}
          >
            Jump
          </button>
          
          {/* Run button */}
          <button 
            className="absolute bottom-24 left-8 px-6 py-4 bg-red-500 rounded-full text-white"
            onTouchStart={() => setMobileControls(p => ({ ...p, run: true }))}
            onTouchEnd={() => setMobileControls(p => ({ ...p, run: false }))}
          >
            Run
          </button>
        </div>
      )}

      <Canvas shadows camera={{ fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        <Physics gravity={[0, -9.8, 0]}>
          <Ecctrl
            // Movement controls
            forward={movement.forward}
            backward={movement.backward}
            left={movement.left}
            right={movement.right}
            jump={movement.jump}
            run={movement.run}
            
            // Camera settings
            camMode={isMobile ? "firstPerson" : "thirdPerson"}
            camInitDis={-5}
            camMaxDis={-10}
            camMinDis={-3}
            camFollowMult={10}
            
            // Character physics
            maxVelLimit={movement.run ? 10 : 5}
            jumpVel={5}
            turnSpeed={Math.PI / 2}
          >
            <AvatarModel url="/models/female-traditional.glb" />
          </Ecctrl>

          <DubaiCity />
        </Physics>

        {!isMobile && <PointerLockControls />}
        <Environment preset="city" />
        <Sky sunPosition={[100, 20, 100]} />
      </Canvas>
    </div>
  );
}