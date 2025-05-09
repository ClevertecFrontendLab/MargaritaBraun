import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../consts/apiConsts';
import {
    AllCategoryInterface,
    Category,
    OptionsQuery,
    Recipe,
    RecipesListResponce,
} from '../model/categoryType';

export const marathonApi = createApi({
    reducerPath: 'marathonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Categories', 'Recipes'],
    endpoints: (build) => ({
        getAllCategoriesWithSubcategory: build.query<AllCategoryInterface[], void>({
            query: () => '/category',
            providesTags: ['Categories'],
        }),

        getAllCategories: build.query<Category[], void>({
            query: () => '/category',
            transformResponse: (response: AllCategoryInterface[]): Category[] =>
                response.filter(
                    (item): item is Category =>
                        'subCategories' in item && item.subCategories !== undefined,
                ),
            providesTags: ['Categories'],
        }),

        getCategoriesAtSubcategories: build.query<Category[], string[]>({
            query: () => '/category',
            transformResponse: (
                response: AllCategoryInterface[],
                _meta,
                subCategoryIds: string[],
            ) => {
                const parentCategories = subCategoryIds.map((subCategoryId) => {
                    const subCategory = response.find((item) => item._id === subCategoryId);
                    if (!subCategory || !('rootCategoryId' in subCategory)) return undefined;

                    const parentCategory = response.find(
                        (item) => item._id === subCategory.rootCategoryId,
                    );

                    return parentCategory && 'subCategories' in parentCategory
                        ? parentCategory
                        : undefined;
                });

                return parentCategories.filter(Boolean) as Category[];
            },
            providesTags: ['Categories'],
        }),

        // getCategoryById: build.query<AllCategoryInterface[], string>({
        //     query: (id) => `/category/${id}`,
        // }),

        // getSubCategories: build.query<AllCategoryInterface[], string>({
        //     query: (categoryId) => `/category/${categoryId}/subcategories`,
        // }),

        getAllRecipes: build.query<RecipesListResponce, OptionsQuery>({
            query: (params) => {
                const query: Record<string, string> = {};

                if (params.page !== undefined) {
                    query.page = String(params.page);
                }
                if (params.limit !== undefined) {
                    query.limit = String(params.limit);
                }
                if (params.allergens) {
                    query.allergens = params.allergens;
                }
                if (params.searchString) {
                    query.searchString = params.searchString;
                }
                if (params.meat) {
                    query.meat = params.meat;
                }
                if (params.garnish) {
                    query.garnish = params.garnish;
                }
                if (params.subcategoriesIds) {
                    query.subcategoriesIds = params.subcategoriesIds;
                }
                if (params.sortBy) {
                    query.sortBy = String(params.sortBy);
                }
                if (params.sortOrder) {
                    query.sortOrder = params.sortOrder;
                }

                const queryString = new URLSearchParams(query).toString();
                return `/recipe?${queryString}`;
            },
            providesTags: ['Recipes'],
        }),

        getRecipesForSlider: build.query<RecipesListResponce, void>({
            query: () => ({
                url: '/recipe',
                params: {
                    limit: 10,
                    sortBy: 'createdAt',
                    sortOrder: 'desc',
                },
            }),
            transformResponse: (response: RecipesListResponce): RecipesListResponce => {
                const sortedData = [...response.data].sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                );
                return {
                    data: sortedData,
                    meta: response.meta,
                };
            },
            providesTags: ['Recipes'],
        }),

        getRecipesForJuiciest: build.query<
            RecipesListResponce,
            { limit: number; page: number; sortBy: 'likes'; sortOrder: 'asc' | 'desc' }
        >({
            query: ({ limit = 8, page = 1, sortBy = 'likes', sortOrder = 'desc' }) => {
                const params = new URLSearchParams({
                    limit: limit.toString(),
                    page: page.toString(),
                    sortBy,
                    sortOrder,
                });

                return `/recipe?${params.toString()}`;
            },
            providesTags: ['Recipes'],
        }),

        getRecipesBySubCategory: build.query<
            RecipesListResponce,
            { subCategoryId: string; params: OptionsQuery }
        >({
            query: ({ subCategoryId, params }) => {
                console.log('Sending request with params:', params);
                const query: Record<string, string> = {};

                if (params.page !== undefined) {
                    query.page = String(params.page);
                }
                if (params.limit !== undefined) {
                    query.limit = String(params.limit);
                }
                if (params.allergens) {
                    query.allergens = params.allergens;
                }
                if (params.searchString) {
                    query.searchString = params.searchString;
                }
                if (params.meat) {
                    query.meat = params.meat;
                }
                if (params.garnish) {
                    query.garnish = params.garnish;
                }
                if (params.subcategoriesIds) {
                    query.subcategoriesIds = params.subcategoriesIds;
                }
                if (params.sortBy) {
                    query.sortBy = String(params.sortBy);
                }
                if (params.sortOrder) {
                    query.sortOrder = params.sortOrder;
                }

                const queryString = new URLSearchParams(query).toString();
                return `/recipe/category/${subCategoryId}?${queryString}`;
            },
            providesTags: ['Recipes'],
        }),

        getRecipeById: build.query<Recipe, string>({
            query: (id) => `/recipe/${id}`,
        }),
    }),
});

export const {
    useGetAllCategoriesWithSubcategoryQuery,
    useGetAllCategoriesQuery,
    useGetCategoriesAtSubcategoriesQuery,
    // useGetCategoryByIdQuery,
    // useGetSubCategoriesQuery,

    useGetAllRecipesQuery,
    useGetRecipesForSliderQuery,
    useGetRecipesForJuiciestQuery,
    useGetRecipesBySubCategoryQuery,
    useGetRecipeByIdQuery,
} = marathonApi;
