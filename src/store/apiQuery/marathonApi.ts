import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../consts/apiConsts';
import {
    AllCategoryInterface,
    Category,
    // CategoryInterface,
    Recipe,
    RecipesListResponce,
    // SubCategoriesType,
} from '../model/categoryType';

export const marathonApi = createApi({
    reducerPath: 'marathonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Categories', 'Recipes'],
    endpoints: (build) => ({
        // Категории
        getAllCategoriesWithSubcategory: build.query<AllCategoryInterface[], void>({
            query: () => '/category',
            providesTags: ['Categories'],
        }),

        // Получение только родительских категорий (с подкатегориями)
        getAllCategories: build.query<Category[], void>({
            query: () => '/category',
            transformResponse: (response: AllCategoryInterface[]): Category[] =>
                response.filter(
                    (item): item is Category =>
                        // Type guard - проверяем, что это Category (а не SubCategory)
                        'subCategories' in item && item.subCategories !== undefined,
                ),
            providesTags: ['Categories'],
        }),

        // Получение родительских категорий по массиву ID подкатегорий
        getCategoriesAtSubcategories: build.query<Category[], string[]>({
            query: () => '/category',
            transformResponse: (
                response: AllCategoryInterface[],
                _meta,
                subCategoryIds: string[],
            ) => {
                const parentCategories = subCategoryIds.map((subCategoryId) => {
                    // Находим подкатегорию
                    const subCategory = response.find((item) => item._id === subCategoryId);
                    if (!subCategory || !('rootCategoryId' in subCategory)) return undefined;

                    // Находим родительскую категорию
                    const parentCategory = response.find(
                        (item) => item._id === subCategory.rootCategoryId,
                    );

                    // Проверяем, что это действительно Category (а не SubCategory)
                    return parentCategory && 'subCategories' in parentCategory
                        ? parentCategory
                        : undefined;
                });

                // Убираем неопределённые значения и возвращаем уникальные родительские категории
                return parentCategories.filter(Boolean) as Category[];
            },
            providesTags: ['Categories'],
        }),

        getCategoryById: build.query<AllCategoryInterface[], string>({
            query: (id) => `/category/${id}`,
        }),

        getSubCategories: build.query<AllCategoryInterface[], string>({
            query: (categoryId) => `/category/${categoryId}/subcategories`,
        }),

        // Рецепты
        getAllRecipes: build.query<Recipe[], void>({
            query: () => '/recipe',
            providesTags: ['Recipes'],
        }),

        getRecipesByCategory: build.query<Recipe[], string>({
            query: (category) => `/recipe?category=${category}`,
        }),

        // getRecipesBySubCategory: build.query<Recipe[], string>({
        //     query: (subCategory) => `/recipe?subCategory=${subCategory}`,
        // }),

        getRecipesBySubCategory: build.query<RecipesListResponce, string>({
            query: (subCategoryId) => `/recipe/category/${subCategoryId}`,
            // providesTags: (result, error, subCategoryId) => [{ type: 'Recipes', id: subCategoryId }],
        }),

        getRecipeById: build.query<Recipe, string>({
            query: (id) => `/recipe/${id}`,
        }),

        searchRecipes: build.query<Recipe[], string>({
            query: (searchTerm) => `/recipe?search=${searchTerm}`,
        }),
    }),
});

// Экспортируем все хуки
export const {
    // Категории
    // getAllCategoriesWithSubcategory
    useGetAllCategoriesWithSubcategoryQuery,
    useGetAllCategoriesQuery,
    useGetCategoriesAtSubcategoriesQuery,
    // useGetAllParentCategories,
    useGetCategoryByIdQuery,
    useGetSubCategoriesQuery,

    // Рецепты
    useGetAllRecipesQuery,
    useGetRecipesByCategoryQuery,
    useGetRecipesBySubCategoryQuery,
    useGetRecipeByIdQuery,
    useSearchRecipesQuery,
} = marathonApi;
