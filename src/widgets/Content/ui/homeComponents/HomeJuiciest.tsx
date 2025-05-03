import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Show, SimpleGrid } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router';

import { CardRecipe } from '~/entities/Card';
import { useGetRecipesForJuiciestQuery } from '~/store/apiQuery/marathonApi';
import { Recipe } from '~/store/model/categoryType';

export const HomeJuiciest = () => {
    const { data: allResipesSortedLikes } = useGetRecipesForJuiciestQuery({
        page: 1,
        sortBy: 'likes',
        sortOrder: 'desc',
    });

    const sortedRecipes = allResipesSortedLikes ? allResipesSortedLikes.data : [];

    return (
        <Flex direction='column' gap={['3', '6']} as='section'>
            <Flex justify='space-between'>
                <Heading
                    as='h3'
                    fontSize={['24px', null, '36px', '48px']}
                    lineHeight={['32px', null, '40px', '48px']}
                    fontWeight='500'
                >
                    Самое сочное
                </Heading>
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
                        to='/the-juiciest'
                    >
                        Вся подборка
                    </Button>
                </Box>
            </Flex>
            <SimpleGrid columns={[1, 1, 2, 2, 1, 2]} w='100%' spacing={['12px', '16px', '24px']}>
                {sortedRecipes.map((dataCard: Recipe, index: number) => (
                    <CardRecipe key={dataCard.title} {...dataCard} index={index}></CardRecipe>
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
                        to='/the-juiciest'
                    >
                        Вся подборка
                    </Button>
                </Flex>
            </Show>
        </Flex>
    );
};
