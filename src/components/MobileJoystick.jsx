import { useState } from 'react';

export function MobileJoystick({ onMove }) {
  const [touchPos, setTouchPos] = useState(null);
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!touchPos) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchPos.x;
    const deltaY = touch.clientY - touchPos.y;
    
    const distance = Math.min(Math.sqrt(deltaX**2 + deltaY**2), 50);
    const angle = Math.atan2(deltaY, deltaX);
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    setJoystickPos({ x, y });
    
    // Calculate movement direction
    const forward = y < -15;
    const backward = y > 15;
    const left = x < -15;
    const right = x > 15;
    
    onMove({ forward, backward, left, right });
  };

  const handleTouchEnd = () => {
    setTouchPos(null);
    setJoystickPos({ x: 0, y: 0 });
    onMove({ forward: false, backward: false, left: false, right: false });
  };

  return (
    <div 
      className="fixed bottom-8 right-8 w-32 h-32 rounded-full bg-black bg-opacity-30 flex items-center justify-center touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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