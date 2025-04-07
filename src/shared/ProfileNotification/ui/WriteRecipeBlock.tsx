import { Flex, Text } from '@chakra-ui/react';

import { WriteRecipeIcon } from '~/shared/Icons';

export const WriteRecipeBlock = () => {
    const pop = 'Записать рецепт';
    return (
        <Flex
            direction='column'
            justify='center'
            align='center'
            bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)'
            p='6'
        >
            <WriteRecipeIcon />
            <Text
                color='blackAlpha.700'
                fontSize='12px'
                fontWeight='400'
                lineHeight='16px'
                whiteSpace='nowrap'
            >
                {pop}
            </Text>
        </Flex>
    );
};
