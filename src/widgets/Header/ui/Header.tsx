import { Box, Flex, GridItem, IconButton, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';
import { BurgerMenuModal } from '~/widgets/Menu';

export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
    return (
        <GridItem
            area='header'
            as='header'
            height={{ base: '64px', lg: '80px' }}
            data-test-id='header'
            colStart={1}
            colEnd={4}
            rowSpan={1}
            w='100%'
            zIndex='docked'
            position='relative'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p={['8px 16px', null, null, '16px 56px 16px 16px', null]}
            bg='lime.50'
        >
            <LogoNavLink />
            <Box display={['none', null, null, 'flex']} w='100%' flexGrow='1' pl='112px'>
                <Breadcrumbs />
            </Box>
            <MiniCardAvatar />
            <Flex display={['flex', null, null, 'none']} w='100%' justifyContent='flex-end'>
                <ProfileNotification />
            </Flex>
            <IconButton
                ref={btnRef}
                aria-label='Burger menu'
                icon={<BurgerIcon />}
                variant='ghost'
                _hover={{ color: 'lime.600' }}
                display={['flex', null, null, 'none']}
                onClick={onOpen}
            />
            <BurgerMenuModal isOpen={isOpen} onClose={onClose} />
        </GridItem>
    );
};
