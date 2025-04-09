import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { CardRecipe } from '~/entities/Card';

import dataHomeJuiciest from './dataHomeJuiciest.ts';

export const HomeJuiciest = () => (
    <Flex direction='column' h='100%' justify='center' align='center' gap='6' as='section'>
        <Flex justify='space-between' w='100%'>
            <Heading
                as='h3'
                fontSize={['24px', '36px', '48px']}
                lineHeight={['48px', '40px', '32px']}
            >
                Самое сочное
            </Heading>
            <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal'
                variant='solid'
                bg='lime.400'
                data-test-id='juiciest-link juiciest-link-mobile'
                color='black'
            >
                Вся подборка
            </Button>
        </Flex>
        <Flex wrap='wrap' gap='6' justify='space-between'>
            {dataHomeJuiciest.map((dataCard) => (
                <CardRecipe key={dataCard.title} {...dataCard}></CardRecipe>
            ))}
        </Flex>
    </Flex>
);
