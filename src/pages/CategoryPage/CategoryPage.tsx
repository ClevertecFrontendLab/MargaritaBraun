import { Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

import Loading from '~/app/Loading/Loading';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';
import { NavigationTabs, PageHeaderWithFilters } from '~/widgets/Content';

import { RecipesList } from './RecipesList';

const CategoryPage = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const {
        data: navigationData,
        isLoading: catsLoading,
        error: catsError,
    } = useGetAllCategoriesQuery();

    const categoryObject = navigationData?.find((item) => item.category === category);
    const subcategoryObjectFromCategory = categoryObject?.subCategories.find(
        (item) => item.category === subcategory,
    );

    const idSubcategory = subcategoryObjectFromCategory?._id;
    if (catsError) return <div>An error has occurred!</div>;

    if (catsLoading) return <Loading />;

    if (!categoryObject) {
        return (
            <Flex justify='center' align='center' height='100%'>
                <Text fontSize='xl' color='red.500'>
                    Категория не найдена.
                </Text>
            </Flex>
        );
    }

    const subcategoryObject = categoryObject.subCategories;
    const title = categoryObject.title || 'Вкусная кухня для вас';
    const subtitle = categoryObject.description;

    return (
        <Flex direction='column' justify='flex-start' height='100%'>
            <PageHeaderWithFilters title={title} subtitle={subtitle} />
            {subcategoryObject && <NavigationTabs {...categoryObject} />}
            {category && idSubcategory && <RecipesList idSubcategory={idSubcategory} />}
        </Flex>
    );
};

export default CategoryPage;
