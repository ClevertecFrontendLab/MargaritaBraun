import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { emailField } from '~/app/Authentication/consts/YupScheme';
import fpasswordBackground from '~/assets/fpasswordBackground.png';
import { ErrorNotification } from '~/entities/Alert';
import { DataResponse } from '~/query/constants/types';
import { useForgotPasswordMutation } from '~/query/services/auth';

import { PasswordAssistance } from './PasswordAssistance';

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    // const user = useSelector(userSelector);
    const [userEmail, setUserEmail] = useState<string>('');
    const text = 'Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код';
    const messageForError = 'Попробуйте другой e-mail или проверьте правильность его написания';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                email: emailField,
            }),
        ),
    });

    const [forgotPassword, { data, error }] = useForgotPasswordMutation();

    const sendToServer = async (email: string) => {
        await forgotPassword({ email: email });
    };

    const handlerSendCode = (data: { email: string }) => {
        const customEmail = data.email;
        if (typeof customEmail === 'string') {
            setUserEmail(customEmail);
        }
        sendToServer(data.email);
        setUserEmail(() => data.email);
    };

    const parseError = () => {
        const typeError = error as DataResponse;

        if (typeError?.message) {
            return <ErrorNotification message={typeError.message} submessage={messageForError} />;
        }
        return <ErrorNotification message='Такого e-mail нет' submessage={messageForError} />;
    };

    return (
        <>
            {error && parseError()}
            {data ? (
                <PasswordAssistance userEmail={userEmail} />
            ) : (
                <Modal isOpen={isOpen} onClose={onClose}>
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
                            <Image src={fpasswordBackground} boxSize={['100px', '206px']} />
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
                                        {text}
                                    </Text>
                                </Box>

                                <FormControl isInvalid={!!errors.email || !!error}>
                                    <FormLabel>Ваш e-mail</FormLabel>
                                    <Input
                                        type='email'
                                        placeholder='e-mail'
                                        {...register('email')}
                                        _placeholder={{
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            color: 'lime.800',
                                        }}
                                        size='sm'
                                        background='white'
                                        border='2px solid lime.150'
                                    />

                                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Button
                                colorScheme='black'
                                mr={3}
                                type='submit'
                                onClick={handleSubmit(handlerSendCode)}
                            >
                                Получить код
                            </Button>
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
