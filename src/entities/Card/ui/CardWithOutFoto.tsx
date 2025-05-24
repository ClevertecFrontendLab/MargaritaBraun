import { Card, CardBody, CardFooter, Flex, Image, Text } from '@chakra-ui/react';

import { IMAGE_URL } from '~/query/constants/apiConsts';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

import { useCategoryAtSubCategID } from '../hooks/useCategoryAtSubCategID';

export interface CardWithOutFotoProps {
    title: string;
    description: string;
    likes: number;
    bookmarks: number;
    categoriesIds: string[];
}

export const CardWithOutFoto = ({
    title,
    description,
    likes,
    categoriesIds,
    bookmarks,
}: CardWithOutFotoProps) => {
    const associatedCategories = useCategoryAtSubCategID(categoriesIds);
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
                        direction='column'
                    >
                        {associatedCategories &&
                            associatedCategories.map((currentCategory) => (
                                <Flex
                                    key={currentCategory._id}
                                    align='center'
                                    bg='lime.50'
                                    borderRadius='md'
                                    gap={['0', null, '2']}
                                    p='0.5px 3.5px'
                                >
                                    <Image
                                        src={`${IMAGE_URL}${currentCategory?.icon}`}
                                        boxSize={['14px', null, null, '16px']}
                                    />
                                    <Text
                                        fontSize='14px'
                                        fontWeight='500'
                                        lineHeight='20px'
                                        whiteSpace='nowrap'
                                    >
                                        {currentCategory.title}
                                    </Text>
                                </Flex>
                            ))}
                    </Flex>
                    <Flex gap='2'>
                        {bookmarks && (
                            <Flex align='center' gap='2'>
                                <FavoritesIcon size='40px' />
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
