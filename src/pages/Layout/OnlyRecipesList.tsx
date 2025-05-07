import { Button, Flex, SimpleGrid } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';
import { RecipesListResponce } from '~/store/model/categoryType';

interface OnlyRecipesListProps {
    searchQuery: string;
    recipesData: RecipesListResponce;
    addRecipes: () => void;
}

export const OnlyRecipesList = ({ searchQuery, recipesData, addRecipes }: OnlyRecipesListProps) => {
    const filteredRecipes = recipesData.data;
    const options = recipesData.meta;

    return (
        <>
            {filteredRecipes && filteredRecipes.length > 0 && (
                <>
                    <SimpleGrid
                        columns={[1, 1, 2, 1, 1, 2]}
                        w='100%'
                        spacing={['12px', '16px', '24px']}
                    >
                        {filteredRecipes.map((recipeData, index) => (
                            <CardRecipe
                                key={recipeData._id}
                                {...recipeData}
                                searchQuery={searchQuery}
                                index={index}
                            />
                        ))}
                    </SimpleGrid>
                    {options && options.page !== options.totalPages && (
                        <Flex justify='center' align='center' pt='4'>
                            <Button
                                variant='solid'
                                size='md'
                                color='black'
                                bg='lime.300'
                                onClick={addRecipes}
                                data-test-id='load-more-button'
                            >
                                Загрузить еще
                            </Button>
                        </Flex>
                    )}
                </>
            )}
        </>
    );
};
