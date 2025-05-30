// const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';

import { Route, Routes } from 'react-router';

import CategoryPage from '~/pages/CategoryPage/CategoryPage';
import SingleRecipePage from '~/pages/CategoryPage/SingleRecipePage';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';

import AuthLayout from './Authentication/AuthLayout';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import Verification from './Authentication/Verification';
import Layout from './layouts/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { CategoryRouteValidator } from './utils/CategoryRouteValidator';

const AppRouter = () => (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='verification' element={<Verification />} />
        </Route>
        <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path=':category'>
                    <Route
                        index
                        element={
                            <CategoryRouteValidator>
                                <CategoryPage />
                            </CategoryRouteValidator>
                        }
                    />
                    <Route
                        path=':subcategory'
                        element={
                            <CategoryRouteValidator>
                                <CategoryPage />
                            </CategoryRouteValidator>
                        }
                    />
                </Route>

                <Route path=':category/:subcategory/:id' element={<SingleRecipePage />} />
                <Route path='the-juiciest' element={<Juiciest />} />
            </Route>
        </Route>

        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);

export default AppRouter;
