import { memo } from 'react';
import { useParams } from 'react-router';

import Loading from '~/app/Loading/Loading';
import { RecommendedCuisine } from '~/entities/RecommendedCuisine';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

import ContentLayoutCategory from '../Layout/ContentLayoutCategory';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MemoizedRecommendedCuisine = memo(RecommendedCuisine);

const CategoryPage = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const {
        data: navigationData,
        isLoading: catsLoading,
        error: catsError,
    } = useGetAllCategoriesQuery();

    if (catsError) return <div>An error has occurred!</div>;
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
            <MemoizedRecommendedCuisine />
        </>
    );
};

export default CategoryPage;
