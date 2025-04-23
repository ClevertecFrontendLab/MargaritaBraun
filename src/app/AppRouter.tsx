// const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import CategoryPage from '~/pages/CategoryPage/CategoryPage';
import SingleRecipePage from '~/pages/CategoryPage/SingleRecipePage';
import { FiltersPage } from '~/pages/FiltersPage/FiltersPage';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';

import Layout from './layouts/Layout';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=':category' element={<CategoryPage />}>
                    <Route path=':subcategory' element={<CategoryPage />}></Route>
                </Route>
                <Route path='/:category/:subcategory/:id' element={<SingleRecipePage />} />
                <Route path='juiciest' element={<Juiciest />} />
                <Route path='filters' element={<FiltersPage />} />
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
