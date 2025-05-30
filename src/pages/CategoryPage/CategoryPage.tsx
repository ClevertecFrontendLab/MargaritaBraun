import { memo } from 'react';
import { useParams } from 'react-router';

import Loading from '~/app/Loading/Loading';
import { ErrorNotification } from '~/entities/Alert';
import { RecommendedCuisine } from '~/entities/RecommendedCuisine';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

import ContentLayoutCategory from '../Layout/ContentLayoutCategory';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { RecipesListCategory } from './RecipesListCategory';
import { useCheckActiveFilters } from './utils/useCheckActiveFilters';

const MemoizedRecommendedCuisine = memo(RecommendedCuisine);

const CategoryPage = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const check = useCheckActiveFilters();
    const {
        data: navigationData,
        isLoading: catsLoading,
        error: catsError,
    } = useGetAllCategoriesQuery();

    if (catsError) return <ErrorNotification message='mistake' />;
    if (catsLoading) return <Loading />;

    const categoryObject = navigationData?.find((item) => item.category === category);

    if (!categoryObject) {
        return <NotFoundPage />;
    }

    const subcategoryObject = categoryObject.subCategories;
    const title = categoryObject.title || 'Вкусная кухня для вас';
    const idSubcategory =
        subcategoryObject.find((item) => item.category === subcategory)?._id || '';
    return (
        <>
            <ContentLayoutCategory
                title={title}
                subtitle={categoryObject.description}
                showFiltered={true}
                categoryObject={categoryObject}
                subcategoryObject={subcategoryObject}
                idSubcategory={idSubcategory}
            />
            {!check && <RecipesListCategory idSubcategory={idSubcategory} />}
            <MemoizedRecommendedCuisine />
        </>
    );
};

export default CategoryPage;
