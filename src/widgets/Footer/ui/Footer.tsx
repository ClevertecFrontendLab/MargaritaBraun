import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Flex, GridItem, IconButton, Text } from '@chakra-ui/react';

import avatarFoto from '~/assets/Breakfast.png';
import { HomeIcon, WriteRecipeIcon } from '~/shared/Icons';
export const Footer = () => {
    const profileName = 'Екатерина Константинопольская';
    return (
        <GridItem
            area='footer'
            bg='lime.50'
            display={{ base: 'flex', lg: 'none' }}
            as='footer'
            justifyContent='space-around'
            position='absolute'
            bottom='0'
            zIndex='3'
            data-test-id='footer'
            w='100%'
            colSpan={5}
        >
            <Flex
                direction='column'
                justify='space-between'
                align='center'
                bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)'
                // px='2.5'
                py='2.5'
                gap='1'
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
            <Flex direction='column' justify='space-between' align='center' py='2.5'>
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
            <Flex direction='column' justify='space-between' align='center' py='2.5'>
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
            <Flex direction='column' justify='space-between' align='center' py='2.5' gap='1'>
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
        </GridItem>
    );
};
