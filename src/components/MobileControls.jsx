// import { useState } from 'react';

// export default function MobileControls({ onMove, onJump, onRun }) {
//   const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
//   const [touchStart, setTouchStart] = useState(null);

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
    
//     const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 50);
//     const angle = Math.atan2(deltaY, deltaX);
    
//     const x = Math.cos(angle) * distance;
//     const y = Math.sin(angle) * distance;
    
//     setJoystickPos({ x, y });
    
//     onMove({
//       forward: y < -15,
//       backward: y > 15,
//       left: x < -15,
//       right: x > 15
//     });
//   };

//   const handleTouchEnd = () => {
//     setTouchStart(null);
//     setJoystickPos({ x: 0, y: 0 });
//     onMove({
//       forward: false,
//       backward: false,
//       left: false,
//       right: false
//     });
//   };

//   return (
//     <>
//       {/* Joystick */}
//       <div 
//         className="joystick-container"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div 
//           className="joystick-handle"
//           style={{
//             transform: `translate(${joystickPos.x}px, ${joystickPos.y}px)`,
//             transition: joystickPos.x === 0 && joystickPos.y === 0 ? 'transform 0.2s' : 'none'
//           }}
//         />
//       </div>

//       {/* Action Buttons */}
//       <button
//         className="action-button jump-button"
//         onTouchStart={() => onJump(true)}
//         onTouchEnd={() => onJump(false)}
//       >
//         JUMP
//       </button>
      
//       <button
//         className="action-button run-button"
//         onTouchStart={() => onRun(true)}
//         onTouchEnd={() => onRun(false)}
//       >
//         RUN
//       </button>
//     </>
//   );
// }



import { useState } from 'react';

export default function MobileControls({ onMove, onJump, onRun }) {
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const joystickArea = e.currentTarget.getBoundingClientRect();
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      centerX: joystickArea.left + joystickArea.width / 2,
      centerY: joystickArea.top + joystickArea.height / 2
    });
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touch = e.touches[0];
    
    // Calculate relative position to joystick center
    const deltaX = touch.clientX - touchStart.centerX;
    const deltaY = touch.clientY - touchStart.centerY;
    
    // Limit joystick movement to its radius
    const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 50);
    const angle = Math.atan2(deltaY, deltaX);
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    setJoystickPos({ x, y });
    
    // Calculate movement intensity (0 to 1)
    const intensity = Math.min(distance / 50, 1);
    
    // Determine movement direction with intensity
    onMove({
      forward: y < -10 ? intensity : 0,
      backward: y > 10 ? intensity : 0,
      left: x < -10 ? intensity : 0,
      right: x > 10 ? intensity : 0
    });
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setJoystickPos({ x: 0, y: 0 });
    onMove({
      forward: 0,
      backward: 0,
      left: 0,
      right: 0
    });
  };

  return (
    <>
      {/* Joystick */}
      <div 
        className="joystick-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="joystick-handle"
          style={{
            transform: `translate(${joystickPos.x}px, ${joystickPos.y}px)`,
            transition: joystickPos.x === 0 && joystickPos.y === 0 ? 'transform 0.2s' : 'none'
          }}
        />
      </div>

      {/* Action Buttons */}
      <button
        className="action-button jump-button"
        onTouchStart={() => onJump(true)}
        onTouchEnd={() => onJump(false)}
      >
        JUMP
      </button>
      
      <button
        className="action-button run-button"
        onTouchStart={() => onRun(true)}
        onTouchEnd={() => onRun(false)}
      >
        RUN
      </button>
    </>
  );
}