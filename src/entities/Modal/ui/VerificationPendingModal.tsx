import {
    Box,
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

import backgroundVerification from '~/assets/verification-background.png';

export const VerificationPendingModal = () => {
    const emailUser = 'ekaterinabaker@gmail.ru';
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
                <ModalContent p={['8']}>
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
                        />
                        <Image src={backgroundVerification} boxSize={['100px', '206px']} />
                    </ModalBody>

                    <ModalFooter flexDirection='column' p='0'>
                        <Flex direction='column' gap='4' p={['32px 0']}>
                            <Box>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='700'
                                    fontSize='24px'
                                    lineHeight='133%'
                                    textAlign='center'
                                    color='#000'
                                >
                                    Остался последний шаг.
                                </Text>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='700'
                                    fontSize='24px'
                                    lineHeight='133%'
                                    textAlign='center'
                                    color='#000'
                                >
                                    Нужно верифицировать ваш e-mail
                                </Text>
                            </Box>

                            <Flex direction='column'>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    textAlign='center'
                                    color='blackAlpha.700'
                                >
                                    Мы отправили вам на почту
                                </Text>
                                <Text
                                    as='b'
                                    fontFamily='Inter'
                                    fontWeight='600'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    textAlign='center'
                                    color='black'
                                >
                                    {emailUser}
                                </Text>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    textAlign='center'
                                    color='blackAlpha.700'
                                >
                                    ссылку для верификации.
                                </Text>
                            </Flex>
                        </Flex>
                        <Text
                            fontFamily='Inter'
                            fontWeight='400'
                            fontSize='16px'
                            lineHeight='150%'
                            textAlign='center'
                            color='blackAlpha.700'
                        >
                            Не пришло письмо? Проверьте папку Спам. По другим вопросам свяжитесь
                            <Text as='ins'> с поддержкой</Text>
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
