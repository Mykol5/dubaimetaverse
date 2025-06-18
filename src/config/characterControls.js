export const characterConfig = {
  // Movement
  maxVelLimit: 8,
  turnSpeed: 0.2,
  turnDrag: 0.8,
  
  // Jumping
  jumpVel: 7,
  jumpForce: 400,
  
  // Camera
  camFollowMult: 12,
  camMaxDis: -15,
  camMinDis: -3,
  
  // Animations
  animationSet: {
    idle: 'CharacterArmature|Idle',
    walk: 'CharacterArmature|Walk',
    run: 'CharacterArmature|Run',
    jump: 'CharacterArmature|Jump',
    fall: 'CharacterArmature|Fall',
  }
};