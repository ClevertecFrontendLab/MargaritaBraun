import { Flex } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';
import dataForDishes from '~/shared/consts/dataForDishes';

export const RecipesSections = () => (
    <Flex
        height='auto'
        overflowY='auto'
        justify='center'
        align='center'
        gap='16px 24px'
        wrap='wrap'
    >
        {dataForDishes.map((dataCard) => (
            <CardRecipe key={dataCard.title} {...dataCard}></CardRecipe>
        ))}
    </Flex>
);
