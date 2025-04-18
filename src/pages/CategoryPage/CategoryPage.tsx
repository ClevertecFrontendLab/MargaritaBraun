import { Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { NavigationTabs, PageHeaderWithFilters } from '~/widgets/Content';

import { RecipesList } from './RecipesList';

const CategoryPage = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    // Находим объект категории
    const categoryObject = navigationData.find((item) => item.url === category);

    // Проверяем, найден ли объект категории
    if (!categoryObject) {
        return (
            <Flex justify='center' align='center' height='100%'>
                <Text fontSize='xl' color='red.500'>
                    Категория не найдена.
                </Text>
            </Flex>
        );
    }

    const subcategoryObject = categoryObject.subitems;
    const title = categoryObject.label || 'Вкусная кухня для вас';

    return (
        <Flex direction='column' justify='flex-start' height='100%'>
            <PageHeaderWithFilters title={title} />
            {subcategoryObject && <NavigationTabs itemsNavigations={subcategoryObject} />}
            {category && subcategory && (
                <RecipesList category={category} subcategory={subcategory} />
            )}
        </Flex>
    );
};

export default CategoryPage;
