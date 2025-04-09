import { Box, GridItem } from '@chakra-ui/react';

import { WriteRecipeBlock } from '~/shared/ProfileNotification';

export const Aside = () => (
    <GridItem
        as='aside'
        p='2'
        bg='#99f6e4'
        area='aside'
        colSpan={1}
        flexDirection='column'
        justifyContent='space-between'
        height='calc(100svh - 80px)'
        display={{ base: 'none', md: 'flex' }}
        maxW='280px'
        minW='200px'
    >
        <Box flexGrow='1' position='relative' />
        <WriteRecipeBlock></WriteRecipeBlock>
    </GridItem>
);
