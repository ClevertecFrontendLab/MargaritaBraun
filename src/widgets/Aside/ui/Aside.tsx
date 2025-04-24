import { Flex, GridItem, Hide } from '@chakra-ui/react';

import { ProfileNotification, WriteRecipeBlock } from '~/shared/ProfileNotification';

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
            height='100%'
        >
            <Flex
                direction='column'
                justify='space-between'
                h={[null, null, null, null, 'calc(99.9svh - 24px - 100px)']}
                position='sticky'
                top='10px'
                height='calc(100vh - 80px)'
            >
                <Flex flexGrow='1' direction='column' gap={[12]} p={['16px 56px']}>
                    <ProfileNotification />
                </Flex>
                <WriteRecipeBlock />
            </Flex>
        </GridItem>
    </Hide>
);
