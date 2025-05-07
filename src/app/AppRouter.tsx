// const { data: _data, isLoading: _isLoading } = useGetPostsQuery();
// import { useGetPostsQuery } from '~/query/services/posts.ts';

import { FC, ReactNode, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router';

import CategoryPage from '~/pages/CategoryPage/CategoryPage';
import SingleRecipePage from '~/pages/CategoryPage/SingleRecipePage';
import Home from '~/pages/Home/Home';
import Juiciest from '~/pages/Juiciest/Juiciest';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

import Layout from './layouts/Layout';
interface CategoryRouteValidatorProps {
    children: ReactNode;
}

const CategoryRouteValidator: FC<CategoryRouteValidatorProps> = ({ children }) => {
    const { category, subcategory } = useParams();
    const { data: categories, isLoading, isSuccess } = useGetAllCategoriesQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess && categories) {
            const categoryExists = categories.some(
                (cat) =>
                    cat.category === category ||
                    cat.subCategories?.some((sub) => sub.category === category),
            );

            if (!categoryExists) {
                navigate('/not-found', { replace: true });
                return;
            }

            if (subcategory) {
                const subCategoryExists = categories.some((cat) =>
                    cat.subCategories?.some((sub) => sub.category === subcategory),
                );

                if (!subCategoryExists) {
                    navigate('/not-found', { replace: true });
                }
            }
        }
    }, [categories, isSuccess, category, subcategory, navigate]);

    if (isLoading) return null;

    return children;
};

const AppRouter = () => (
    <Routes>
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

        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);

export default AppRouter;
