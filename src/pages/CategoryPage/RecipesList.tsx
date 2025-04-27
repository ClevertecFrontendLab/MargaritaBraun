import { Flex } from '@chakra-ui/react';
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
            {filteredRecipes.length > 0 ? (
                <Flex direction='column' gap={[2, 2, 2, 3, 3]}>
                    {filteredRecipes.map((recipeData, index) => (
                        <CardRecipe
                            key={recipeData.id}
                            {...recipeData}
                            searchQuery={searchQuery}
                            index={index}
                        />
                    ))}
                </Flex>
            ) : (
                <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
            )}
        </>
    );
};
