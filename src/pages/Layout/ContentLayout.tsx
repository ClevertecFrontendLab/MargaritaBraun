import { Flex } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';

import { ErrorNotification } from '~/entities/Alert';
import { useGetAllRecipesQuery } from '~/store/apiQuery/marathonApi';
import { filtersSelector } from '~/store/filter-slice';
import { OptionsQuery } from '~/store/model/categoryType';
import { PageHeaderWithFilters } from '~/widgets/Content';

import useSubcategoryIDs from './hooks/useSubcategoryIDs';
import { OnlyRecipesList } from './OnlyRecipesList';
import { useQueryParams } from './utils/useQueryParams';

interface ContentLayoutProps {
    title: string;
    showFiltered: boolean;
    children: ReactNode;
    subtitle?: string;
}

const ContentLayout = ({ title, subtitle, showFiltered, children }: ContentLayoutProps) => {
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const filters = useSelector(filtersSelector);
    const searchQuery = searchParams.get('search') || '';
    const categoriesIDS = useSubcategoryIDs(filters.categoryFilter);

    const objectQuery: OptionsQuery = useQueryParams(page, searchQuery, categoriesIDS);

    const handleRefresh = () => {
        refetch();
    };

    const { data: recipesData, isLoading, isError, refetch } = useGetAllRecipesQuery(objectQuery);

    const addRecipes = () => {
        setPage((prevPage: number) => prevPage + 1);
    };

    console.log('ContentLayout recipesData', recipesData);
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
            {isError && <ErrorNotification message='mistake' />}
            {isLoading === false && showFiltered ? (
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

export default ContentLayout;
