import { Flex, Text } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';
interface RecipesListProps {
    category: string;
    subcategory: string;
}

export const RecipesList = ({ category, subcategory }: RecipesListProps) => {
    const recipeDataCategory = dataAllCategory.filter(
        (recipeData) =>
            recipeData.category.includes(category) && recipeData.subcategory.includes(subcategory),
    );

    return (
        <>
            <Text fontSize='xl' fontWeight='bold'>{`- ${category} - ${category}`}</Text>
            {recipeDataCategory.length > 0 ? (
                <Flex direction='column' gap={[2, 2, 2, 3, 3]}>
                    <Text>"Есть данные о рецептах в категории"</Text>
                    {recipeDataCategory.map((recipeData) => (
                        <CardRecipe key={recipeData.id} {...recipeData} />
                    ))}
                </Flex>
            ) : (
                <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
            )}
        </>
    );
};
