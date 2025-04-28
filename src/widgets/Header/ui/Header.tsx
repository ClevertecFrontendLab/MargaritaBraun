import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Hide, IconButton, Menu, MenuButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';
import { BurgerMenuList } from '~/widgets/Menu';

export const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isBurgerOpen]);

    const closeBurgerMenu = () => {
        setIsBurgerOpen(false);
    };

    return (
        <>
            <Flex as='header' h={['64px', null, null, null, '80px']} w='100%'>
                <Flex
                    h={['64px', null, null, null, '80px']}
                    data-test-id='header'
                    w='100%'
                    position={['fixed', null, null, 'absolute', null]}
                    top='0'
                    left='0'
                    alignItems='center'
                    justifyContent='space-between'
                    p={['8px 16px', null, null, null, '16px 56px 16px 16px', null]}
                    bg={isBurgerOpen ? 'white' : 'lime.50'}
                    zIndex='sticky'
                >
                    <LogoNavLink />
                    <Hide below='md'>
                        <Box
                            display={['none', null, null, 'flex']}
                            w='100%'
                            flexGrow='1'
                            pl='112px'
                        >
                            <Breadcrumbs />
                        </Box>
                        <MiniCardAvatar />
                    </Hide>
                    {!isBurgerOpen && (
                        <Flex
                            display={['flex', null, null, 'none']}
                            w='100%'
                            justifyContent='flex-end'
                        >
                            <ProfileNotification />
                        </Flex>
                    )}

                    <Menu
                        isOpen={isBurgerOpen}
                        onOpen={() => setIsBurgerOpen(true)}
                        closeOnSelect={false}
                        closeOnBlur={true}
                    >
                        <MenuButton
                            as={IconButton}
                            display={['flex', null, null, 'none']}
                            aria-label={isBurgerOpen ? 'Close menu' : 'Open menu'}
                            icon={isBurgerOpen ? <CloseIcon /> : <BurgerIcon />}
                            variant='ghost'
                            _hover={{ color: 'lime.600' }}
                            colorScheme='white'
                            data-test-id={isBurgerOpen ? 'close-icon' : 'hamburger-icon'}
                            cursor='pointer'
                            onClick={() => setIsBurgerOpen((prev) => !prev)}
                            position='relative'
                            zIndex='modal'
                        />
                        <BurgerMenuList isActive={isBurgerOpen} />
                    </Menu>
                </Flex>
                {isBurgerOpen && (
                    <Box
                        position='fixed'
                        top='64px'
                        left='0'
                        right='0'
                        bottom='0'
                        bg='rgba(0, 0, 0, 0.16)'
                        backdropFilter='blur(2px)'
                        zIndex='dropdown'
                        onClick={closeBurgerMenu}
                    />
                )}
            </Flex>
        </>
    );
};
