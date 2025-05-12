import { FC, ReactNode, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

interface CategoryRouteValidatorProps {
    children: ReactNode;
}

export const CategoryRouteValidator: FC<CategoryRouteValidatorProps> = ({ children }) => {
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
