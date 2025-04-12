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
            "main main main"
            "footer footer footer"`}
            w='100%'
            // maxW='1920px'
            // m='0 auto'
            // templateColumns='repeat(3, 1fr)'
            // gridTemplateRows="256px 1fr 280px"
        >
            <Header />
            <GridItem
                as='main'
                bg='#d8b4fe'
                area='main'
                display='grid'
                // gridTemplateColumns='256px 1fr 280px'
                // direction='column'
                gridTemplateAreas={`'nav content aside'`}
                // w='100%'
                // height='100%'
                // margin={{ base: '64px 0 84px 0', lg: '0', xl: '0' }}
                // colSpan={3}
                w='100%'
                gridTemplateColumns={['1fr', '1fr', '256px 1fr 280px']}
            >
                <MenuSection />
                <GridItem
                    display='flex'
                    gridArea='content'
                    flexDirection='column'
                    p={['0 16px', '0 16px', '0 20px', '0 20px', '0 0 0 24px', null]}
                    w='100%'
                    // colSpan={[5, 5, 3]}
                    // maxW={{ base: '100%', lg: 'calc(100% - 280px - 256px)' }}
                    // colStart={[0, 1]}
                    // colEnd={[4, 6]}
                >
                    <Outlet />
                </GridItem>
                <Aside />
            </GridItem>

            <Footer />
        </Grid>
    </>
);

export default Layout;

// import { Flex, Grid } from '@chakra-ui/react';
// import { Outlet } from 'react-router';

// import { Aside } from '~/widgets/Aside';
// import { Footer } from '~/widgets/Footer';
// import { Header } from '~/widgets/Header';
// import { MenuSection } from '~/widgets/Menu';

// const Layout = () => (
//     <>
//         <Grid
//             templateAreas={`"header header header"
//             "nav main aside"
//             "footer footer footer"`}
//             gridTemplateRows="256px 1fr 280px"
//         >
//             <Header />
//             <Flex
//                 as='main'
//                 bg='#d8b4fe'
//                 // w='100%'
//                 // height='100%'
//                 margin={{ base: '64px 0 84px 0', lg: '0', xl: '0' }}
//             >
//                 <MenuSection />
//                 <Flex
//                     direction='column'
//                     p={['0 16px', '0 16px', '0 20px', '0 20px', '0 0 0 24px', null]}
//                     maxW={{ base: '100%', lg: 'calc(100% - 280px - 256px)' }}
//                 >
//                     <Outlet />
//                 </Flex>
//                 <Aside />
//             </Flex>

//             <Footer />
//         </Grid>
//     </>
// );

// export default Layout;
