// import { useState } from 'react';

// export default function Joystick({ onMove, onStop }) {
//   const [touchStart, setTouchStart] = useState(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleTouchStart = (e) => {
//     const touch = e.touches[0];
//     setTouchStart({
//       x: touch.clientX,
//       y: touch.clientY
//     });
//   };

//   const handleTouchMove = (e) => {
//     if (!touchStart) return;
//     const touch = e.touches[0];
//     const deltaX = touch.clientX - touchStart.x;
//     const deltaY = touch.clientY - touchStart.y;
    
//     // Limit joystick movement radius
//     const distance = Math.min(Math.sqrt(deltaX*deltaX + deltaY*deltaY), 50);
//     const angle = Math.atan2(deltaY, deltaX);
    
//     const x = Math.cos(angle) * distance;
//     const y = Math.sin(angle) * distance;
    
//     setPosition({ x, y });
//     onMove({
//       forward: y < -10,
//       backward: y > 10,
//       left: x < -10,
//       right: x > 10
//     });
//   };

//   const handleTouchEnd = () => {
//     setTouchStart(null);
//     setPosition({ x: 0, y: 0 });
//     onStop();
//   };

//   return (
//     <div 
//       className="fixed bottom-8 right-8 w-32 h-32 rounded-full bg-black bg-opacity-30 flex items-center justify-center"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div 
//         className="w-16 h-16 rounded-full bg-white bg-opacity-80"
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`
//         }}
//       />
//     </div>
//   );
// }



// import { useState } from 'react';

// export default function Joystick({ onMove, onStop }) {
//   const [touchStart, setTouchStart] = useState(null);
//   const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });

//   const handleTouchStart = (e) => {
//     const touch = e.touches[0] || e.changedTouches[0];
//     setTouchStart({
//       x: touch.clientX,
//       y: touch.clientY
//     });
//   };

//   const handleTouchMove = (e) => {
//     if (!touchStart) return;
//     const touch = e.touches[0] || e.changedTouches[0];
//     const deltaX = touch.clientX - touchStart.x;
//     const deltaY = touch.clientY - touchStart.y;
    
//     const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 50);
//     const angle = Math.atan2(deltaY, deltaX);
    
//     const x = Math.cos(angle) * distance;
//     const y = Math.sin(angle) * distance;
    
//     setJoystickPos({ x, y });
    
//     // Determine movement direction
//     const forward = y < -15;
//     const backward = y > 15;
//     const left = x < -15;
//     const right = x > 15;
    
//     onMove({ forward, backward, left, right });
//   };

//   const handleTouchEnd = () => {
//     setTouchStart(null);
//     setJoystickPos({ x: 0, y: 0 });
//     onStop();
//   };

//   return (
//     <div 
//       className="fixed bottom-8 right-8 w-32 h-32 rounded-full bg-black bg-opacity-30 flex items-center justify-center touch-none"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onMouseDown={!isMobile ? handleTouchStart : undefined}
//       onMouseMove={!isMobile ? handleTouchMove : undefined}
//       onMouseUp={!isMobile ? handleTouchEnd : undefined}
//     >
//       <div 
//         className="w-16 h-16 rounded-full bg-white bg-opacity-80 pointer-events-none"
//         style={{
//           transform: `translate(${joystickPos.x}px, ${joystickPos.y}px)`,
//           transition: joystickPos.x === 0 && joystickPos.y === 0 ? 'transform 0.2s' : 'none'
//         }}
//       />
//     </div>
//   );
// }






import { useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function Joystick({ onMove }) {
  const [touchStart, setTouchStart] = useState(null);
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });

  const handleStart = (clientX, clientY) => {
    setTouchStart({ x: clientX, y: clientY });
  };

  const handleMove = (clientX, clientY) => {
    if (!touchStart) return;
    
    const deltaX = clientX - touchStart.x;
    const deltaY = clientY - touchStart.y;
    const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 50);
    const angle = Math.atan2(deltaY, deltaX);
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    setJoystickPos({ x, y });
    
    // Movement directions
    onMove({
      forward: y < -15,
      backward: y > 15,
      left: x < -15,
      right: x > 15
    });
  };

  const handleEnd = () => {
    setTouchStart(null);
    setJoystickPos({ x: 0, y: 0 });
    onMove({ forward: false, backward: false, left: false, right: false });
  };

  // Event handlers for both touch and mouse
  const eventHandlers = isMobile ? {
    onTouchStart: (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY),
    onTouchMove: (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY),
    onTouchEnd: handleEnd
  } : {
    onMouseDown: (e) => handleStart(e.clientX, e.clientY),
    onMouseMove: (e) => handleMove(e.clientX, e.clientY),
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd
  };

  return (
    <div 
      className="fixed bottom-8 right-8 w-32 h-32 rounded-full bg-black bg-opacity-30 flex items-center justify-center touch-none"
      {...eventHandlers}
    >
      <div 
        className="w-16 h-16 rounded-full bg-white bg-opacity-80 pointer-events-none"
        style={{
          transform: `translate(${joystickPos.x}px, ${joystickPos.y}px)`,
          transition: joystickPos.x === 0 && joystickPos.y === 0 ? 'transform 0.2s' : 'none'
        }}
      />
    </div>
  );
}