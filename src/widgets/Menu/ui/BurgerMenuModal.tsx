import { Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { FC } from 'react';

import { NavMenu } from '~/entities/NavMenu';
import { Breadcrumbs } from '~/shared/Breadcrumb';

import { FooterMenu } from './FooterMenu';

export interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenuModal: FC<BurgerMenuProps> = ({ isOpen, onClose }) => (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay top='80px' zIndex='20' />
            <ModalContent
                display='flex'
                justifyContent='flex-end'
                width='344px'
                marginLeft='auto'
                marginRight='0'
                borderTopRadius='0'
                mt={['80px', null, null, null, 0]}
                // zIndex='sticky'
                zIndex='21'
            >
                <ModalBody display='flex' w='100%' p={['10px', null, null, '0']} overflow='auto'>
                    <Flex
                        direction='column'
                        justify='space-between'
                        position='sticky'
                        top='80px'
                        w='100%'
                        gap={[2]}
                    >
                        <Flex w='300px' wrap='wrap'>
                            <Breadcrumbs />
                        </Flex>
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
