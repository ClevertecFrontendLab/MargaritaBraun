import { Flex, GridItem, Hide } from '@chakra-ui/react';

import { WriteRecipeBlock } from '~/shared/ProfileNotification';

export const Aside = () => (
    <Hide below='lg'>
        <GridItem
            area='aside'
            as='aside'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            colStart={3}
            colEnd={4}
            rowStart={2}
            rowEnd={4}
        >
            <Flex flexGrow='1' />
            <WriteRecipeBlock />
        </GridItem>
    </Hide>
);
