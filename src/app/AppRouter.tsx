//     const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';
import VeganСuisine from '~/pages/VeganCuisine/VeganCuisine';

import Layout from './layouts/Layout';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                {navigationData.map((category) => (
                    <Route key={category.url} path={`/${category.url}`} element={<VeganСuisine />}>
                        {category.subitems &&
                            category.subitems.map((subitem) => (
                                <Route
                                    key={`${category.url}/${subitem.url}`}
                                    path={`${subitem.url}`}
                                    element={<VeganСuisine />}
                                />
                            ))}
                    </Route>
                ))}
                <Route path='juiciest' element={<Juiciest />} />
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
