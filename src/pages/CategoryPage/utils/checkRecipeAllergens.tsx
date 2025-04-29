import { RecipeIngredientDetail } from '~/shared/consts/dataAllCategory';

export const checkRecipeAllergens = (
    ingredients: RecipeIngredientDetail[],
    allergens: string[],
): boolean => {
    if (!allergens || allergens.length === 0) {
        return false;
    }

    const normalizedAllergens = allergens.map((a) => a.toLowerCase().trim());

    return ingredients.some((ingredient) => {
        const ingredientName = ingredient.title.toLowerCase().trim();

        return normalizedAllergens.some((allergen) => {
            if (allergen === 'томат (помидор)') {
                allergen = 'томат';
            }
            return ingredientName.includes(allergen) || allergen.includes(ingredientName);
        });
    });
};
