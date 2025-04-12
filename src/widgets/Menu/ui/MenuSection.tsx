import { Flex, Hide } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <Hide below='lg'>
        <Flex
            flexDirection='column'
            as='nav'
            pt='6'
            // height='calc(100vh - 80px)'
            // height='calc(100% - 80px)'
            height='100%'
            bg='#f9a8d4'
            flex='1 1 auto'
            justify='space-between'
        >
            <NavMenu />
            <FooterMenu />
        </Flex>
    </Hide>
);
