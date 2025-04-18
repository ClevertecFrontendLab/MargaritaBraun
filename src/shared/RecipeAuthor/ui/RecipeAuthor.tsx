import { Avatar, Button, Flex, Text, VStack } from '@chakra-ui/react';

import { BsPeopleIcon } from '~/shared/Icons';

export const RecipeAuthor = () => (
    <>
        <Flex
            bg='lime.300'
            borderRadius='8px'
            w='100%'
            p={['12px', null, null, null, '24px']}
            gap={['16px']}
        >
            <Avatar
                as='div'
                size={['xl', 'xl']}
                name='Ryan Florence'
                src='https://bit.ly/ryan-florence'
            />
            <Flex w='100%' direction='column' gap='4'>
                <VStack gap={[0, 1, 1, 1, 1, 1]} position='relative' alignItems='stretch'>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize={['18px', null, null, '24px']}
                        fontStyle='normal'
                        fontWeight={['600', null, '700']}
                        lineHeight={['28px', null, null, '32px']}
                    >
                        Сергей Разумов
                    </Text>

                    <Text
                        position='absolute'
                        top={['-8px', null, '5px']}
                        right='10px'
                        textStyle='textCardDescription'
                    >
                        Автор рецепта
                    </Text>
                    <Text textStyle='textCardDescription' color='blackAlpha.700'>
                        @serge25
                    </Text>
                </VStack>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Button
                        leftIcon={<BsPeopleIcon />}
                        colorScheme='black'
                        bg='black'
                        color='white'
                        variant='solid'
                        size='xs'
                    >
                        Подписаться
                    </Button>
                    <Flex gap='1.5' py='4px' alignItems='center' justifyContent='space-between'>
                        <BsPeopleIcon />
                        <Text
                            fontFamily='Inter'
                            fontSize='12px'
                            fontStyle='normal'
                            fontWeight='600'
                            lineHeight='16px'
                            color='lime.600'
                        >
                            125
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </>
);
