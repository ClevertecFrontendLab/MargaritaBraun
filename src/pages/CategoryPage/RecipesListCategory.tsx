import { SimpleGrid } from '@chakra-ui/react';

import ErrorNotification from '~/app/ErrorNotification';
import Loading from '~/app/Loading/Loading';
import { CardRecipe } from '~/entities/Card';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';
import { useGetRecipesBySubCategoryQuery } from '~/store/apiQuery/marathonApi';

interface RecipesListCategoryProps {
    idSubcategory: string;
}

export const RecipesListCategory = ({ idSubcategory }: RecipesListCategoryProps) => {
    const {
        data: recipesObject,
        isLoading,
        isError,
    } = useGetRecipesBySubCategoryQuery({
        subCategoryId: idSubcategory,
        params: { page: 1, limit: 8 },
    });

    const filteredRecipes = recipesObject?.data;

    console.log('filteredRecipes', filteredRecipes);

    if (isLoading) return <Loading />;

    if (isError) return <ErrorNotification />;
    return (
        <>
            {filteredRecipes && filteredRecipes.length > 0 ? (
                <SimpleGrid
                    columns={[1, 1, 2, 1, 1, 2]}
                    w='100%'
                    spacing={['12px', '16px', '24px']}
                >
                    {filteredRecipes.map((recipeData, index) => (
                        <CardRecipe key={recipeData._id} {...recipeData} index={index} />
                    ))}
                </SimpleGrid>
            ) : (
                <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
            )}
        </>
    );
};
