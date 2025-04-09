import { Flex, Heading, Text } from '@chakra-ui/react';

import { BlockCardNoFoto } from './BlockCardNoFoto';
import { BlockRowRecipe } from './BlockRowRecipe';

export const KitchenSection = () => {
    const title = 'Веганская кухня';
    const description =
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';
    return (
        <>
            <Flex direction='column'>
                <Flex>
                    <Heading
                        as='h3'
                        fontSize={['24px', '36px', '48px']}
                        lineHeight={['48px', '40px', '32px']}
                    >
                        {title}
                    </Heading>
                    <Text
                        color='blackAlpha.700'
                        fontSize={['14px', '16px']}
                        lineHeight={['20px', '24px']}
                    >
                        {' '}
                        {description}{' '}
                    </Text>
                </Flex>
                <Flex gap={['4', '6']} justify='space-between'>
                    <BlockCardNoFoto />
                    <BlockRowRecipe />
                </Flex>
            </Flex>
        </>
    );
};
