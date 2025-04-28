import { Flex, Hide } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <Hide below='lg'>
        <Flex
            as='nav'
            pt='6'
            direction='column'
            justify='space-between'
            position={['static', null, null, 'sticky']}
            top='10px'
            height={['100%', null, null, 'calc(100vh - 80px)']}
        >
            <NavMenu />
            <FooterMenu />
        </Flex>
    </Hide>
);
