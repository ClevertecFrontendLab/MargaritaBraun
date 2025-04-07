import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/widgets/Aside';
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
            column-gap='7'
            row-gap='0'
            minHeight='100svh'
        >
            <Header />
            <MenuSection />
            <GridItem as='main' bg='#d8b4fe' area='main' colSpan={8} height='calc(100svh - 80px)'>
                <Outlet />
            </GridItem>
            <Aside />
        </Grid>
    </>
);

export default Layout;
