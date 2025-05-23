import {
    Flex,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    PinInput,
    PinInputField,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Loading from '~/app/Loading/Loading';
import backgroundPasswordRecovery from '~/assets/passwordRecovery.png';
import { ErrorNotification } from '~/entities/Alert';
import { ServerResponseTypes } from '~/query/constants/types';
import { useVerifyOtpMutation } from '~/query/services/auth';
import { userSelector } from '~/store/user-slice';

import { AccountRecoveryModal } from './AccountRecoveryModal';

export const PasswordAssistance: FC = () => {
    const [valueCode, setValueCode] = useState<string>('');
    const [verifyOtp, { data, error, isLoading }] = useVerifyOtpMutation();
    const { onClose } = useDisclosure();
    const [customIsOpen, setCustomIsOpen] = useState(true);
    const user = useSelector(userSelector);
    const userEmail = user.email === '' ? user.email : 'vano666@mail.com';

    useEffect(() => {
        if (valueCode !== '') {
            verifyOtp({ email: userEmail, otpToken: valueCode });
        }
    }, [valueCode]);

    useEffect(() => {
        if (error) {
            setValueCode('');
        }
    }, [error]);

    const handleCloseModal = () => {
        setCustomIsOpen(false);
        onClose();
    };

    const handlerComplete = (value: string) => {
        setValueCode(value);
    };

    const parseError = () => {
        const typeError = error as ServerResponseTypes;

        if (typeError.status === 403) {
            return <ErrorNotification message='Неверный код' />;
        }

        if (typeError.status === 500) {
            return (
                <ErrorNotification message='Ошибка сервера' submessage='Попробуйте немного позже' />
            );
        }

        if (typeError?.data.message) {
            return <ErrorNotification message={typeError.data.message} />;
        }

        return <ErrorNotification message='Неверный код' />;
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && parseError()}
            {data ? (
                <AccountRecoveryModal />
            ) : (
                <Modal isOpen={customIsOpen} onClose={handleCloseModal}>
                    <ModalOverlay />
                    <ModalContent p={['8']} data-test-id='verification-code-modal'>
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
                                _focus={{ boxShadow: 'none' }}
                                data-test-id='close-button'
                            />
                            <Image src={backgroundPasswordRecovery} boxSize={['100px', '206px']} />
                        </ModalBody>

                        <ModalFooter flexDirection='column' p='0'>
                            <Flex direction='column' gap='4' p={['32px 0']}>
                                {error && (
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='700'
                                        fontSize='24px'
                                        lineHeight='133%'
                                        textAlign='center'
                                        color='blackAlpha.700'
                                    >
                                        Неверный код
                                    </Text>
                                )}
                                <Flex direction='column'>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='400'
                                        fontSize='16px'
                                        lineHeight='150%'
                                        textAlign='center'
                                        color='blackAlpha.700'
                                    >
                                        Мы отправили вам на e-mail
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
                                        {userEmail}
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='400'
                                        fontSize='16px'
                                        lineHeight='150%'
                                        textAlign='center'
                                        color='blackAlpha.700'
                                    >
                                        шестизначный код. Введите его ниже.
                                    </Text>
                                </Flex>
                                <HStack>
                                    <PinInput
                                        otp
                                        onComplete={handlerComplete}
                                        size={['sm', 'md']}
                                        errorBorderColor='red'
                                        value={error && ''}
                                    >
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-1'
                                        />
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-2'
                                        />
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-3'
                                        />
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-4'
                                        />
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-5'
                                        />
                                        <PinInputField
                                            color='lime.800'
                                            data-test-id='verification-code-input-6'
                                        />
                                    </PinInput>
                                </HStack>
                            </Flex>
                            <Text
                                fontFamily='Inter'
                                fontWeight='400'
                                fontSize='16px'
                                lineHeight='150%'
                                textAlign='center'
                                color='blackAlpha.700'
                            >
                                Не пришло письмо? Проверьте папку Спам.
                            </Text>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};
