import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/widgets/Aside';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import { MenuSection } from '~/widgets/Menu';

const Layout = () => (
    <>
        <Header />
        <Flex
            as='main'
            bg='#d8b4fe'
            // w='100%'
            // height='100%'
            margin={{ base: '64px 0 84px 0', lg: '0', xl: '0' }}
        >
            <MenuSection />
            <Flex
                direction='column'
                p={['0 16px', '0 16px', '0 20px', '0 20px', '0 0 0 24px', null]}
                maxW={{ base: '100%', lg: 'calc(100% - 280px - 256px)' }}
            >
                <Outlet />
            </Flex>
            <Aside />
        </Flex>

        <Footer />
    </>
);

export default Layout;
