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

import navigationData from '~/entities/NavMenu/const/navigationData';
import { dataForDishesProps } from '~/shared/consts/dataForDishes';
import { FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const CardRecipe = ({
    imageUrl,
    category,
    isFavorites,
    isLiked,
    title,
    description,
}: dataForDishesProps) => {
    const btnSave = 'Сохранить';
    const btnCooking = 'Готовить';
    const categoryData = navigationData.filter((item) => item.label === category);
    const CategoryIcon = categoryData[0].icon;
    return (
        <Card
            direction='row'
            variant='outline'
            // minH='128px'
            // flexBasis={{ base: '100%', sm: '100%', md: '100%', xl: '100%', '2xl': '49%' }}
        >
            <Flex flexBasis='55%' flexShrink='2' overflow='hidden' position='relative'>
                <Image
                    objectFit='cover'
                    w='100%'
                    src={imageUrl}
                    alt={title}
                    borderLeftRadius='8px'
                />
            </Flex>
            <Flex
                direction='column'
                justify='space-between'
                // padding='20px 24px'
                // padding={{ base: '8px 8px 4px 8px', sm: '8px 8px 4px 8px', td: '20px 24px', '2xl': '20px 24px' }}
                // gap='6'
                padding={['8px 8px 4px 8px', '20px 24px']}
                gap={{ base: '0', sm: '0', '2xl': '6' }}
                // flex='1 2 50%'
                // flex={{ base: '1 0 0', '2xl': '1 2 50%' }}
                flex='1 0 0'
            >
                <CardHeader display='flex' justifyContent='space-between' p='0'>
                    <Flex
                        bg='lime.50'
                        borderRadius='md'
                        px='2'
                        py='0.5'
                        align='center'
                        gap={['0', null, '2']}
                        // position={{ base: 'absolute', md: 'static', xl: 'static' }}
                        // position={['static', null, null, 'absolute']}
                        // position={['absolute', 'absolute', 'absolute', 'static']}
                        position={['absolute', 'absolute', 'static']}
                        zIndex='2'
                        top='2'
                        left='2'
                    >
                        <CategoryIcon
                            // boxSize={{ base: '14px' }}
                            w='30px'
                            h='30px'
                        />
                        <Text
                            fontSize='14px'
                            fontWeight='500'
                            lineHeight='20px'
                            whiteSpace='nowrap'
                        >
                            {category}
                        </Text>
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
                                {isFavorites}
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
                                {isLiked}
                            </Text>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody p='0' display='flex' gap='3' flexDirection='column' minH='68px'>
                    <Heading
                        fontSize={['16px', null, '20px']}
                        as='h3'
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
                    {/* size: xs */}
                    <Button
                        variant='solid'
                        bg='black'
                        color='white'
                        colorScheme='blackAlpha'
                        size={['xs', null, 'sm']}
                    >
                        {btnCooking}
                    </Button>
                </CardFooter>
            </Flex>
        </Card>
    );
};
