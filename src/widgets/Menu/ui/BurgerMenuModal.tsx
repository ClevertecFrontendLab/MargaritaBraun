import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import { FC, SyntheticEvent } from 'react';

import { NavMenu } from '~/entities/NavMenu';
import { Breadcrumbs } from '~/shared/Breadcrumb';
import { LogoNavLink } from '~/shared/NavLinks';

import { BurgerMenuProps } from './BurgerMenu';
import { FooterMenu } from './FooterMenu';

export const BurgerMenuModal: FC<BurgerMenuProps> = ({ isOpen, onClose }) => (
    <>
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent
                display='flex'
                justifyContent='flex-end'
                width='344px'
                marginLeft='auto'
                marginRight='0'
                h='calc(99.9svh - 87px - 64px)'
                borderTopRadius='0'
                onClick={(e: SyntheticEvent) => {
                    const target = e.target as HTMLElement;
                    const closestLink = target.closest('a');
                    if (closestLink) {
                        onClose();
                    }
                }}
            >
                <ModalHeader
                    w='100vw'
                    position='fixed'
                    left='0'
                    right='0'
                    top='0'
                    bg='white'
                    h='64px'
                    justifyContent='flex-end'
                    zIndex='10'
                >
                    <Flex align='center'>
                        <LogoNavLink />
                        <ModalCloseButton />
                    </Flex>
                </ModalHeader>
                <ModalBody display='flex' w='100%' p={['10px', null, null, '0']} overflow='auto'>
                    <Flex
                        direction='column'
                        justify='space-between'
                        position='sticky'
                        top='100px'
                        w='100%'
                        gap={[2]}
                    >
                        <Breadcrumbs />
                        <NavMenu />
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <FooterMenu />
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
);
