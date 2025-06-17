// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import { useState } from 'react';
// import AvatarSelection from './components/AvatarSelection';
// import VirtualWorld from './components/VirtualWorld';

// function App() {
//   const [selected, setSelected] = useState(false);

//   return (
//     <>
//       {!selected ? (
//         <AvatarSelection onSelect={() => setSelected(true)} />
//       ) : (
//         <VirtualWorld />
//       )}
//     </>
//   );
// }

// export default App;



// // App.jsx or main file
// import { useState } from 'react';
// import AvatarSelection from './components/AvatarSelection';
// import VirtualWorld from './components/VirtualWorld';

// export default function App() {
//   const [step, setStep] = useState('select'); // 'select' or 'world'

//   return (
//     <>
//       {step === 'select' ? (
//         <AvatarSelection onSelect={() => setStep('world')} />
//       ) : (
//         <VirtualWorld />
//       )}
//     </>
//   );
// }




import { useState } from 'react';
import AvatarSelection from './components/AvatarSelection';
import VirtualWorld from './components/VirtualWorld';
import { Loader } from '@react-three/drei';

export default function App() {
  const [step, setStep] = useState('select'); // 'select' or 'world'
  const [loading, setLoading] = useState(false);

  return (
    <>
      {step === 'select' ? (
        <AvatarSelection 
          onSelect={() => {
            setLoading(true);
            setTimeout(() => {
              setStep('world');
              setLoading(false);
            }, 1000);
          }} 
        />
      ) : (
        <>
          <VirtualWorld />
          {loading && <Loader />}
        </>
      )}
    </>
  );
}