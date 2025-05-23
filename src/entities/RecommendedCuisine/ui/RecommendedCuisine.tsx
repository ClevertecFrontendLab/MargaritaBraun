import Loading from '~/app/Loading/Loading';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';
import { Category } from '~/store/model/categoryType';

import { RecommendedSection } from './Components/RecommendedSection';

export const RecommendedCuisine = () => {
    const { data: allCategoryData } = useGetAllCategoriesQuery();

    const getRandomIndex = (array: Category[]) => Math.floor(Math.random() * array.length);

    if (!allCategoryData) {
        return <Loading />;
    }

    const randomCategory = allCategoryData[getRandomIndex(allCategoryData)];

    const idSubcategory = randomCategory ? randomCategory.subCategories[0]._id : '';
    const title = randomCategory.title;
    const description = randomCategory.description;

    return (
        <RecommendedSection title={title} description={description} idSubcategory={idSubcategory} />
    );
};
