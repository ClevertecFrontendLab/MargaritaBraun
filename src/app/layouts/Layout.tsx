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
            maxW='120rem'
            m='0 auto'
            justify-items='center'
            templateAreas={`"header header header"
                "nav main aside"
                "footer footer footer"`}
            templateColumns={[
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
                '256px 1fr 280px',
                '256px 1fr 280px',
            ]}
            templateRows={['64px 1fr 84px', '64px 1fr 84px', '64px 1fr 84px', '80px 1fr']}
            position='relative'
        >
            <Header />
            <MenuSection />
            <GridItem
                area='main'
                as='main'
                colStart={[1, 1, 1, 2, 2]}
                colEnd={[4, 4, 4, 3, 3]}
                rowStart={2}
                rowEnd={[2, 2, 2, 3, 3]}
                display='flex'
                w='100%'
                justifyContent='center'
                flexDirection='column'
                flexShrink='2'
                p={['0 16px', null, '0 20px', null, '0 0 0 24px', null]}
                gap={['8', null, '10']}
            >
                <Outlet />
            </GridItem>
            <Aside />

            <Footer />
        </Grid>
    </>
);

export default Layout;
