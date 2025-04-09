import { Flex, Heading } from '@chakra-ui/react';

import { CardSlider } from '~/entities/Card';

import { dataForSlider } from '../consts/dataForSlider';

export const SliderNewRecipes = () => (
    <Flex
        as='section'
        direction='column'
        justify='space-between'
        gap='6'
        overflow='hidden'
        pt={[0, 5]}
    >
        <Heading as='h3' fontSize={['24px', '36px', '48px']} lineHeight={['48px', '40px', '32px']}>
            Новые рецепты
        </Heading>
        <Flex gap='6' align='center' w='100%' overflow='hidden'>
            {dataForSlider.map((dataForSlide) => (
                <CardSlider key={dataForSlide.title} {...dataForSlide} />
            ))}
        </Flex>
    </Flex>
);
