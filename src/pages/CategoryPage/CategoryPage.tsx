import { Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { NavigationTabs } from '~/widgets/Content';

import { RecipesList } from './RecipesList';

const CategoryPage = () => {
    const { category, subcategory } = useParams();

    console.log('category Параметры:', { category, subcategory });

    const categoryObjext = navigationData.find((item) => item.url === category);
    console.log('categoryObjext', categoryObjext);
    const subcategoryObject = categoryObjext?.subitems;
    return (
        <>
            <Flex direction='column' justify='flex-start' height='100%'>
                <Text>{subcategory}</Text>
                {subcategoryObject && <NavigationTabs itemsNavigations={subcategoryObject} />}
                {category && subcategory && (
                    <RecipesList category={category} subcategory={subcategory} />
                )}
            </Flex>
        </>
    );
};

export default CategoryPage;
