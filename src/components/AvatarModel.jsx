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



// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF(url);
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     // Try to play any available animation
//     if (animations && animations.length) {
//       actions[animations[0].name]?.play();
//     }
//   }, [actions, animations]);

//   return (
//     <group ref={group} position={[0, -1, 0]} scale={0.8}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// // Only preload the models you actually have
// useGLTF.preload('/models/male-traditional.glb');
// useGLTF.preload('/models/female-traditional.glb');



// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF(url);
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     // Initialize animations
//     if (actions?.Walk) {
//       actions.Walk.play().paused = true;
//     }
//     if (actions?.Idle) {
//       actions.Idle.play();
//     }
//   }, [actions]);

//   useFrame(() => {
//     if (!group.current) return;
    
//     // Get movement direction from parent (Ecctrl)
//     const velocity = group.current.parent?.userData?.velocity;
//     const isMoving = velocity && (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.z) > 0.1);

//     // Rotate model to face movement direction
//     if (isMoving) {
//       const direction = new THREE.Vector3(velocity.x, 0, velocity.z).normalize();
//       group.current.lookAt(
//         group.current.position.x + direction.x,
//         group.current.position.y,
//         group.current.position.z + direction.z
//       );
//     }

//     // Control animations
//     if (actions?.Walk && actions?.Idle) {
//       actions.Walk.paused = !isMoving;
//       actions.Idle.paused = isMoving;
//     }
//   });

//   return (
//     <group ref={group} position={[0, -1, 0]} scale={0.8}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// // Preload models
// useGLTF.preload('/models/male-traditional.glb');
// useGLTF.preload('/models/female-traditional.glb');



// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function AvatarModel({ url }) {
//   const group = useRef();
//   const { scene, animations } = useGLTF(url);
//   const { actions } = useAnimations(animations, group);

//   // Initialize animations
//   useEffect(() => {
//     if (actions?.Idle) actions.Idle.play();
//     if (actions?.Walk) actions.Walk.play().paused = true;
//     if (actions?.Run) actions.Run.play().paused = true;
//     if (actions?.Jump) actions.Jump.play().paused = true;
//   }, [actions]);

//   // Animation control
//   useFrame(() => {
//     if (!group.current?.parent?.userData) return;
    
//     const { velocity, isRunning, isJumping } = group.current.parent.userData;
//     const isMoving = Math.abs(velocity.x) > 0.1 || Math.abs(velocity.z) > 0.1;

//     // Rotate model to face movement direction
//     if (isMoving) {
//       const direction = new THREE.Vector3(velocity.x, 0, velocity.z).normalize();
//       group.current.lookAt(
//         group.current.position.x + direction.x,
//         group.current.position.y,
//         group.current.position.z + direction.z
//       );
//     }

//     // Control animations
//     if (actions?.Jump) actions.Jump.paused = !isJumping;
//     if (actions?.Run) actions.Run.paused = !(isMoving && isRunning);
//     if (actions?.Walk) actions.Walk.paused = !(isMoving && !isRunning);
//     if (actions?.Idle) actions.Idle.paused = isMoving || isJumping;
//   });

//   return (
//     <group ref={group} position={[0, -1, 0]} scale={0.8}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// // Preload models
// useGLTF.preload('/models/male-traditional.glb');
// useGLTF.preload('/models/female-traditional.glb');



import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AvatarModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url) || {};
  const { actions } = useAnimations(animations || [], group);

  // Safe animation initialization
  useEffect(() => {
    if (!actions || !group.current) return;
    
    const initAnimation = (name) => {
      if (actions[name]) {
        const action = actions[name];
        action.play();
        if (name !== 'Idle') action.paused = true;
      }
    };
    
    ['Idle', 'Walk', 'Run', 'Jump'].forEach(initAnimation);
    
    return () => {
      // Cleanup animations
      Object.values(actions).forEach(action => {
        if (action?.isRunning()) action.stop();
      });
    };
  }, [actions]);

  // Safe animation control
  useFrame(() => {
    if (!group.current?.parent?.userData) return;
    
    try {
      const { velocity = new THREE.Vector3(), isRunning = false, isJumping = false } = group.current.parent.userData;
      const isMoving = Math.abs(velocity.x) > 0.1 || Math.abs(velocity.z) > 0.1;

      // Rotation
      if (isMoving && velocity) {
        const direction = new THREE.Vector3(velocity.x, 0, velocity.z).normalize();
        group.current.lookAt(
          group.current.position.x + direction.x,
          group.current.position.y,
          group.current.position.z + direction.z
        );
      }

      // Animation states
      if (actions?.Jump) actions.Jump.paused = !isJumping;
      if (actions?.Run) actions.Run.paused = !(isMoving && isRunning);
      if (actions?.Walk) actions.Walk.paused = !(isMoving && !isRunning);
      if (actions?.Idle) actions.Idle.paused = isMoving || isJumping;
    } catch (error) {
      console.error('Animation frame error:', error);
    }
  });

  if (!scene) {
    console.error('Failed to load model:', url);
    return null;
  }

  return (
    <group ref={group} position={[0, -1, 0]} scale={0.8}>
      <primitive object={scene} />
    </group>
  );
}

// Preload models with error handling
try {
  useGLTF.preload('/models/male-traditional.glb');
  useGLTF.preload('/models/female-traditional.glb');
} catch (error) {
  console.error('Model preload failed:', error);
}