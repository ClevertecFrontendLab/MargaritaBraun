import { Flex } from '@chakra-ui/react';

import { CardRow } from '~/entities/Card/ui/CardRow';
import { Recipe } from '~/store/model/categoryType';

interface BlockRowRecipeProps {
    dataForCardRow: Recipe[];
}

export const BlockRowRecipe = ({ dataForCardRow }: BlockRowRecipeProps) => (
    <Flex direction='column' gap='3' flexBasis={['30%', '50%']} justify='space-around'>
        {dataForCardRow && dataForCardRow.map((item) => <CardRow key={item.title} {...item} />)}
    </Flex>
);
