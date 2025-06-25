import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function WebGLContextManager() {
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost. Attempting recovery...');
      setTimeout(() => {
        gl.forceContextRestore().then(() => {
          console.log('WebGL context restored successfully');
        }).catch((error) => {
          console.error('Failed to restore WebGL context:', error);
        });
      }, 500);
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
      // Reinitialize any necessary WebGL state here
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLost);
    gl.domElement.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
      gl.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl]);

  return null;
}