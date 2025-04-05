//     const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Layout from '~/layouts/Layout';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';
import VeganСuisine from '~/pages/VeganCuisine/VeganCuisine';
// import { Home, Juiciest, VeganСuisine } from '~/pages';
const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='vegan-cuisine' element={<VeganСuisine />} />
                <Route path='juiciest' element={<Juiciest />} />
            </Route>
        </Routes>
    </Suspense>
);

export default App;

// import './App.css';

// import { useState } from 'react';

// import reactLogo from '~/assets/react.svg';

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <div>
//                 <a href='https://vite.dev' target='_blank'>
//                     <img src='/vite.svg' className='logo' alt='Vite logo' />
//                 </a>
//                 <a href='https://react.dev' target='_blank'>
//                     <img src={reactLogo} className='logo react' alt='React logo' />
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <div className='card'>
//                 <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
//         </>
//     );
// }

// export default App;
