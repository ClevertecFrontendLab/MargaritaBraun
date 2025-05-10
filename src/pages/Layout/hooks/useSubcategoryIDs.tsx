import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

const useSubcategoryIDs = (categoryTitleArray: string[]): string => {
    const { data: dataCategory } = useGetAllCategoriesQuery();

    if (!dataCategory) {
        return '';
    }

    const results = categoryTitleArray.flatMap((titleCategory) => {
        const currentCategory = dataCategory.find((item) => item.title === titleCategory);
        return currentCategory?.subCategories.map((item) => item._id) || [];
    });

    return results.length > 0 ? results.join(',') : '';
};

export default useSubcategoryIDs;
