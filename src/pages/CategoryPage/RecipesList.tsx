import { Flex, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router';

import { CardRecipe } from '~/entities/Card';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';

import { useFilteredRecipes } from './utils/useFilteredRecipes';
interface RecipesListProps {
    category: string;
    subcategory: string;
}

export const RecipesList = ({ category, subcategory }: RecipesListProps) => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const matchesCategory = dataAllCategory.filter(
        (recipeData) =>
            recipeData.category.includes(category) && recipeData.subcategory.includes(subcategory),
    );

    const filteredRecipes = useFilteredRecipes(matchesCategory);

    return (
        <>
            <Text fontSize='xl' fontWeight='bold'>{`- ${category} - ${category}`}</Text>
            {filteredRecipes.length > 0 ? (
                <Flex direction='column' gap={[2, 2, 2, 3, 3]}>
                    <Text>"Есть данные о рецептах в категории"</Text>
                    {filteredRecipes.map((recipeData) => (
                        <CardRecipe key={recipeData.id} {...recipeData} searchQuery={searchQuery} />
                    ))}
                </Flex>
            ) : (
                <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
            )}
        </>
    );
};
