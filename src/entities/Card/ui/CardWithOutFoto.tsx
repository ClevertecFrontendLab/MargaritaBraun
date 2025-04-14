import { Card, CardBody, CardFooter, Flex, Text } from '@chakra-ui/react';

import { blockCardNoFotoProps } from '~/entities/KitchenSection/consts/sectionsType';
import navigationData from '~/entities/NavMenu/const/navigationData';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardWithOutFoto = ({
    category,
    isFavorites,
    isLiked,
    title,
    description,
}: blockCardNoFotoProps) => {
    const categoryData = navigationData.filter((item) => item.label === category);
    const CategoryIcon = categoryData[0].icon;
    return (
        <Card variant='outline' w='100%' flexBasis={[null, null, '40%', '30%', '22%']}>
            <Flex
                direction='column'
                justify='space-between'
                padding={['12px', '12px', '16px', '16px', '16px 24px 20px 24px']}
                gap='6'
                flex='1 1 43%'
            >
                <CardBody p='0' display='flex' gap='2' flexDirection='column'>
                    <Text as='h3' noOfLines={[2, 2, 1]} textStyle='titleCard'>
                        {title}
                    </Text>
                    <Text
                        noOfLines={3}
                        fontWeight='400'
                        lineHeight={['20px', null, null, '24px']}
                        fontSize={['14px', null, null, '16px']}
                        fontFamily='Inter'
                    >
                        {description}
                    </Text>
                </CardBody>

                <CardFooter display='flex' justifyContent='space-between' p='0' alignItems='center'>
                    <Flex
                        bg='lime.50'
                        borderRadius='md'
                        px='2'
                        py={['0', null, null, '0.5']}
                        align-items='center'
                        gap='2'
                        zIndex='2'
                    >
                        <Flex
                            boxSize={['16px', null, null, '24px']}
                            justify='center'
                            align='center'
                        >
                            <CategoryIcon
                                boxSize={['16px', '16px', '16px', '24px']}
                                objectFit='contain'
                            />
                        </Flex>
                        <Text
                            fontSize='14px'
                            fontWeight='500'
                            lineHeight='20px'
                            whiteSpace='nowrap'
                        >
                            {category}
                        </Text>
                    </Flex>
                    <Flex gap='2'>
                        {isFavorites && (
                            <Flex align='center' gap='2'>
                                <FavoritesIcon size='40px' />
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
