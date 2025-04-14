import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Hide, Show, SimpleGrid } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router';

import { CardRecipe } from '~/entities/Card';

import dataHomeJuiciest from './dataHomeJuiciest.ts';
export const HomeJuiciest = () => (
    <Flex direction='column' gap={['3', '6']} as='section'>
        <Flex justify='space-between'>
            <Heading
                as='h3'
                fontSize={['24px', '36px', '48px']}
                lineHeight={['48px', '40px', '32px']}
                fontWeight='500'
            >
                Самое сочное
            </Heading>
            <Hide below='md'>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='teal'
                    variant='solid'
                    bg='lime.400'
                    color='black'
                    data-test-id='juiciest-link'
                    as={ReachLink}
                    to='/juiciest'
                    size={[null, null, 'md', 'lg']}
                >
                    Вся подборка
                </Button>
            </Hide>
            <Box display='none'>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='teal'
                    variant='solid'
                    bg='lime.400'
                    color='black'
                    size='md'
                    data-test-id='juiciest-link-mobile'
                    as={ReachLink}
                    to='/juiciest'
                >
                    Вся подборка
                </Button>
            </Box>
        </Flex>
        <SimpleGrid columns={[1, 1, 2, 1, 1, 2]} w='100%' spacing={['12px', '16px', '24px']}>
            {dataHomeJuiciest.map((dataCard) => (
                <CardRecipe key={dataCard.title} {...dataCard}></CardRecipe>
            ))}
        </SimpleGrid>
        <Show below='md'>
            <Flex align='center' justify='center'>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='teal'
                    variant='solid'
                    bg='lime.400'
                    color='black'
                    size='md'
                    data-test-id='juiciest-link-mobile'
                    as={ReachLink}
                    to='/juiciest'
                >
                    Вся подборка
                </Button>
            </Flex>
        </Show>
    </Flex>
);
