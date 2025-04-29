import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';

import avatarFoto from '~/assets/Breakfast.png';
import { HomeIcon, WriteRecipeIcon } from '~/shared/Icons';
export const Footer = () => {
    const profileName = 'Екатерина Константинопольская';
    return (
        <Flex
            bg='lime.50'
            display={['flex', null, null, 'none']}
            as='footer'
            justifyContent='space-around'
            zIndex='docked'
            data-test-id='footer'
            position='fixed'
            bottom='0'
            left='0'
            right='0'
        >
            <Flex
                direction='column'
                justify='space-between'
                align='center'
                bg='radial-gradient(23% 40% at 48.89% 37.5%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%),#FFFFD3'
                py='2.5'
                gap='1'
                w='100%'
            >
                <IconButton
                    size='md'
                    isRound={true}
                    aria-label='Home link'
                    icon={<HomeIcon />}
                    color='white'
                    bg='black'
                />
                <Text fontSize='12px' fontFamily='Inter' lineHeight='16px' fontWeight='500'>
                    Главная
                </Text>
            </Flex>
            <Flex direction='column' justify='space-between' align='center' py='2.5' w='100%'>
                <IconButton
                    size='lg'
                    isRound={true}
                    variant='ghost'
                    aria-label='Search link'
                    icon={<SearchIcon />}
                />
                <Text
                    fontSize='12px'
                    fontFamily='Inter'
                    lineHeight='16px'
                    color='blackAlpha.700'
                    fontWeight='400'
                >
                    Поиск
                </Text>
            </Flex>
            <Flex direction='column' justify='space-between' align='center' py='2.5' w='100%'>
                <IconButton
                    size='lg'
                    isRound={true}
                    variant='ghost'
                    aria-label='Search link'
                    icon={<WriteRecipeIcon />}
                />
                <Text
                    fontSize='12px'
                    fontFamily='Inter'
                    lineHeight='16px'
                    color='blackAlpha.700'
                    fontWeight='400'
                >
                    Записать
                </Text>
            </Flex>
            <Flex
                direction='column'
                justify='space-between'
                align='center'
                py='2.5'
                gap='1'
                w='100%'
            >
                <Avatar size='md' name={profileName} src={avatarFoto} />
                <Text
                    fontSize='12px'
                    fontFamily='Inter'
                    lineHeight='16px'
                    color='blackAlpha.700'
                    fontWeight='400'
                >
                    Мой профиль
                </Text>
            </Flex>
        </Flex>
    );
};
