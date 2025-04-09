import { Flex } from '@chakra-ui/react';

import { CardRow, CardRowProps } from '~/entities/Card/ui/CardRow';

export const BlockRowRecipe = () => {
    const data: CardRowProps[] = [
        {
            category: 'Вторые блюда',
            recipeTitle: 'Стейк для вегетарианцев',
        },
        {
            category: 'Вторые блюда',
            recipeTitle: 'Котлеты из гречки и фасоли',
        },
        {
            category: 'Первые блюда',
            recipeTitle: 'Сырный суп с лапшой и брокколи',
        },
    ];
    return (
        <Flex direction='column' gap='3' flexBasis={['30%', '50%']}>
            {data && data.map((item) => <CardRow key={item.recipeTitle} {...item} />)}
        </Flex>
    );
};
