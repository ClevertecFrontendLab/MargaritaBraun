import { useGetRecipeByIdQuery } from '~/store/apiQuery/marathonApi';

export const useRecipesIDTitle = (idRecipe: string) => {
    const { data: allRecipes } = useGetRecipeByIdQuery(idRecipe);
    const currentrecipes = allRecipes ? allRecipes.title : '';
    return currentrecipes;
};
