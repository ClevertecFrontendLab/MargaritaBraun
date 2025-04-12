import { Flex, Heading, Text } from '@chakra-ui/react';

import { BlockCardNoFoto } from './BlockCardNoFoto';
import { BlockRowRecipe } from './BlockRowRecipe';

export const KitchenSection = () => {
    const title = 'Веганская кухня';
    const description =
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';
    return (
        <>
            <Flex direction='column' pt={['16px', null, '24px']}>
                <Flex
                    direction={{ sm: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}
                    // pt={{ base: '16px', md: '24px' }}
                    gap={['3', null, 'auto']}
                    justify='space-between'
                >
                    <Heading
                        as='h3'
                        fontFamily='Inter'
                        fontWeight='500'
                        // whiteSpace='nowrap'
                        fontSize={['20px', '24px', '24px', '30px', '36px', '48px']}
                        // fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                        lineHeight={['30px', '32px', '32px', '38px', '40px', '48px']}
                        // lineHeight={{ base: '32px', md: '32px', lg: '48px' }}
                    >
                        {title}
                    </Heading>
                    <Text
                        color='blackAlpha.700'
                        fontFamily='Inter'
                        // fontSize={{ base: '14px', md: '14px', lg: '16px' }}
                        // lineHeight={{ base: '20px', md: '24px', lg: '24px' }}
                        fontSize={['14px', null, null, null, '16px']}
                        lineHeight={['20px', null, null, null, '24px']}
                        maxW={{ md: '100%', xl: '578px', '2xl': '668px' }}
                    >
                        {description}
                    </Text>
                </Flex>
                <Flex
                    gap={['4', '6']}
                    justify='space-between'
                    direction={{ base: 'column', md: 'row' }}
                    pt={{ base: '12px', md: '24px' }}
                >
                    <BlockCardNoFoto />
                    <BlockRowRecipe />
                </Flex>
            </Flex>
        </>
    );
};
