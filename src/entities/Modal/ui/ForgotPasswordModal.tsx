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
import {
    FC,
    // useEffect,
    // useState
} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { emailField } from '~/app/Authentication/consts/YupScheme';
import fpasswordBackground from '~/assets/fpasswordBackground.png';
import { ErrorNotification } from '~/entities/Alert';
import { ServerResponseTypes } from '~/query/constants/types';
import { useForgotPasswordMutation } from '~/query/services/auth';
import { setEmailUser } from '~/store/user-slice';

import { PasswordAssistance } from './PasswordAssistance';

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    // const [userEmail, setUserEmail] = useState<string>('');
    const dispatch = useDispatch();
    const text = 'Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код';
    const messageForError = 'Такого e-mail нет';
    const submessageForError = 'Попробуйте другой e-mail или проверьте правильность его написания';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                email: emailField,
            }),
        ),
    });

    // useEffect(() => {
    //     if (isOpen) {
    //         reset();
    //     }
    // }, [isOpen, reset]);

    const [forgotPassword, { data, error }] = useForgotPasswordMutation();

    const sendToServer = async (email: string) => {
        await forgotPassword({ email: email });
    };

    const handlerSendCode = (data: { email: string }) => {
        const customEmail = data.email;
        if (typeof customEmail === 'string') {
            // setUserEmail(customEmail);
            // setUserEmail(() => customEmail);
            dispatch(setEmailUser(data.email));
        }
        sendToServer(data.email);
        // setUserEmail(() => data.email);
        reset();
    };

    const parseError = () => {
        const typeError = error as ServerResponseTypes;

        if (typeError.status === 500) {
            return (
                <ErrorNotification message='Ошибка сервера' submessage='Попробуйте немного позже' />
            );
        }
        if (typeError.data.message) {
            return <ErrorNotification message={typeError.data.message} />;
        }

        return <ErrorNotification message={messageForError} submessage={submessageForError} />;
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    return (
        <>
            {error && parseError()}
            {data ? (
                <PasswordAssistance />
            ) : (
                <Modal isOpen={isOpen} onClose={handleClose}>
                    <ModalOverlay />
                    <ModalContent
                        p={['8']}
                        // data-test-id='sign-up-success-modal'
                        data-test-id='send-email-modal'
                    >
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
                                <form onSubmit={handleSubmit(handlerSendCode)}>
                                    <FormControl isInvalid={!!errors.email || !!error}>
                                        <FormLabel>Ваш e-mail</FormLabel>
                                        <Input
                                            data-test-id='email-input'
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
                                    <Button
                                        data-test-id='submit-button'
                                        colorScheme='black'
                                        mr={3}
                                        type='submit'
                                        onClick={handleSubmit(handlerSendCode)}
                                        display='flex'
                                        justifyContent='center'
                                        w='100%'
                                    >
                                        Получить код
                                    </Button>
                                </form>
                            </Flex>
                            <Text
                                display='flex'
                                justifyContent='center'
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
