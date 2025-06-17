// import { create } from 'zustand';

// export const useAvatarStore = create((set) => ({
//   selectedAvatar: null,
//   setAvatar: (avatar) => set({ selectedAvatar: avatar }),
// }));


// src/store/avatarStore.js
// import { create } from 'zustand';

// export const useAvatarStore = create((set) => ({
//   selectedAvatar: null,
//   selectedOutfit: null,
//   setAvatar: (avatar) => set({ selectedAvatar: avatar }),
//   setOutfit: (outfit) => set({ selectedOutfit: outfit }),
// }));


// import { create } from 'zustand';

// export const useAvatarStore = create((set) => ({
//   selectedAvatar: 'male',
//   selectedOutfit: 'Traditional',
//   setAvatar: (avatar) => set({ selectedAvatar: avatar }),
//   setOutfit: (outfit) => set({ selectedOutfit: outfit }),
// }));


import { create } from 'zustand';

export const useAvatarStore = create((set) => ({
  selectedAvatar: 'male',
  selectedOutfit: 'Traditional',
  setAvatar: (avatar) => set({ selectedAvatar: avatar }),
  setOutfit: (outfit) => set({ selectedOutfit: outfit }),
}));
