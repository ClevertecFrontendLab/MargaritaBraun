export interface OptionsQuery {
    page?: number; // Номер страницы
    limit?: number; // Лимит на количество элементов
    allergens?: string; // Аллергены, например: 'Яйцо,Курица'
    searchString?: string; // Строка поиска, например: 'Салат'
    meat?: string; // Мясо, например: 'Говядина,Курица'
    garnish?: string; // Гарнир, например: 'Картофель,Лапша'
    subcategoriesIds?: string; // ID подкатегорий, например: '67c46dc5f51967aa8390bee6,67c46df5f51967aa8390bee7'
    sortBy?: keyof Recipe; // Поле для сортировки, соответствует ключам интерфейса Recipe
    sortOrder?: 'asc' | 'desc'; // Порядок сортировки
}

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
