import { SimpleGrid } from '@chakra-ui/react';

import ErrorNotification from '~/app/ErrorNotification';
import Loading from '~/app/Loading/Loading';
// import { useSearchParams } from 'react-router';
import { CardRecipe } from '~/entities/Card';
// import dataAllCategory from '~/shared/consts/dataAllCategory';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';
import { useGetRecipesBySubCategoryQuery } from '~/store/apiQuery/marathonApi';

// import { useFilteredRecipes } from './utils/useFilteredRecipes';
interface RecipesListCategoryProps {
    // category: string;
    // subcategory: string;
    idSubcategory: string;
}

export const RecipesListCategory = ({
    // category, subcategory,
    idSubcategory,
}: RecipesListCategoryProps) => {
    // console.log('category', category);
    // console.log('subcategory', subcategory);
    console.log('idSubcategory', idSubcategory);

    // const [searchParams] = useSearchParams();
    // const searchQuery = searchParams.get('search') || '';

    // const matchesCategory = dataAllCategory.filter(
    //     (recipeData) =>
    //         recipeData.category.includes(category) && recipeData.subcategory.includes(subcategory),
    // );

    // const filteredRecipes = useFilteredRecipes(matchesCategory);
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
                        <CardRecipe
                            key={recipeData._id}
                            {...recipeData}
                            // searchQuery={searchQuery}
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

// import { SimpleGrid } from '@chakra-ui/react';
// import { useSearchParams } from 'react-router';

// import { CardRecipe } from '~/entities/Card';
// import dataAllCategory from '~/shared/consts/dataAllCategory';
// import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';

// import { useFilteredRecipes } from './utils/useFilteredRecipes';
// interface RecipesListProps {
//     category: string;
//     subcategory: string;
// }

// export const RecipesList = ({ category, subcategory }: RecipesListProps) => {
//     console.log('category', category);
//     console.log('subcategory', subcategory);
//     const [searchParams] = useSearchParams();
//     const searchQuery = searchParams.get('search') || '';

//     const matchesCategory = dataAllCategory.filter(
//         (recipeData) =>
//             recipeData.category.includes(category) && recipeData.subcategory.includes(subcategory),
//     );

//     const filteredRecipes = useFilteredRecipes(matchesCategory);

//     return (
//         <>
//             {filteredRecipes.length > 0 ? (
//                 <SimpleGrid
//                     columns={[1, 1, 2, 1, 1, 2]}
//                     w='100%'
//                     spacing={['12px', '16px', '24px']}
//                 >
//                     {filteredRecipes.map((recipeData, index) => (
//                         <CardRecipe
//                             key={recipeData.id}
//                             {...recipeData}
//                             searchQuery={searchQuery}
//                             index={index}
//                         />
//                     ))}
//                 </SimpleGrid>
//             ) : (
//                 <EmptyRecipesBlock message='Нет данных о рецептах'></EmptyRecipesBlock>
//             )}
//         </>
//     );
// };
