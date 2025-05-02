export const Testing = () => (
    <>
        <div>Testing</div>
    </>
);

// import { useState } from 'react';

// import {
//     useGetAllCategoriesQuery,
//     useGetRecipesByCategoryQuery,
// } from '~/store/apiQuery/marathonApi';

// function CategoriesWithRecipes () {
// export const Testing = () => {
//     const {
//         data: categories,
//         isLoading: catsLoading,
//         error: catsError,
//     } = useGetAllCategoriesQuery();
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//     const { data: recipes, isLoading: recipesLoading } = useGetRecipesByCategoryQuery(
//         selectedCategory || '',
//         { skip: !selectedCategory },
//     );

//     if (catsLoading) return <div>Loading categories...</div>;
//     if (catsError) return <div>Error loading categories</div>;

//     return (
//         <div className='categories-recipes-container'>
//             <div className='categories-list'>
//                 <h2>Categories</h2>
//                 <ul>
//                     {categories?.map((category) => (
//                         <li
//                             key={category._id}
//                             onClick={() => setSelectedCategory(category.category)}
//                             className={selectedCategory === category.category ? 'active' : ''}
//                         >
//                             {category.title}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className='recipes-list'>
//                 <h2>Recipes in {selectedCategory || 'select category'}</h2>
//                 {recipesLoading ? (
//                     <div>Loading recipes...</div>
//                 ) : (
//                     <ul>
//                         {recipes?.map((recipe) => (
//                             <li key={recipe._id}>
//                                 <h3>{recipe.title}</h3>
//                                 <p>{recipe.description}</p>
//                                 <span>Cooking time: {recipe.cookingTime} min</span>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };
