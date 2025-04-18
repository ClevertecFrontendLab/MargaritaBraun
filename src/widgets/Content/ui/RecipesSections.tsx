import { Button, Flex, SimpleGrid } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';
import { dataAllCategoryProps } from '~/shared/consts/dataAllCategory';

interface RecipesSectionsProps {
    dataAllCategory: dataAllCategoryProps[];
}

export const RecipesSections = ({ dataAllCategory }: RecipesSectionsProps) => (
    <Flex direction='column' pb='26' w='100%'>
        <SimpleGrid columns={[1, 1, 2, 1, 1, 2]} w='100%' gap='16px 24px'>
            {dataAllCategory.map((dataCard) => (
                <CardRecipe key={dataCard.title} {...dataCard}></CardRecipe>
            ))}
        </SimpleGrid>
        <Flex justify='center' align='center' pt='4'>
            <Button variant='solid' size='md' color='black' bg='lime.300'>
                Загрузить еще
            </Button>
        </Flex>
    </Flex>
);
