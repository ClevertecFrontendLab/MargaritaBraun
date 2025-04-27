import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/widgets/Aside';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import { MenuSection } from '~/widgets/Menu';

const Layout = () => (
    <>
        <Grid
            w='100%'
            minH='100vh'
            maxW={['100%', null, null, null, '120rem']}
            m='0 auto'
            justifyItems='center'
            templateAreas={`"header header header"
                "nav main aside"
                "footer footer footer"`}
            templateColumns={[
                '1fr',
                null,
                null,
                null,
                'minmax(200px, 256px) minmax(auto, 1fr) minmax(200px, 280px)',
            ]}
            templateRows={['64px 1fr 80px', null, null, null, '80px 1fr']}
            position='relative'
            gap={[2, null, 4]}
        >
            <Header />

            <MenuSection />

            <GridItem
                area='main'
                as='main'
                w='100%'
                minW='0'
                display='flex'
                flexDirection='column'
                p={['0 16px', null, '0 20px', '0 24px']}
                gap={['8', null, null, null, '10']}
                mb={['80px', null, null, null, '0']}
            >
                <Outlet />
            </GridItem>

            <Aside />

            <Footer />
        </Grid>
    </>
);

export default Layout;
