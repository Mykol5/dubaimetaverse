// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { useCharacterControls } from 'ecctrl';

// export default function AvatarModel({ url }) {
//   const { scene, animations } = useGLTF(url);
//   const ref = useRef();
//   const { actions } = useAnimations(animations, ref);
//   const { movement } = useCharacterControls();

//   useEffect(() => {
//     actions?.Idle?.play();
//   }, [actions]);

//   useFrame(() => {
//     if (!actions || !ref.current) return;

//     const isMoving = movement.forward || movement.backward || movement.leftward || movement.rightward;

//     if (isMoving) {
//       actions.Walk?.reset().fadeIn(0.2).play();
//       actions.Idle?.fadeOut(0.2);
//     } else {
//       actions.Idle?.reset().fadeIn(0.2).play();
//       actions.Walk?.fadeOut(0.2);
//     }
//   });

//   return <primitive object={scene} ref={ref} scale={0.015} position={[0, -1, 0]} />;
// }


// import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';

// export default function AvatarModel({ url }) {
//   const { scene, animations } = useGLTF(url);
//   const ref = useRef();
//   const { actions } = useAnimations(animations, ref);
//   const [subscribeKeys, getKeys] = useKeyboardControls();

//   useEffect(() => {
//     actions?.Idle?.play();
//   }, [actions]);

//   useFrame(() => {
//     const keys = getKeys();
//     const isMoving = keys.forward || keys.backward || keys.leftward || keys.rightward;

//     if (isMoving) {
//       actions.Walk?.reset().fadeIn(0.2).play();
//       actions.Idle?.fadeOut(0.2);
//     } else {
//       actions.Idle?.reset().fadeIn(0.2).play();
//       actions.Walk?.fadeOut(0.2);
//     }
//   });

//   return <primitive object={scene} ref={ref} scale={0.015} position={[0, -1, 0]} />;
// }





// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF(url);
//   const { actions, mixer } = useAnimations(animations, group);

//   // Play all animations on load
//   useEffect(() => {
//     if (animations && animations.length) {
//       animations.forEach((clip) => {
//         actions[clip.name]?.play();
//       });
//     }
//   }, [actions, animations]);

//   // Rotate model to face forward
//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y = Math.PI; // Rotate 180 degrees to face camera
//     }
//   });

//   return (
//     <group ref={group} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
//       <primitive object={scene} />
//     </group>
//   );
// }



// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations, materials } = useGLTF(url, true); // Add draco compression
  
//   // Debug what's loaded
//   useEffect(() => {
//     console.log('Model loaded:', {
//       animations: animations?.map(a => a.name),
//       materials: Object.keys(materials || {})
//     });
//   }, [animations, materials]);

//   // Scale and position adjustments
//   return (
//     <group ref={group} position={[0, -1, 0]} scale={0.8}>
//       <primitive 
//         object={scene} 
//         onPointerOver={() => document.body.style.cursor = 'pointer'}
//         onPointerOut={() => document.body.style.cursor = 'auto'}
//       />
//     </group>
//   );
// }



// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF(url);
//   const { actions, names } = useAnimations(animations, group);

//   // Debug loaded animations
//   useEffect(() => {
//     console.log('Available animations:', names);
//     if (names.includes('Idle')) {
//       actions.Idle.play();
//     } else if (names.length > 0) {
//       actions[names[0]].play();
//     }
//   }, [actions, names]);

//   // Movement animations
//   useFrame(() => {
//     if (!group.current) return;
    
//     // Rotate model to face movement direction
//     if (group.current.userData.isMoving) {
//       group.current.rotation.y = Math.PI;
//     }
//   });

//   return (
//     <group 
//       ref={group} 
//       position={[0, -1, 0]} 
//       scale={0.8}
//       userData={{ isMoving: false }}
//     >
//       <primitive object={scene} />
//     </group>
//   );
// }

// // Preload models
// ['male', 'female'].forEach(gender => {
//   ['traditional', 'smart-casual', 'thobe'].forEach(outfit => {
//     useGLTF.preload(`/models/${gender}-${outfit}.glb`);
//   });
// });



import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export default function AvatarModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Try to play any available animation
    if (animations && animations.length) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} position={[0, -1, 0]} scale={0.8}>
      <primitive object={scene} />
    </group>
  );
}

// Only preload the models you actually have
useGLTF.preload('/models/male-traditional.glb');
useGLTF.preload('/models/female-traditional.glb');