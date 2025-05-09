import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Highlight,
    Image,
    Text,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';
import { IMAGE_URL } from '~/store/consts/apiConsts';
import { Recipe } from '~/store/model/categoryType';

import { useCategoryAtSubCategID } from '../hooks/useCategoryAtSubCategID';

interface CardRecipeProps extends Recipe {
    searchQuery?: string;
    index: number;
}

export const CardRecipe = ({
    _id,
    title,
    description,
    image,
    categoriesIds,
    bookmarks,
    likes,
    searchQuery,
    index,
}: CardRecipeProps) => {
    const btnSave = 'Сохранить';
    const btnCooking = 'Готовить';
    const associatedCategories = useCategoryAtSubCategID(categoriesIds);

    return (
        <Card
            direction='row'
            variant='outline'
            data-test-id={`food-card-${index}`}
            h={['128px', null, null, '244px']}
            w='100%'
        >
            <Flex w='50%'>
                <Image
                    objectFit='cover'
                    w='100%'
                    h='auto'
                    src={`${IMAGE_URL}${image}`}
                    alt={title}
                    borderLeftRadius='8px'
                />
            </Flex>
            <Flex
                w='45%'
                direction='column'
                justify='space-between'
                padding={['8px 8px 4px 8px', null, null, '20px 24px']}
                gap={['0', null, null, null, null, '6']}
            >
                <CardHeader display='flex' justifyContent='space-between' p='0'>
                    <Flex
                        gap={['0.5', null, '2']}
                        position={['absolute', null, null, 'static']}
                        zIndex='2'
                        top='2'
                        left='2'
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
                    <Flex>
                        <Flex align='center' gap='2'>
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
                    </Flex>
                </CardHeader>
                <CardBody p='0' display='flex' gap='3' flexDirection='column'>
                    <Box
                        as='h3'
                        fontSize={['16px', null, '20px']}
                        fontWeight='500'
                        noOfLines={[2, 2, 1]}
                        lineHeight={['5', null, '7']}
                    >
                        {searchQuery ? (
                            <Highlight
                                query={searchQuery}
                                styles={{
                                    color: 'lime.600',
                                }}
                            >
                                {title}
                            </Highlight>
                        ) : (
                            title
                        )}
                    </Box>
                    <Box display={{ base: 'none', lg: 'block' }}>
                        <Text noOfLines={3}>{description}</Text>
                    </Box>
                </CardBody>

                <CardFooter display='flex' gap='3' justify='flex-end' p='0'>
                    <Button
                        variant='outline'
                        display='flex'
                        gap='2'
                        size={['xs', null, null, 'sm']}
                    >
                        <FavoritesIcon />
                        <Text as='span' display={{ base: 'none', md: 'block' }}>
                            {btnSave}
                        </Text>
                    </Button>
                    <Button
                        variant='solid'
                        bg='black'
                        color='white'
                        colorScheme='blackAlpha'
                        size={['xs', null, null, 'sm']}
                        as={ReachLink}
                        to={`${associatedCategories[0]?.category}/${associatedCategories[0]?.subCategories[0]?.category}/${_id}`}
                        data-test-id={`card-link-${index}`}
                        fontSize='14px'
                    >
                        {btnCooking}
                    </Button>
                </CardFooter>
            </Flex>
        </Card>
    );
};
