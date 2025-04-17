//     const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import CategoryPage from '~/pages/CategoryPage/CategoryPage';
// import navigationData from '~/entities/NavMenu/const/navigationData';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';

// import VeganСuisine from '~/pages/VeganCuisine/VeganCuisine';
import Layout from './layouts/Layout';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                {/* {navigationData.map((category) => (
                    //  <VeganСuisine />
                    <Route key={category.url} path={`/${category.url}`} element={<CategoryPage />}>
                        {category.subitems &&
                            category.subitems.map((subitem) => (
                                <Route
                                    key={`${category.url}/${subitem.url}`}
                                    path={`${subitem.url}`}
                                    element={<CategoryPage />}
                                />
                            ))}
                    </Route>
                ))} */}
                <Route path=':category' element={<CategoryPage />}>
                    <Route path=':subcategory' element={<CategoryPage />} />
                </Route>
                <Route path='juiciest' element={<Juiciest />} />
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
