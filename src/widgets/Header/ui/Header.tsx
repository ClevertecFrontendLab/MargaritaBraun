import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, GridItem, Hide, IconButton, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { BurgerIcon } from '~/shared/Icons';
import { LogoNavLink } from '~/shared/NavLinks';
import { ProfileNotification } from '~/shared/ProfileNotification';
import { BurgerMenuModal } from '~/widgets/Menu';

export const Header = () => {
    // const [openBurger, setOpenBurger] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
    console.log('header', isOpen);
    return (
        <GridItem
            area='header'
            as='header'
            // height={{ base: '64px', lg: '80px' }}
            h={['64px', null, null, null, '80px']}
            data-test-id='header'
            colStart={1}
            colEnd={4}
            rowSpan={1}
            w='100%'
            position='relative'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p={['8px 16px', null, null, null, '16px 56px 16px 16px', null]}
            bg={isOpen ? 'white' : 'lime.50'}
            zIndex={isOpen ? '1000000' : 'docked'}
        >
            <LogoNavLink />
            <Hide below='md'>
                <Box display={['none', null, null, 'flex']} w='100%' flexGrow='1' pl='112px'>
                    <Breadcrumbs />
                </Box>
            </Hide>
            {!isOpen && (
                <>
                    <MiniCardAvatar />
                    <Flex display={['flex', null, null, 'none']} w='100%' justifyContent='flex-end'>
                        <ProfileNotification />
                    </Flex>
                </>
            )}

            <IconButton
                ref={btnRef}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                icon={isOpen ? <CloseIcon /> : <BurgerIcon />}
                variant='ghost'
                _hover={{ color: 'lime.600' }}
                display={['flex', null, null, 'none']}
                onClick={isOpen ? onClose : onOpen}
                data-test-id={isOpen ? 'close-icon' : 'hamburger-icon'}
                cursor='pointer'
                position='relative'
                zIndex='tooltip'
            />
            <BurgerMenuModal isOpen={isOpen} onClose={onClose} />
        </GridItem>
    );
};
