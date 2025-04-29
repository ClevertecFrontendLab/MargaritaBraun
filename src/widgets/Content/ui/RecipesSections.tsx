import { Button, Flex, SimpleGrid } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';
import { dataAllCategoryProps } from '~/shared/consts/dataAllCategory';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';

interface RecipesSectionsProps {
    dataAllCategory: dataAllCategoryProps[];
    searchQuery: string;
}

export const RecipesSections = ({ dataAllCategory, searchQuery }: RecipesSectionsProps) => (
    <Flex direction='column' pb='26' w='100%'>
        {dataAllCategory.length > 0 ? (
            <>
                <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} w='100%' gap='16px 24px'>
                    {dataAllCategory.map((dataCard, index) => (
                        <CardRecipe
                            key={dataCard.title}
                            {...dataCard}
                            searchQuery={searchQuery}
                            index={index}
                        ></CardRecipe>
                    ))}
                </SimpleGrid>
                <Flex justify='center' align='center' pt='4'>
                    <Button variant='solid' size='md' color='black' bg='lime.300'>
                        Загрузить еще
                    </Button>
                </Flex>
            </>
        ) : (
            <EmptyRecipesBlock message='По вашему запросу ничего не найдено' />
        )}
    </Flex>
);
