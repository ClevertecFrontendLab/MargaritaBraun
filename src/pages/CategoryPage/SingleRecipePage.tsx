import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { CardSinglePage } from '~/entities/Card';
import { SliderNewRecipes } from '~/entities/Slider';
import { IngredientCalculator, ShowColorfulness } from '~/shared/Colorfulness';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { PreparationSteps } from '~/shared/PreparationSteps';
import { RecipeAuthor } from '~/shared/RecipeAuthor';

const SingleRecipePage = () => {
    const { id } = useParams<{
        category: string;
        subcategory: string;
        id: string;
    }>();
    const dataForSingleRecipe = dataAllCategory.find((item) => item.id === id);
    return (
        <>
            {dataForSingleRecipe && (
                <>
                    <Flex
                        w='100%'
                        direction='column'
                        justify='center'
                        gap={[6, 6, 6, 10, 10]}
                        py={['16px', null, null, '56px']}
                    >
                        <CardSinglePage {...dataForSingleRecipe} />
                        <Flex
                            w={['100%', null, null, null, '80%', '60%']}
                            alignItems='center'
                            direction='column'
                            margin='0 auto'
                            gap={[6, 6, 6, 10, 10]}
                        >
                            <ShowColorfulness {...dataForSingleRecipe.nutritionValue} />
                            <IngredientCalculator
                                ingredients={dataForSingleRecipe.ingredients}
                                portions={dataForSingleRecipe.portions}
                            />
                            <PreparationSteps steps={dataForSingleRecipe.steps} />
                            <RecipeAuthor />
                        </Flex>
                        <SliderNewRecipes />
                    </Flex>
                </>
            )}
        </>
    );
};

export default SingleRecipePage;
