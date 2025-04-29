import { Badge, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { dataAllCategoryProps } from '~/shared/consts/dataAllCategory';
import { ClocksIcon, FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardSinglePage: FC<dataAllCategoryProps> = ({
    // id,
    title,
    description,
    image,
    category,
    // subcategory,
    bookmarks,
    likes,
    time,
}) => {
    const getThisCategoryObject = (currentCategory: string) => {
        const categoryData = navigationData.filter((item) => item.url === currentCategory);
        return categoryData[0];
    };
    return (
        <>
            <HStack
                w='100%'
                gap={['4', null, null, '6']}
                flexDirection={['column', 'row', null, null]}
            >
                <Flex
                    // w='40%'
                    w={['100%', null, '40%']}
                    // h='100%'
                    h='auto'
                    position='relative'
                    overflow='hidden'
                    alignItems='center'
                    borderRadius='8px'
                >
                    <Image w='100%' h='auto' objectFit='cover' src={image} alt={title} />
                </Flex>
                <VStack w={['100%', null, '60%']} h='100%' justifyContent='space-between'>
                    <Flex display='flex' justifyContent='space-between' p='0' w='100%'>
                        <Flex
                            gap={['0', null, '2']}
                            position={['absolute', 'absolute', 'static']}
                            zIndex='2'
                            top='2'
                            left='2'
                        >
                            {category.map((item: string) => {
                                const currentCategory = getThisCategoryObject(item);
                                const CategoryIcon = currentCategory.icon;
                                return (
                                    <Flex
                                        key={item}
                                        align='center'
                                        bg='lime.50'
                                        borderRadius='md'
                                        gap={['0', null, '2']}
                                        p='0.5px 3.5px'
                                    >
                                        <CategoryIcon w='30px' h='30px' />
                                        <Text
                                            fontFamily='Inter'
                                            fontSize='14px'
                                            fontWeight='500'
                                            lineHeight='20px'
                                            whiteSpace='nowrap'
                                        >
                                            {currentCategory.label}
                                        </Text>
                                    </Flex>
                                );
                            })}
                        </Flex>
                        <Flex>
                            <Flex align='center' gap='2'>
                                <FavoritesIcon />

                                <Text
                                    fontFamily='Inter'
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {bookmarks}
                                </Text>
                            </Flex>
                            <Flex align='center' gap='2' padding='0px 4px' justify='center'>
                                <LikeyIcon />

                                <Text
                                    fontFamily='Inter'
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {likes}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <VStack alignItems='flex-start'>
                        <Heading
                            as='h1'
                            fontFamily='Inter'
                            fontSize={['24px', null, null, null, '48px', null]}
                            fontStyle='normal'
                            fontWeight='700'
                            lineHeight={['32px', null, null, null, '48px', null]}
                        >
                            {title}
                        </Heading>
                        <Text
                            as='h3'
                            fontFamily='Inter'
                            fontSize='14px'
                            fontStyle='normal'
                            fontWeight='400'
                            lineHeight='20px'
                        >
                            {description}
                        </Text>
                    </VStack>
                    <HStack
                        alignItems='flex-end'
                        justifyContent='space-between'
                        w='100%'
                        flexWrap='wrap'
                    >
                        <Badge
                            display='flex'
                            gap='2'
                            justifyContent='space-around'
                            alignSelf='center'
                            justifySelf='flex-start'
                            alignItems='center'
                            fontFamily='Inter'
                            bg='blackAlpha.100'
                        >
                            <ClocksIcon />
                            <Text fontSize='sm' fontFamily='Inter' fontWeight='400' lineHeight='5'>
                                {time}
                            </Text>
                        </Badge>
                        <Flex gap={['4']}>
                            <Button
                                leftIcon={<FavoritesIcon />}
                                colorScheme='black'
                                variant='outline'
                                size={['xs', null, null, 'sm', 'lg']}
                            >
                                Оценить рецепт
                            </Button>
                            <Button
                                leftIcon={<LikeyIcon />}
                                variant='solid'
                                size={['xs', null, null, 'sm', 'lg']}
                            >
                                Сохранить в закладки
                            </Button>
                        </Flex>
                    </HStack>
                </VStack>
            </HStack>
        </>
    );
};
