import { GridItem, IconButton } from '@chakra-ui/react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';

export const Header = () => (
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
        <Breadcrumbs />
        <MiniCardAvatar />
        <ProfileNotification />
        <IconButton
            aria-label='Burger menu'
            icon={<BurgerIcon />}
            variant='ghost'
            _hover={{ color: 'lime.600' }}
            display={{ base: 'flex', md: 'none' }}
        />
    </GridItem>
);
