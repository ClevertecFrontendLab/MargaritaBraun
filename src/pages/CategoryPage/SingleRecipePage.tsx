import { Link, useParams } from 'react-router';

import { CardSinglePage } from '~/entities/Card';
import { IngredientCalculator, ShowColorfulness } from '~/shared/Colorfulness';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { PreparationSteps } from '~/shared/PreparationSteps';

const SingleRecipePage = () => {
    const { category, subcategory, id } = useParams<{
        category: string;
        subcategory: string;
        id: string;
    }>();
    const dataForSingleRecipe = dataAllCategory.find((item) => item.id === id);
    return (
        <>
            {dataForSingleRecipe && (
                <>
                    <CardSinglePage {...dataForSingleRecipe} />
                    <ShowColorfulness {...dataForSingleRecipe.nutritionValue} />
                    <IngredientCalculator
                        ingredients={dataForSingleRecipe.ingredients}
                        portions={dataForSingleRecipe.portions}
                    />
                    <PreparationSteps steps={dataForSingleRecipe.steps} />
                </>
            )}

            <h2>RecipeId: {id}</h2>
            <p>Category: {category}</p>
            <p>Subcategory: {subcategory}</p>
            <Link to='/'>Back to Home</Link>
        </>
    );
};

export default SingleRecipePage;
