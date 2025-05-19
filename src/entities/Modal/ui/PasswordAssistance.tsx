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

import Loading from '~/app/Loading/Loading';
import backgroundPasswordRecovery from '~/assets/passwordRecovery.png';
import { ErrorNotification } from '~/entities/Alert';
import { DataResponse } from '~/query/constants/types';
import { useVerifyOtpMutation } from '~/query/services/auth';

import { AccountRecoveryModal } from './AccountRecoveryModal';

interface PasswordAssistanceProps {
    userEmail: string;
}
export const PasswordAssistance: FC<PasswordAssistanceProps> = ({ userEmail }) => {
    const [valueCode, setValueCode] = useState<string>('');
    const [verifyOtp, { data, error, isLoading }] = useVerifyOtpMutation();
    const { onClose } = useDisclosure();
    const [customIsOpen, setCustomIsOpen] = useState(true);

    useEffect(() => {
        if (valueCode !== '') {
            verifyOtp({ email: userEmail, otpToken: valueCode });
        }
    }, [valueCode]);

    const handleCloseModal = () => {
        setCustomIsOpen(false);
        onClose();
    };

    const handlerComplete = (value: string) => {
        setValueCode(() => value);
    };

    const parseError = () => {
        const typeError = error as DataResponse;

        if (typeError?.message) {
            return <ErrorNotification message={typeError.message} />;
        }
        return <ErrorNotification message='Такого e-mail нет' />;
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
                                _focus={{ boxShadow: 'none' }}
                            />
                            <Image src={backgroundPasswordRecovery} boxSize={['100px', '206px']} />
                        </ModalBody>

                        <ModalFooter flexDirection='column' p='0'>
                            <Flex direction='column' gap='4' p={['32px 0']}>
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
                                        defaultValue={error && ''}
                                    >
                                        <PinInputField color='lime.800' />
                                        <PinInputField color='lime.800' />
                                        <PinInputField color='lime.800' />
                                        <PinInputField color='lime.800' />
                                        <PinInputField color='lime.800' />
                                        <PinInputField color='lime.800' />
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
