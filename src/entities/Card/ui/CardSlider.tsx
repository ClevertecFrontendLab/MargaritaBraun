import { Box, Card, CardBody, CardFooter, Flex, Image, Text } from '@chakra-ui/react';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { dataForSliderProps } from '~/entities/Slider/consts/dataForSlider';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardSlider = ({
    imageUrl,
    category,
    isFavorites,
    isLiked,
    title,
    description,
}: dataForSliderProps) => {
    const categoryData = navigationData.filter((item) => item.label === category);
    const CategoryIcon = categoryData[0].icon;
    return (
        <Card variant='outline' w='100%' flexBasis='100%'>
            <Image
                objectFit='cover'
                w='100%'
                src={imageUrl}
                alt={title}
                borderTopRadius='8px'
                position='relative'
            />
            <Flex
                direction='column'
                justify='space-between'
                padding='16px 24px 20px 24px'
                gap='6'
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

                <CardFooter display='flex' justifyContent='space-between' p='0'>
                    <Flex
                        bg='lime.150'
                        borderRadius='md'
                        px='2'
                        py='0.5'
                        align-items='center'
                        gap='2'
                        position={{ base: 'absolute', md: 'static', xl: 'static' }}
                        zIndex='2'
                        top='2'
                        left='2'
                        color='black'
                    >
                        <CategoryIcon />
                        <Text fontSize='14px' fontWeight='500' lineHeight='20px'>
                            {category}
                        </Text>
                    </Flex>
                    <Flex>
                        {isFavorites && (
                            <Flex align='center' gap='2'>
                                <FavoritesIcon />

                                <Text
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {isFavorites}
                                </Text>
                            </Flex>
                        )}
                        {isLiked && (
                            <Flex align='center' gap='2' padding='0px 4px' justify='center'>
                                <LikeyIcon />

                                <Text
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='16px'
                                    color='lime.600'
                                >
                                    {isLiked}
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                </CardFooter>
            </Flex>
        </Card>
    );
};
