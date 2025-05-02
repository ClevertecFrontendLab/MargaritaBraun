interface BaseCategory {
    _id: string;
    title: string;
    category: string;
}

export interface SubCategory extends BaseCategory {
    rootCategoryId: string;
}

export interface Category extends BaseCategory {
    description: string;
    icon: string;
    subCategories: SubCategory[];
}

export type AllCategoryInterface = Category | SubCategory;

export interface OptionsRecipesList {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface RecipesListResponce {
    data: Recipe[];
    meta: OptionsRecipesList;
}

export interface Recipe {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    time: number;
    image: string;
    likes: number;
    bookmarks: number;
    views: number;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: Step[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
}

export interface Step {
    stepNumber: number;
    description: string;
    image: string;
}

export interface NutritionValue {
    calories: number;
    protein?: number;
    proteins?: number;
    fats: number;
    carbohydrates: number;
}

export interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}
