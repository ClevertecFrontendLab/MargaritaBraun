import { Flex, GridItem, Hide } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <Hide below='lg'>
        <GridItem
            as='nav'
            area='nav'
            pt='6'
            colStart={1}
            colEnd={2}
            rowStart={2}
            rowEnd={4}
            display='flex'
            height='100%'
        >
            <Flex
                direction='column'
                justify='space-between'
                h={[null, null, null, null, 'calc(99.9svh - 24px - 100px)']}
                position='sticky'
                top='10px'
                height='calc(100vh - 80px)'
            >
                <NavMenu />
                <FooterMenu />
            </Flex>
        </GridItem>
    </Hide>
);
