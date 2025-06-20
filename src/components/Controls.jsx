import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export function useControls() {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false
  });

  // Keyboard controls
  useEffect(() => {
    const keyMap = {
      'w': 'forward',
      'arrowup': 'forward',
      's': 'backward',
      'arrowdown': 'backward',
      'a': 'left',
      'arrowleft': 'left',
      'd': 'right',
      'arrowright': 'right',
      ' ': 'jump',
      'shift': 'run'
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (keyMap[key]) {
        setControls(prev => ({ ...prev, [keyMap[key]]: true }));
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (keyMap[key]) {
        setControls(prev => ({ ...prev, [keyMap[key]]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return controls;
}