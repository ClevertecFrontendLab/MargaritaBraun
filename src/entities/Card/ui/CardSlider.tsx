import { Box, Card, CardBody, CardFooter, Flex, Image, Text } from '@chakra-ui/react';
import { SyntheticEvent } from 'react';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { dataAllCategoryProps } from '~/shared/consts/dataAllCategory';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardSlider = ({
    id,
    title,
    description,
    image,
    category,
    subcategory,
    bookmarks,
    likes,
}: dataAllCategoryProps) => {
    const getThisCategoryObject = (currentCategory: string) => {
        const categoryData = navigationData.filter((item) => item.url === currentCategory);
        return categoryData[0];
    };
    return (
        <Card
            variant='outline'
            onClick={(event: SyntheticEvent) => {
                console.log(`click ${subcategory} ${id}`, event.target);
            }}
            h='100%'
            position='relative'
        >
            <Flex overflow='hidden' borderTopRadius='8px' flex='1 1 47%'>
                <Image
                    objectFit='cover'
                    src={image}
                    alt={title}
                    w='100%'
                    h='auto'
                    borderTopRadius='8px'
                    position='relative'
                />
            </Flex>
            <Flex
                direction='column'
                justify='space-between'
                p={{ base: '8px 8px 4px 8px', lg: '16px 24px 20px 24px' }}
                gap={{ base: '2', lg: '6' }}
                flex='1 1 43%'
            >
                <CardBody p='0' display='flex' gap='2' flexDirection='column'>
                    <Text as='h3' noOfLines={[2, 2, 1]} textStyle='titleCard' lineHeight='28px'>
                        {title}
                    </Text>
                    <Box display={{ base: 'none', md: 'block' }} lineHeight='20px'>
                        <Text noOfLines={3}>{description}</Text>
                    </Box>
                </CardBody>

                <CardFooter
                    display='flex'
                    justifyContent='space-between'
                    p='0'
                    alignItems='flex-end'
                >
                    <Flex
                        direction='column'
                        gap={[1]}
                        position={['absolute', null, null, 'static']}
                        top='5px'
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
                    <Flex gap={{ base: '2' }}>
                        {bookmarks && (
                            <Flex align='center' gap={{ base: '1.5', md: '2' }}>
                                <FavoritesIcon />

                                <Text
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {bookmarks}
                                </Text>
                            </Flex>
                        )}
                        {likes && (
                            <Flex align='center' gap='2' padding='0px 4px' justify='center'>
                                <LikeyIcon />

                                <Text
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {likes}
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                </CardFooter>
            </Flex>
        </Card>
    );
};
