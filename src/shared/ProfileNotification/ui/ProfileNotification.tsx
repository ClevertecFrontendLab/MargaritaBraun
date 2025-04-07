import { Flex, Text } from '@chakra-ui/react';

import { BsPeopleIcon, FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const ProfileNotification = () => {
    const isFavorites = 185;
    const isPeople = 589;
    const isLiked = 587;
    return (
        <Flex direction='column' justify='flex-end' padding='16px 56px 16px 16px' gap='6'>
            <Flex align='center' gap='2' px='4'>
                <FavoritesIcon />

                <Text fontSize='12px' fontWeight='600' lineHeight='16px' color='lime.600'>
                    {isFavorites}
                </Text>
            </Flex>
            <Flex align='center' gap='2' px='4'>
                <BsPeopleIcon />

                <Text fontSize='12px' fontWeight='600' lineHeight='16px' color='lime.600'>
                    {isPeople}
                </Text>
            </Flex>
            <Flex align='center' gap='2' px='4'>
                <LikeyIcon />

                <Text fontSize='12px' fontWeight='600' lineHeight='16px' color='lime.600'>
                    {isLiked}
                </Text>
            </Flex>
        </Flex>
    );
};
