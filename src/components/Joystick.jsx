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




import { useState } from 'react';

export default function Joystick({ onMove, onStop }) {
  const [touchStart, setTouchStart] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    const touch = e.touches[0] || e.changedTouches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY
    });
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touch = e.touches[0] || e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    
    // Limit joystick movement radius
    const distance = Math.min(Math.sqrt(deltaX*deltaX + deltaY*deltaY), 50);
    const angle = Math.atan2(deltaY, deltaX);
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    setPosition({ x, y });
    
    // Determine movement direction
    onMove({
      forward: y < -10,
      backward: y > 10,
      left: x < -10,
      right: x > 10
    });
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setPosition({ x: 0, y: 0 });
    onStop();
  };

  return (
    <div 
      className="fixed bottom-8 right-8 w-32 h-32 rounded-full bg-black bg-opacity-30 flex items-center justify-center touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div 
        className="w-16 h-16 rounded-full bg-white bg-opacity-80 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: position.x === 0 && position.y === 0 ? 'transform 0.2s' : 'none'
        }}
      />
    </div>
  );
}