import { useSelector } from 'react-redux';

import { filtersSelector } from '~/store/filter-slice';
import { OptionsQuery } from '~/store/model/categoryType';

export const useQueryParams = (
    page: number,
    searchQuery: string,
    idSubcategory?: string,
    categoriesIDS?: string,
): OptionsQuery => {
    const filters = useSelector(filtersSelector);
    const objectQuery: OptionsQuery = {};

    if (page > 1) {
        objectQuery.page = page;
    }

    if (filters.allergyFilter.length > 0) {
        objectQuery.allergens = filters.allergyFilter.join(',');
    }
    if (searchQuery) {
        objectQuery.searchString = searchQuery;
    }
    if (filters.meatTypeFilter.length > 0) {
        objectQuery.meat = filters.meatTypeFilter.join(',');
    }
    if (filters.sideDishFilter.length > 0) {
        objectQuery.garnish = filters.sideDishFilter.join(',');
    }

    if (searchQuery === '') {
        objectQuery.subcategoriesIds = idSubcategory;
    }

    if (!idSubcategory && categoriesIDS !== '') {
        objectQuery.subcategoriesIds = categoriesIDS;
    }

    return objectQuery;
};
