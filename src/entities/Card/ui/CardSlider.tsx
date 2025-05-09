import { Box, Card, CardBody, CardFooter, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

// import Loading from '~/app/Loading/Loading';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';
import { useGetRecipeByIdQuery } from '~/store/apiQuery/marathonApi';
// import { useGetAllCategoriesWithSubcategoryQuery } from '~/store/apiQuery/marathonApi';
import { IMAGE_URL } from '~/store/consts/apiConsts';
import {
    Recipe,
    // SubCategory
} from '~/store/model/categoryType';

import { useCategoryAtSubCategID } from '../hooks/useCategoryAtSubCategID';

interface CardSliderProps extends Recipe {
    index: number;
}

export const CardSlider = ({
    _id,
    title,
    description,
    image,
    categoriesIds,
    bookmarks,
    likes,
    index,
}: CardSliderProps) => {
    const associatedCategories = useCategoryAtSubCategID(categoriesIds);
    const navigate = useNavigate();

    // const { data: allCategories, isLoading } = useGetAllCategoriesWithSubcategoryQuery();
    // const curriendIDSubCategory = categoriesIds[0];
    // const subCategoryObj: SubCategory | undefined = allCategories?.find(
    //     (item): item is SubCategory =>
    //         (item as SubCategory).rootCategoryId !== undefined &&
    //         item._id === curriendIDSubCategory,
    // );
    // const categoryObj = subCategoryObj
    //     ? allCategories?.find((item) => item._id === subCategoryObj.rootCategoryId)
    //     : undefined;

    // if (isLoading) {
    //     return <Loading />;
    // }

    return (
        <Card
            variant='outline'
            onClick={() => {
                if (
                    associatedCategories[0] &&
                    associatedCategories[0].category &&
                    associatedCategories[0].subCategories
                ) {
                    navigate(
                        `${associatedCategories[0].category}/${associatedCategories[0].subCategories[0].category}/${_id}`,
                    );
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useGetRecipeByIdQuery(_id);
                }
                // if (categoryObj && subCategoryObj) {
                //     navigate(`${categoryObj.category}/${subCategoryObj.category}/${_id}`);
                // }
            }}
            h='100%'
            position='relative'
            data-test-id={`carousel-card-${index}`}
        >
            <Flex overflow='hidden' borderTopRadius='8px' flex='1 1 47%'>
                <Image
                    objectFit='cover'
                    src={`${IMAGE_URL}${image}`}
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
