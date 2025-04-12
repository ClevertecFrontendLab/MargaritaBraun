import { Flex, IconButton } from '@chakra-ui/react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';

export const Header = () => (
    <Flex
        bg='#FFFFD3'
        height={{ base: '64px', lg: '80px' }}
        as='header'
        data-test-id='header'
        w='100%'
        flexBasis='100%'
        position={{ base: 'fixed', lg: 'relative' }}
        top='0'
        zIndex='3'
        // maxW={{ base: '100%', '2xl': '1920px' }}
        m='0 auto'
        // pos='relative'
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
            w='100%'
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
    </Flex>
);

// import { Flex, GridItem, IconButton } from '@chakra-ui/react';

// import { MiniCardAvatar } from '~/entities/Avatar';
// import { Breadcrumbs } from '~/shared/Breadcrumb';
// import { BurgerIcon } from '~/shared/Icons';
// import { LogoNavLink } from '~/shared/NavLinks';
// import { ProfileNotification } from '~/shared/ProfileNotification';

// export const Header = () => (
//     <GridItem
//         bg='#FFFFD3'
//         area='header'
//         colSpan={12}
//         height='80px'
//         as='header'
//         data-test-id='header'
//         w='100%'
//     >
//         <Flex
//             align='center'
//             justify='space-between'
//             height='100%'
//             px='40px'
//             p={{
//                 base: '8px 16px 8px 16px',
//                 xl: '16px 56px 16px 16px',
//                 '2xl': '16px 56px 16px 16px',
//             }}
//         >
//             <LogoNavLink />
//             <Breadcrumbs />
//             <MiniCardAvatar />
//             <ProfileNotification />
//             <IconButton
//                 aria-label='Burger menu'
//                 icon={<BurgerIcon />}
//                 variant='ghost'
//                 _hover={{ color: 'lime.600' }}
//                 display={{ base: 'flex', md: 'none' }}
//             />
//         </Flex>
//     </GridItem>
// );
