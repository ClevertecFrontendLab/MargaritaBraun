import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/widgets/Aside';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import { MenuSection } from '~/widgets/Menu';

const Layout = () => (
    <>
        <Flex
            w='100%'
            minH='100vh'
            maxW={['100%', null, null, '90rem', '120rem']}
            m='0 auto'
            justifyItems='center'
            position='relative'
            gap={[2, null, 4]}
            direction='column'
            flexShrink='3'
        >
            <Header />

            <Flex
                as='main'
                w='100%'
                justifyContent={['center', null, null, 'space-between']}
                flexShrink='3'
            >
                <MenuSection />
                <Flex
                    w='100%'
                    flexDirection='column'
                    p={['0 16px', null, '0 20px', '0 24px']}
                    gap={['8', null, null, null, '10']}
                    mb={['80px', null, null, null, '0']}
                    maxW={['100%', null, '728px', '880px', ' 1360px']}
                    flexShrink='3'
                >
                    <Outlet />
                </Flex>
                <Aside />
            </Flex>

            <Footer />
        </Flex>
    </>
);

export default Layout;
