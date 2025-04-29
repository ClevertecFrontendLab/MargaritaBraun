import { Flex, Text } from '@chakra-ui/react';

import { BsPeopleIcon, FavoritesIcon, LikeyIcon } from '~/shared/Icons';

export const ProfileNotification = () => {
    const isFavorites = 185;
    const isPeople = 589;
    const isLiked = 587;
    return (
        <>
            <Flex align='center' gap={[1.5, 2]} px={[3, 4]} py={[0, 1.5]}>
                <FavoritesIcon />
                <Text textStyle='profileNotific'>{isFavorites}</Text>
            </Flex>
            <Flex align='center' gap={[1.5, 2]} px={[3, 4]} py={[0, 1.5]}>
                <BsPeopleIcon />

                <Text textStyle='profileNotific'>{isPeople}</Text>
            </Flex>
            <Flex align='center' gap={[1.5, 2]} px={[3, 4]} py={[0, 1.5]}>
                <LikeyIcon />

                <Text textStyle='profileNotific'>{isLiked}</Text>
            </Flex>
        </>
    );
};
