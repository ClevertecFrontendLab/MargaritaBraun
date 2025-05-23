import { Flex, IconButton, Text } from '@chakra-ui/react';

import { WriteRecipeIcon } from '~/shared/Icons';

export const WriteRecipeBlock = () => {
    const pop = 'Записать рецепт';
    return (
        <Flex
            direction='column'
            bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)'
            p='10'
            align='center'
            justify='center'
        >
            <IconButton
                size='ld'
                isRound={true}
                variant='ghost'
                aria-label='Write Recipe'
                icon={<WriteRecipeIcon />}
                color='white'
                bg='black'
            />
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
