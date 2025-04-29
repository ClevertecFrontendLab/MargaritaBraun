import { SimpleGrid } from '@chakra-ui/react';
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
                <SimpleGrid
                    columns={[1, 1, 2, 1, 1, 2]}
                    w='100%'
                    spacing={['12px', '16px', '24px']}
                >
                    {filteredRecipes.map((recipeData, index) => (
                        <CardRecipe
                            key={recipeData.id}
                            {...recipeData}
                            searchQuery={searchQuery}
                            index={index}
                        />
                    ))}
                </SimpleGrid>
            ) : (
                <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
            )}
        </>
    );
};
