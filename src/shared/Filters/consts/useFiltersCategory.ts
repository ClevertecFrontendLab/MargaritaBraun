import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

const useFiltersCategory = () => {
    const { data: dataCategory } = useGetAllCategoriesQuery();

    if (!dataCategory) {
        return [];
    }

    const categoriesForFilter = dataCategory.map((category) => category.title);

    return categoriesForFilter;
};

export default useFiltersCategory;
