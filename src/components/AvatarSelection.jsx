// import { useAvatarStore } from '../store/avatarStore';

// const avatars = [
//   { id: 'male', img: '/avatars/male.png', label: 'Male' },
//   { id: 'female', img: '/avatars/female.png', label: 'Female' },
//   { id: 'neutral', img: '/avatars/neutral.png', label: 'Neutral' },
// ];

// export default function AvatarSelection({ onSelect }) {
//   const setAvatar = useAvatarStore((s) => s.setAvatar);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Choose Your Avatar</h1>
//       <div className="flex gap-8">
//         {avatars.map((a) => (
//           <div
//             key={a.id}
//             onClick={() => {
//               setAvatar(a.id);
//               onSelect();
//             }}
//             className="cursor-pointer border-2 rounded-xl hover:scale-105 transition p-4 shadow-md"
//           >
//             <img src={a.img} alt={a.label} className="w-32 h-32 object-contain" />
//             <p className="text-center mt-2">{a.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useAvatarStore } from '../store/avatarStore';

// const avatars = [
//   { id: 'male', img: '/avatars/male.png', label: 'Male' },
//   { id: 'female', img: '/avatars/female.png', label: 'Female' },
//   { id: 'neutral', img: '/avatars/neutral.png', label: 'Neutral' },
// ];

// export default function AvatarSelection({ onSelect }) {
//   const setAvatar = useAvatarStore((s) => s.setAvatar);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e0e0] to-[#f5f5f5] px-4">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">Select Your Avatar</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {avatars.map((a) => (
//           <div
//             key={a.id}
//             onClick={() => {
//               setAvatar(a.id);
//               onSelect();
//             }}
//             className="cursor-pointer group border-4 border-transparent hover:border-gold-500 rounded-3xl p-4 bg-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
//           >
//             <div className="rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-gold-500 w-40 h-40 mx-auto">
//               <img src={a.img} alt={a.label} className="w-full h-full object-cover" />
//             </div>
//             <p className="text-center mt-4 text-lg font-semibold text-gray-700 group-hover:text-gold-600">
//               {a.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useState } from 'react';
// import { useAvatarStore } from '../store/avatarStore';

// const avatars = [
//   { id: 'male', img: '/avatars/male.png', label: 'Male' },
//   { id: 'female', img: '/avatars/female.png', label: 'Female' },
// //   { id: 'neutral', img: '/avatars/neutral.png', label: 'Neutral' },
// ];

// const outfits = ['Traditional', 'Smart Casual', 'Thobe'];

// export default function AvatarSelection({ onSelect }) {
//   const [stage, setStage] = useState('avatar'); // avatar or outfit
//   const [selectedAvatarId, setSelectedAvatarId] = useState(null);
//   const setAvatar = useAvatarStore((s) => s.setAvatar);
//   const setOutfit = useAvatarStore((s) => s.setOutfit);

//   const handleAvatarPick = (id) => {
//     setSelectedAvatarId(id);
//     setAvatar(id);
//     setStage('outfit');
//   };

//   const handleOutfitPick = (outfit) => {
//     setOutfit(outfit);
//     onSelect(); // go to Virtual World
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e0e0] to-[#f5f5f5] px-4">
//       {stage === 'avatar' ? (
//         <>
//           <h1 className="text-3xl font-bold mb-6">Choose Your Avatar</h1>
//           <div className="flex gap-6 flex-wrap justify-center">
//             {avatars.map((a) => (
//               <div
//                 key={a.id}
//                 onClick={() => handleAvatarPick(a.id)}
//                 className="cursor-pointer group border-2 border-transparent hover:border-yellow-500 rounded-xl p-3 bg-white shadow-md hover:shadow-lg transition-all w-28 h-40 flex flex-col items-center"
//               >
//                 <img src={a.img} alt={a.label} className="w-20 h-20 object-contain" />
//                 <p className="text-center mt-2 font-medium text-sm">{a.label}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <h1 className="text-3xl font-bold mb-6">Choose an Outfit</h1>
//           <div className="flex gap-4 flex-wrap justify-center">
//             {outfits.map((outfit) => (
//               <button
//                 key={outfit}
//                 onClick={() => handleOutfitPick(outfit)}
//                 className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow font-semibold transition"
//               >
//                 {outfit}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }








import { useState } from 'react';
import { useAvatarStore } from '../store/avatarStore';

const avatars = [
  { id: 'male', img: '/avatars/male.png', label: 'Male' },
  { id: 'female', img: '/avatars/female.png', label: 'Female' },
];

const outfits = ['Traditional', 'Smart Casual', 'Thobe'];

export default function AvatarSelection({ onSelect }) {
  const [stage, setStage] = useState('avatar');
  const [selectedAvatarId, setSelectedAvatarId] = useState(null);
  const setAvatar = useAvatarStore((s) => s.setAvatar);
  const setOutfit = useAvatarStore((s) => s.setOutfit);

  const handleAvatarPick = (id) => {
    setSelectedAvatarId(id);
    setAvatar(id);
    setStage('outfit');
  };

  const handleOutfitPick = (outfit) => {
    setOutfit(outfit);
    onSelect();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e0e0e0] to-[#f5f5f5] px-4">
      {stage === 'avatar' ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Choose Your Avatar</h1>
          <div className="flex gap-6 flex-wrap justify-center">
            {avatars.map((a) => (
              <div
                key={a.id}
                onClick={() => handleAvatarPick(a.id)}
                className="cursor-pointer group border-2 border-transparent hover:border-yellow-500 rounded-xl p-3 bg-white shadow-md hover:shadow-lg transition-all w-28 h-40 flex flex-col items-center"
              >
                <img src={a.img} alt={a.label} className="w-20 h-20 object-contain" />
                <p className="text-center mt-2 font-medium text-sm">{a.label}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Choose an Outfit</h1>
          <div className="flex gap-4 flex-wrap justify-center">
            {outfits.map((outfit) => (
              <button
                key={outfit}
                onClick={() => handleOutfitPick(outfit)}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow font-semibold transition"
              >
                {outfit}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// yarn add framer-motion react-router-dom
// yarn add -D sass @types/node