import { useGetCategoriesAtSubcategoriesQuery } from '~/store/apiQuery/marathonApi';

export const useCategoryAtSubCategID = (categoriesIds: string[]) => {
    const { data: parentCategories } = useGetCategoriesAtSubcategoriesQuery(categoriesIds);

    const uniqueParentCategories = parentCategories
        ? Array.from(new Map(parentCategories.map((item) => [item._id, item])).values())
        : [];

    return uniqueParentCategories;
};
