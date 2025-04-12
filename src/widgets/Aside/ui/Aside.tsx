import { Box, GridItem, Hide } from '@chakra-ui/react';

import { WriteRecipeBlock } from '~/shared/ProfileNotification';

export const Aside = () => (
    <Hide below='lg'>
        <GridItem
            as='aside'
            // p='0'
            area='aside'
            bg='#99f6e4'
            // flexDirection='column'
            // justifyContent='space-between'
            // height='calc(100svh - 80px)'
            // display={{ base: 'none', lg: 'flex' }}
            // flex='1 1 280px'
            // height='100%'
            // align='center'
        >
            <Box flexGrow='1' position='relative' />
            <WriteRecipeBlock></WriteRecipeBlock>
        </GridItem>
    </Hide>
);

// import { Box, Flex, Hide } from '@chakra-ui/react';

// import { WriteRecipeBlock } from '~/shared/ProfileNotification';

// export const Aside = () => (
//     <Hide below='lg'>
//         <Flex
//             as='aside'
//             p='0'
//             bg='#99f6e4'
//             flexDirection='column'
//             justifyContent='space-between'
//             // height='calc(100svh - 80px)'
//             // display={{ base: 'none', lg: 'flex' }}
//             flex='1 1 280px'
//             height='100%'
//             align='center'
//         >
//             <Box flexGrow='1' position='relative' />
//             <WriteRecipeBlock></WriteRecipeBlock>
//         </Flex>
//     </Hide>
// );
