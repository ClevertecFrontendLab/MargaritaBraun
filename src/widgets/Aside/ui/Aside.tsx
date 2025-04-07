import { GridItem } from '@chakra-ui/react';

import { ProfileNotification, WriteRecipeBlock } from '~/shared/ProfileNotification';

export const Aside = () => (
    <GridItem
        as='aside'
        p='2'
        bg='#99f6e4'
        area='aside'
        colSpan={2}
        flexDirection='column'
        justifyContent='space-between'
        height='calc(100svh - 80px)'
        display={{ base: 'none', md: 'flex' }}
    >
        <ProfileNotification></ProfileNotification>
        <WriteRecipeBlock></WriteRecipeBlock>
    </GridItem>
);
