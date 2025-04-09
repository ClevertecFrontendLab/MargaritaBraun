import { GridItem } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <GridItem
        pt='6'
        bg='#f9a8d4'
        area='nav-menu'
        colSpan={1}
        w='256px'
        as='section'
        display={['none', 'flex']}
        flexDirection='column'
        height='calc(100svh - 80px)'
    >
        <NavMenu />
        <FooterMenu />
    </GridItem>
);
