import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Hide, Show } from '@chakra-ui/react';

import { CardCookBlog } from '~/entities/Card';

import dataCookingBlogs from '../consts/dataCookingBlogs';

export const CookingBlogs = () => (
    <Flex
        as='section'
        direction='column'
        justify='space-between'
        gap={['3', null, '6']}
        bg='lime.300'
        borderRadius='16px'
        p={[3, 6]}
    >
        <Flex>
            <Flex justify='space-between' w='100%'>
                <Heading
                    as='h3'
                    fontSize={['24px', '36px', '36px']}
                    lineHeight={['32px', '40px', '40px']}
                    fontFamily='Inter'
                    fontWeight='500'
                >
                    Кулинарные блоги
                </Heading>
                <Hide below='md'>
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        color='black'
                        variant='solid'
                        bg='lime.300'
                    >
                        Все авторы
                    </Button>
                </Hide>
            </Flex>
        </Flex>
        <Flex gap='6' align='center' direction={['column', 'row']}>
            {dataCookingBlogs.map((dataForItem) => (
                <CardCookBlog key={dataForItem.nickName} {...dataForItem} />
            ))}
        </Flex>
        <Show below='md'>
            <Flex align='center' justify='center'>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='black'
                    variant='chost'
                    bg='lime.300'
                    size='md'
                >
                    Все авторы
                </Button>
            </Flex>
        </Show>
    </Flex>
);
