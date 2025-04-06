import { GridItem } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { Block } from './Block';

export const MenuSection = () => {
    const pop = 'MenuSection';
    return (
        <GridItem
            pl='2'
            bg='#f9a8d4'
            area='nav-menu'
            colSpan={3}
            as='section'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            height='100%'
        >
            <p>leys {pop}</p>
            <NavMenu />
            <Block />
        </GridItem>
    );
};
