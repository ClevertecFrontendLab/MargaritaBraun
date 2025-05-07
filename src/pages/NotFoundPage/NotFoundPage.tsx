import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

import notFoundImage from '~/assets/notFoundImage.png';
import { Footer } from '~/widgets/Footer';
import { HeaderWithoutAutorization } from '~/widgets/Header';

const NotFoundPage = () => (
    <>
        <HeaderWithoutAutorization />
        <Flex
            w='100%'
            justifyContent='center'
            alignItems='center'
            h='100%'
            direction='column'
            padding='32px'
            gap='8'
        >
            <Image src={notFoundImage} boxSize={['108px', '206px']} />
            <Heading fontFamily='Inter' fontSize='24px' fontWeight='700' lineHeight='32px'>
                Упс! Такой страницы нет
            </Heading>
            <Text>
                Можете поискать другой рецепт{' '}
                <Link color='teal.500' href='/'>
                    здесь.
                </Link>
            </Text>
        </Flex>
        <Footer />
    </>
);

export default NotFoundPage;
