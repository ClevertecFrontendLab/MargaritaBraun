import { Flex } from '@chakra-ui/react';

import { LogoNavLink } from '~/shared/NavLinks';

export const HeaderWithoutAutorization = () => (
    <Flex as='header' h={['64px', null, null, null, '80px']} w='100%'>
        <Flex
            h={['64px', null, null, null, '80px']}
            data-test-id='header'
            w='100%'
            position={['fixed', null, null, 'absolute', null]}
            top='0'
            left='0'
            alignItems='center'
            justifyContent='space-between'
            p={['8px 16px', null, null, null, '16px 56px 16px 16px', null]}
            // bg={isBurgerOpen ? 'white' : 'lime.50'}
            bg='lime.50'
            zIndex='sticky'
        >
            <LogoNavLink />
        </Flex>
    </Flex>
);
