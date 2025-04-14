import { GridItem, Hide } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <Hide below='lg'>
        <GridItem as='nav' area='nav' pt='6' colStart={1} colEnd={2} rowStart={2} rowEnd={4}>
            <NavMenu />
            <FooterMenu />
        </GridItem>
    </Hide>
);
