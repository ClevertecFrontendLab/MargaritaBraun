import { RecipeIngredientDetail } from '~/shared/consts/dataAllCategory';

export const checkRecipeAllergens = (
    ingredients: RecipeIngredientDetail[],
    allergens: string[],
): boolean => {
    if (!allergens || allergens.length === 0) {
        return false;
    }

    const normalizedAllergens = allergens.map((a) => a.toLowerCase().trim());
    console.log('ingrig', ingredients);

    return ingredients.some((ingredient) => {
        const ingredientName = ingredient.title.toLowerCase().trim();

        return normalizedAllergens.some(
            (allergen) => ingredientName.includes(allergen) || allergen.includes(ingredientName),
        );
    });
};
