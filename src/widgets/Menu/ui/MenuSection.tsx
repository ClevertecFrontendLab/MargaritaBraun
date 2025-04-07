import { GridItem } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { Block } from './Block';

export const MenuSection = () => (
    <GridItem
        pl='2'
        bg='#f9a8d4'
        area='nav-menu'
        colSpan={3}
        as='section'
        display='flex'
        flexDirection='column'
        height='calc(100svh - 80px)'
    >
        <NavMenu />
        <Block />
    </GridItem>
);
