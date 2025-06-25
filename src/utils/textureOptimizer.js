
import * as THREE from 'three'; // Add this at the top

export function optimizeTextures(scene) {
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      if (child.material.map) {
        // Downsize large textures
        if (child.material.map.image.width > 2048 || child.material.map.image.height > 2048) {
          console.log(`Resizing texture from ${child.material.map.image.width}x${child.material.map.image.height}`);
          child.material.map = resizeTexture(child.material.map, 2048);
        }
      }
    }
  });
}

function resizeTexture(texture, maxSize) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Calculate new size while maintaining aspect ratio
  const ratio = Math.min(
    maxSize / texture.image.width,
    maxSize / texture.image.height
  );
  
  canvas.width = Math.floor(texture.image.width * ratio);
  canvas.height = Math.floor(texture.image.height * ratio);
  
  ctx.drawImage(texture.image, 0, 0, canvas.width, canvas.height);
  
  const newTexture = new THREE.Texture(canvas);
  newTexture.needsUpdate = true;
  return newTexture;
}