import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Header } from '~/widgets/Header';
import { MenuSection } from '~/widgets/Menu';

const Layout = () => (
    <>
        <Grid
            templateAreas={`"header header header"
                "nav-menu main aside"
                "nav-menu main aside"`}
            gridTemplateRows='auto 1fr auto'
            gridTemplateColumns='repeat(12, 1fr)'
            h='100%'
            gap='6'
            minHeight='100vh'
        >
            <Header />
            <MenuSection />
            <GridItem pl='2' bg='#d8b4fe' area='main' colSpan={8}>
                <Outlet />
            </GridItem>
            <GridItem pl='2' bg='#99f6e4' area='aside' colSpan={2}>
                Right
            </GridItem>
        </Grid>
    </>
);

export default Layout;
