// import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import dataAllCategory from '~/shared/consts/dataAllCategory';
import { filtersSelector } from '~/store/filter-slice';
import { PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';

export const FiltersPage = () => {
    const filters = useSelector(filtersSelector);

    const filteredData = dataAllCategory.filter((item) => {
        const matchesCategory =
            filters.categoryFilter.length === 0 ||
            filters.categoryFilter.some((category) => item.category.includes(category));

        // const matchesAuthor =
        //     filters.autorsFilter.length === 0 || filters.autorsFilter.includes(item.author);

        // const matchesMeatType =
        //     filters.meatTypeFilter.length === 0 || filters.meatTypeFilter.includes(item.meat);

        const matchesAllergy = !filters.allergyFilter.some((allergen) =>
            item.ingredients.some((ingredient) =>
                ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
            ),
        );

        return (
            matchesCategory &&
            // matchesAuthor && matchesMeatType &&
            matchesAllergy
        );
    });

    return (
        <>
            {/* <Text>Filters</Text> */}
            <PageHeaderWithFilters title='Фильтрация' />
            <RecipesSections dataAllCategory={filteredData} />{' '}
        </>
    );
};
