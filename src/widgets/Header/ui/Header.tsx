import { Flex, GridItem, IconButton } from '@chakra-ui/react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';

export const Header = () => (
    <GridItem
        bg='#FFFFD3'
        area='header'
        colSpan={12}
        height='80px'
        as='header'
        data-test-id='header'
        w='100%'
    >
        <Flex
            align='center'
            justify='space-between'
            height='100%'
            px='40px'
            p={{
                base: '8px 16px 8px 16px',
                xl: '16px 56px 16px 16px',
                '2xl': '16px 56px 16px 16px',
            }}
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
        </Flex>
    </GridItem>
);
