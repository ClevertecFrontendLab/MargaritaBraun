import {
    Box,
    Button,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import background from '~/assets/fpasswordBackground.png';
interface LoginErrorModalProps {
    // isOpen: boolean;
    // onClose: () => void;
    onSubmit: () => void;
}
export const LoginErrorModal: FC<LoginErrorModalProps> = ({ onSubmit }) => {
    const { onClose } = useDisclosure();
    const [customIsOpen, setCustomIsOpen] = useState(true);

    const handleCloseModal = () => {
        setCustomIsOpen(false);
        onClose();
    };

    return (
        <>
            <Modal isOpen={customIsOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent p={['8']} data-test-id='sign-in-error-modal'>
                    <ModalHeader
                        fontFamily='Inter'
                        fontWeight='700'
                        fontSize='24px'
                        lineHeight='133%'
                        textAlign='center'
                        color='#000'
                    >
                        Вход не выполнен
                        <ModalCloseButton
                            top='20px'
                            right='25px'
                            rounded='full'
                            border='2px solid black'
                            _hover={{
                                borderColor: 'blackAlpha.600',
                                color: 'blackAlpha.600',
                            }}
                            data-test-id='close-button'
                        />
                    </ModalHeader>
                    <ModalBody justifyContent='center' w='100%' display='flex'>
                        <Image src={background} boxSize={['100px', '206px']} />
                    </ModalBody>

                    <ModalFooter
                        flexDirection='column'
                        p='0'
                        // display='flex'
                        w='100%'
                    >
                        <Flex direction='column' gap='4' p={['32px 0']} w='100%'>
                            <Box>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    textAlign='center'
                                    color='blackAlpha.700'
                                >
                                    Что-то пошло не так.
                                </Text>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    textAlign='center'
                                    color='blackAlpha.700'
                                >
                                    Попробуйте еще раз
                                </Text>
                            </Box>
                        </Flex>
                        <Button
                            w='100%'
                            size={['lg']}
                            fontWeight='600'
                            fontSize='18px'
                            lineHeight='156%'
                            variant='solid'
                            background='black'
                            color='white'
                            _hover={{ background: 'blackAlpha.600' }}
                            type='submit'
                            data-test-id='repeat-button'
                            onSubmit={onSubmit}
                        >
                            Повторить
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
