import { GridItem, Hide } from '@chakra-ui/react';

import { NavMenu } from '~/entities/NavMenu';

import { FooterMenu } from './FooterMenu';

export const MenuSection = () => (
    <Hide below='lg'>
        <GridItem
            // flexDirection='column'
            as='nav'
            pt='6'
            // height='calc(100vh - 80px)'
            // height='calc(100% - 80px)'
            // height='100%'
            bg='#f9a8d4'
            // flex='1 1 auto'
            // flex='1 1 256px'
            // justify='space-between'
            area='nav'
        >
            <NavMenu />
            <FooterMenu />
        </GridItem>
    </Hide>
);

// import { Flex, Hide } from '@chakra-ui/react';

// import { NavMenu } from '~/entities/NavMenu';

// import { FooterMenu } from './FooterMenu';

// export const MenuSection = () => (
//     <Hide below='lg'>
//         <Flex
//             flexDirection='column'
//             as='nav'
//             pt='6'
//             // height='calc(100vh - 80px)'
//             // height='calc(100% - 80px)'
//             height='100%'
//             bg='#f9a8d4'
//             // flex='1 1 auto'
//             flex='1 1 256px'
//             justify='space-between'
//         >
//             <NavMenu />
//             <FooterMenu />
//         </Flex>
//     </Hide>
// );
