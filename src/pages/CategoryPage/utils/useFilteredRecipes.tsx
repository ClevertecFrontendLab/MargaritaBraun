import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { filtersSelector } from '~/store/filter-slice';

import { checkRecipeAllergens } from './checkRecipeAllergens';

export const useFilteredRecipes = (dataWithoutFilters = dataAllCategory) => {
    const filters = useSelector(filtersSelector);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const filteredData = dataWithoutFilters.filter((recipeData) => {
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            const titleMatches = recipeData.title.toLowerCase().includes(searchLower);
            if (!titleMatches) return false;
        }

        if (filters.categoryFilter.length > 0) {
            const categoryMatches = filters.categoryFilter.some((category) => {
                const translateCategory = navigationData.find((item) => item.label === category);
                return translateCategory && recipeData.category.includes(translateCategory.url);
            });
            if (!categoryMatches) return false;
        }

        if (filters.allergyFilter.length > 0) {
            const hasAllergens = checkRecipeAllergens(
                recipeData.ingredients,
                filters.allergyFilter,
            );
            if (hasAllergens) return false;
        }

        return true;
    });
    return filteredData;
};
