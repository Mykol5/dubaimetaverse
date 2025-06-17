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





import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AvatarModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, group);

  // Play all animations on load
  useEffect(() => {
    if (animations && animations.length) {
      animations.forEach((clip) => {
        actions[clip.name]?.play();
      });
    }
  }, [actions, animations]);

  // Rotate model to face forward
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI; // Rotate 180 degrees to face camera
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </group>
  );
}