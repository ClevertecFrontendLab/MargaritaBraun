import { Box, Flex, Spinner } from '@chakra-ui/react';

const Loading = () => (
    <Box
        position='fixed'
        top={0}
        left={0}
        right={0}
        bottom={0}
        background='var(--blackAlpha-300, rgba(0, 0, 0, 0.16))'
        backdropFilter='blur(2px)'
        zIndex='modal'
        display='flex'
        alignItems='center'
        justifyContent='center'
    >
        <Flex
            direction='column'
            bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)'
            p='10'
            align='center'
            justify='center'
            boxSize={['134px', null, null, '206px']}
            borderRadius='lg'
        >
            <Spinner
                data-test-id='app-loader'
                size='xl'
                thickness='4px'
                speed='0.65s'
                color='green.500'
                emptyColor='gray.200'
            />
        </Flex>
    </Box>
);

export default Loading;
