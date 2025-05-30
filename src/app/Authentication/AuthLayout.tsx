import { Box, Flex, Image, Tab, TabIndicator, TabList, Tabs, Text } from '@chakra-ui/react';
import { FC } from 'react';
import {
    Outlet,
    useLocation,
    // useSearchParams
} from 'react-router';
import { NavLink as ReachLink } from 'react-router';

import BackgroundImage from '~/assets/auth-background.png';
import { LogoNavLink } from '~/shared/NavLinks';

import Login from './Login';
import Registration from './Registration';

const AuthLayout: FC = () => {
    const location = useLocation();
    // const [searchParams] = useSearchParams();

    // const emailVerified = searchParams.get('emailVerified');
    return (
        <>
            <Flex w='100%' h='100svh' justifyContent='center'>
                <Flex
                    direction='column'
                    flexBasis={['100%', null, '50%']}
                    bgGradient='linear(to-br, #eaffc7 0%, #29813f 100%)'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Flex
                        w={['90%', null, '355px', '451px', '461px']}
                        direction='column'
                        gap={['10px', null, '30px']}
                        justifyContent='center'
                    >
                        <LogoNavLink hideText={false} />
                        <Tabs
                            variant='unstyled'
                            w='100%'
                            borderBottom='2px solid rgba(0, 0, 0, 0.08)'
                            isFitted
                        >
                            <TabList>
                                <Tab
                                    as={ReachLink}
                                    color='lime.800'
                                    to='/login'
                                    _activeLink={{
                                        color: 'lime.700',
                                        borderBottom: '2px solid lime.800',
                                    }}
                                    _focus={{ boxShadow: 'none' }}
                                >
                                    Вход на сайт
                                </Tab>
                                <Tab
                                    as={ReachLink}
                                    color='lime.800'
                                    _activeLink={{
                                        color: 'lime.700',
                                        borderBottom: '2px solid lime.800',
                                    }}
                                    to='/registration'
                                >
                                    Регистрация
                                </Tab>
                            </TabList>
                            <TabIndicator mt='-2px' height='2px' bg='lime.700' borderRadius='1px' />
                            {location && !location.pathname.includes('registration') ? (
                                <Login />
                            ) : (
                                <Registration />
                            )}
                            {/* {location && location.pathname.includes('verification') ? (
                                location && !location.pathname.includes('registration') ? (
                                    <Login />
                                ) : (
                                    <Registration />
                                )
                            ) : emailVerified && emailVerified === 'true' ? (
                                <Login />
                            ) : (
                                <Registration />
                            )} */}
                            {/* {(emailVerified && emailVerified === 'true') ||
                            (location && location.pathname.includes('verification')) ||
                            (location && !location.pathname.includes('registration')) ? (
                                <Login />
                            ) : (
                                <Registration />
                            )} */}
                        </Tabs>
                        {location && location.pathname.includes('verification') && <Outlet />}

                        <Box position='absolute' bottom='5px' left='10px'>
                            <Text fontWeight='600' fontSize='12px' color='black'>
                                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex flexBasis='50%' display={['none', null, 'flex']}>
                    <Image
                        w='100%'
                        h='auto'
                        objectFit='cover'
                        src={BackgroundImage}
                        alt='Background Image'
                    />
                    <Box position='absolute' bottom='5px' right='10px'>
                        <Text fontWeight='600' fontSize='12px' color='black'>
                            ̶ Лучший сервис для ваших кулинарных побед
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};
export default AuthLayout;
