import { Flex } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router';

import ErrorNotification from '~/app/ErrorNotification';
import Loading from '~/app/Loading/Loading';
import { useGetAllRecipesQuery } from '~/store/apiQuery/marathonApi';
import { filtersSelector } from '~/store/filter-slice';
import { Category, OptionsQuery, SubCategory } from '~/store/model/categoryType';
import { NavigationTabs, PageHeaderWithFilters } from '~/widgets/Content';

import { OnlyRecipesList } from './OnlyRecipesList';

interface ContentLayoutCategoryProps {
    title: string;
    showFiltered: boolean;
    children?: ReactNode;
    subtitle?: string;
    categoryObject?: Category;
    subcategoryObject?: SubCategory[];
    idSubcategory: string;
}

const ContentLayoutCategory = ({
    title,
    subtitle,
    showFiltered,
    categoryObject,
    subcategoryObject,
    children,
    idSubcategory,
}: ContentLayoutCategoryProps) => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const filters = useSelector(filtersSelector);
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
        setPage(1);
    }, [category, subcategory, searchQuery]);

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

    const handleRefresh = () => {
        refetch();
    };

    const { data: recipesData, isLoading, isError, refetch } = useGetAllRecipesQuery(objectQuery);

    console.log('searchQuery', searchQuery);
    if (isLoading) {
        return <Loading />;
    }

    const addRecipes = () => {
        setPage((prevPage: number) => prevPage + 1);
    };

    if (recipesData?.data.length === 0) {
        showFiltered = false;
    }

    if (isError) {
        showFiltered = false;
    }

    return (
        <Flex direction='column' justify='flex-start' height='100%'>
            <PageHeaderWithFilters
                title={title}
                subtitle={subtitle}
                handleRefresh={handleRefresh}
            />
            {subcategoryObject && categoryObject && (
                <NavigationTabs categoryObject={categoryObject} handleRefresh={handleRefresh} />
            )}
            {isError && <ErrorNotification />}
            {showFiltered === true ? (
                <OnlyRecipesList
                    searchQuery={searchQuery}
                    recipesData={recipesData!}
                    addRecipes={addRecipes}
                />
            ) : (
                children
            )}
        </Flex>
    );
};

export default ContentLayoutCategory;
