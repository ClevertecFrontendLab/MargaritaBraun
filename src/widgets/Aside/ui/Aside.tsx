import { Flex, Hide } from '@chakra-ui/react';

import { ProfileNotification, WriteRecipeBlock } from '~/shared/ProfileNotification';

export const Aside = () => (
    <Hide below='lg'>
        <Flex
            as='aside'
            direction='column'
            justify='space-between'
            w='280px'
            position='sticky'
            top='10px'
            height='calc(100vh - 80px)'
        >
            <Flex direction='column' alignItems='center' gap='30px' p={['16px 56px']}>
                <ProfileNotification />
            </Flex>
            <WriteRecipeBlock />
        </Flex>
    </Hide>
);
