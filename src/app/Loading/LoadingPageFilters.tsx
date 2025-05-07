import { Flex, Spinner } from '@chakra-ui/react';

const LoadingPageFilters = () => (
    <>
        <Flex
            direction='column'
            bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0.00) 100%)'
            p='10'
            align='center'
            justify='center'
            boxSize={['134px', null, null, '206px']}
            borderRadius='lg'
            margin='0 auto'
        >
            <Spinner
                data-test-id='loader-search-block'
                size='xl'
                thickness='4px'
                speed='0.65s'
                color='green.500'
                emptyColor='gray.200'
            />
        </Flex>
    </>
);

export default LoadingPageFilters;
