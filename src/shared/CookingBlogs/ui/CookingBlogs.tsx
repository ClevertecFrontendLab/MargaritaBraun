import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { CardCookBlog } from '~/entities/Card';

import dataCookingBlogs from '../consts/dataCookingBlogs';

export const CookingBlogs = () => (
    <Flex
        as='section'
        direction='column'
        justify='space-between'
        gap='6'
        overflow='hidden'
        pt={[0, 5]}
        bg='lime.300'
        borderRadius='4'
    >
        <Flex>
            <Flex justify='space-between' w='100%'>
                <Heading
                    as='h3'
                    fontSize={['24px', '36px', '48px']}
                    lineHeight={['48px', '40px', '32px']}
                >
                    Кулинарные блоги
                </Heading>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    color='black'
                    variant='solid'
                    bg='lime.300'
                >
                    Все авторы
                </Button>
            </Flex>
        </Flex>
        <Flex gap='6' align='center' w='100%' overflow='hidden'>
            {dataCookingBlogs.map((dataForItem) => (
                <CardCookBlog key={dataForItem.nickName} {...dataForItem} />
            ))}
        </Flex>
    </Flex>
);
