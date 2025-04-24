import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import { NavLink as ReachLink, useParams } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import { dataAllCategoryProps } from '~/shared/consts/dataAllCategory';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardRecipe = ({
    id,
    title,
    description,
    image,
    category,
    subcategory,
    bookmarks,
    likes,
}: dataAllCategoryProps) => {
    const { category: currentCategory, subcategory: currentSubCategory } = useParams<{
        category: string;
        subcategory: string;
    }>();
    const btnSave = 'Сохранить';
    const btnCooking = 'Готовить';

    const getThisCategoryObject = (currentCategory: string) => {
        const categoryData = navigationData.filter((item) => item.url === currentCategory);
        return categoryData[0];
    };

    const checkCategory = currentCategory ? currentCategory : category[0];
    const findSubcategory = currentSubCategory ? currentSubCategory : subcategory[0];

    const checkSubcategory = currentSubCategory ? currentSubCategory : findSubcategory;
    const recipePath = `/${checkCategory}/${checkSubcategory}/${id}`;

    return (
        <Card direction='row' variant='outline'>
            <Flex flex='1 1 55%'>
                <Image objectFit='cover' w='100%' src={image} alt={title} borderLeftRadius='8px' />
            </Flex>
            <Flex
                flex='1 1 45%'
                direction='column'
                justify='space-between'
                padding={['8px 8px 4px 8px', '8px 8px 4px 8px', '20px 24px']}
                gap={{ base: '0', sm: '0', '2xl': '6' }}
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
                    <Heading
                        fontSize={['16px', null, '20px']}
                        as='h3'
                        fontWeight='500'
                        noOfLines={[2, 2, 1]}
                        lineHeight={['5', null, '7']}
                    >
                        {title}
                    </Heading>
                    <Box display={{ base: 'none', lg: 'block' }}>
                        <Text noOfLines={3}>{description}</Text>
                    </Box>
                </CardBody>

                <CardFooter display='flex' gap='3' justify='flex-end' p='0'>
                    <Button variant='outline' display='flex' gap='2' size={['xs', null, 'sm']}>
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
                        size={['xs', null, 'sm']}
                        as={ReachLink}
                        to={recipePath}
                        onClick={() => console.log('id', id)}
                    >
                        {btnCooking}
                    </Button>
                </CardFooter>
            </Flex>
        </Card>
    );
};
