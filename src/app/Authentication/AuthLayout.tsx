import { Box, Flex, Image, Tab, TabIndicator, TabList, Tabs, Text } from '@chakra-ui/react';
import {
    FC,
    // ReactNode
} from 'react';
import { Outlet } from 'react-router';
import { NavLink as ReachLink } from 'react-router';

import BackgroundImage from '~/assets/auth-background.png';
import { LogoNavLink } from '~/shared/NavLinks';

// interface AuthLayoutProps {
//     children: ReactNode;
// }
{
    /* <AuthLayoutProps> */
}
const AuthLayout: FC = () => (
    // { children }
    <>
        <Flex
            w='100%'
            // h='100vw'
            h='100%'
        >
            <Flex
                direction='column'
                flexBasis='50%'
                bgGradient='linear(to-br, #eaffc7 0%, #29813f 100%)'
                justifyContent='center'
                alignItems='center'
            >
                <Flex w={['461px']} direction='column'>
                    <LogoNavLink />
                    <Tabs variant='unstyled' w='100%' borderBottom='2px solid rgba(0, 0, 0, 0.08)'>
                        <TabList>
                            <Tab
                                as={ReachLink}
                                color='lime.800'
                                to='/login'
                                _activeLink={{
                                    color: 'lime.700',
                                    borderBottom: '2px solid lime.800',
                                }}
                                // _selected={{ color: 'white', bg: 'blue.500' }}
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
                                // _selected={{ color: 'white', bg: 'green.400' }}
                            >
                                Регистрация
                            </Tab>
                        </TabList>
                        <TabIndicator mt='-2px' height='2px' bg='lime.700' borderRadius='1px' />
                    </Tabs>
                    <Outlet />
                    <Box position='absolute' bottom='5px' left='10px'>
                        <Text fontWeight='600' fontSize='12px' color='black'>
                            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex flexBasis='50%'>
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
        {/* <p>AuthLayout</p> */}
        {/* {children} */}
    </>
);

export default AuthLayout;
