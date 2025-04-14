import { Flex } from '@chakra-ui/react';

import { CardRow, CardRowProps } from '~/entities/Card/ui/CardRow';

interface BlockRowRecipeProps {
    dataForCardRow: CardRowProps[];
}
export const BlockRowRecipe = ({ dataForCardRow }: BlockRowRecipeProps) => (
    <Flex direction='column' gap='3' flexBasis={['30%', '50%']} justify='space-around'>
        {dataForCardRow &&
            dataForCardRow.map((item) => <CardRow key={item.recipeTitle} {...item} />)}
    </Flex>
);
