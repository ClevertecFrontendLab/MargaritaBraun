import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/widgets/Aside';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import { MenuSection } from '~/widgets/Menu';

const Layout = () => (
    <>
        <Grid
            templateAreas={`"header header header"
                "nav-menu main aside"
                "nav-menu main aside"
                "footer footer footer"
                `}
            gridTemplateRows='auto 1fr auto'
            gridTemplateColumns='repeat(12, 1fr)'
            h='100%'
            column-gap='7'
            row-gap='0'
            minHeight='100svh'
        >
            <Header />
            <MenuSection />
            <GridItem
                as='main'
                bg='#d8b4fe'
                area='main'
                colSpan={[12, 12, 12, 12, 10]}
                height={{ base: 'calc(98svh - 64px - 84px)', md: 'calc(98svh - 80px)' }}
                overflowX='auto'
                p={{ base: '0 16px', md: '0 20px', xl: '0 0 0 24px' }}
                w='100%'
            >
                <Outlet />
            </GridItem>
            <Aside />
            <Footer />
        </Grid>
    </>
);

export default Layout;
