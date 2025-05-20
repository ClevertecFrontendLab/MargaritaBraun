import {
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import badVerification from '~/assets/bad-verification.png';

export const VerificationErrorModal = () => {
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
                <ModalContent p={['8']} data-test-id='email-verification-failed-modal'>
                    <ModalBody justifyContent='center' w='100%' display='flex'>
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
                        <Image src={badVerification} boxSize={['100px', '206px']} />
                    </ModalBody>

                    <ModalFooter flexDirection='column' p='0'>
                        <Flex direction='column' gap='4' p={['32px 0']}>
                            <Text
                                fontFamily='Inter'
                                fontWeight='700'
                                fontSize='24px'
                                lineHeight='133%'
                                textAlign='center'
                                color='#000'
                            >
                                Упс! Что-то пошло не так
                            </Text>
                            <Text
                                fontFamily='Inter'
                                fontWeight='400'
                                fontSize='16px'
                                lineHeight='150%'
                                textAlign='center'
                                color='blackAlpha.700'
                            >
                                Ваша ссылка для верификации недействительна. Попробуйте
                                зарегистрироваться снова.
                            </Text>
                        </Flex>
                        <Text
                            fontFamily='Inter'
                            fontWeight='400'
                            fontSize='16px'
                            lineHeight='150%'
                            textAlign='center'
                            color='blackAlpha.700'
                        >
                            Остались вопросы? Свяжитесь с<Text as='ins'> поддержкой</Text>
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
