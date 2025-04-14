import { Flex, Heading, HStack } from '@chakra-ui/react';

import { CardSlider } from '~/entities/Card';

import { dataForSlider } from '../consts/dataForSlider';

export const SliderNewRecipes = () => (
    <Flex as='section' direction='column' gap='6' pt={[0, 5]}>
        <Heading
            as='h3'
            fontSize={['24px', '36px', '48px']}
            lineHeight={['48px', '40px', '32px']}
            fontWeight='500'
        >
            Новые рецепты
        </Heading>
        <Flex h={['220px', null, null, '402px', '402px', '414px']} pos='relative' overflow='hidden'>
            <HStack pos='absolute' bottom='0' left='0' spacing={['3', null, '6']}>
                {dataForSlider.map((dataForSlide) => (
                    <CardSlider key={dataForSlide.title} {...dataForSlide} />
                ))}
            </HStack>
        </Flex>
    </Flex>
);
