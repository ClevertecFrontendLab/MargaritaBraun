import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Input,
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
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { accountRecoverySchema } from '~/app/Authentication/consts/YupScheme';
import { PasswordInput } from '~/app/Authentication/ui/PasswordInput';
import Loading from '~/app/Loading/Loading';
import { ErrorNotification, SuccessAlert } from '~/entities/Alert';
import { DataResponse } from '~/query/constants/types';
import { useResetPasswordMutation } from '~/query/services/auth';
import { userSelector } from '~/store/user-slice';

export const AccountRecoveryModal: FC = () => {
    const userEmail = useSelector(userSelector).email;
    const [resetPassword, { data, error, isLoading }] = useResetPasswordMutation();
    const { onClose } = useDisclosure();
    const handleCloseModal = () => {
        setCustomIsOpen(false);
        onClose();
    };
    const [customIsOpen, setCustomIsOpen] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(accountRecoverySchema),
    });

    const sendToServer = async (data: {
        login: string;
        password: string;
        passwordConfirm: string;
    }) => {
        await resetPassword({ email: userEmail, ...data });
    };

    const handlerResetForm = (data: {
        login: string;
        password: string;
        passwordConfirm: string;
    }) => {
        sendToServer(data);
    };

    const parseError = () => {
        const typeError = error as DataResponse;

        if (typeError?.message) {
            return <ErrorNotification message={typeError.message} />;
        }
        return <ErrorNotification message='Ошибка сервера' />;
    };

    return (
        <>
            {data && <SuccessAlert message='Восстановление данных успешно' />}
            {isLoading && <Loading />}
            {error && parseError()}
            <Modal isOpen={customIsOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent p={['8']} data-test-id='reset-credentials-modal'>
                    <ModalHeader>
                        <Heading fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                            Восстановление аккаунта
                        </Heading>
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
                    </ModalHeader>
                    <ModalBody justifyContent='center' w='100%' display='flex'>
                        <Flex direction='column' gap='4' p={['32px 0']}>
                            <form>
                                <FormControl isInvalid={!!errors.login}>
                                    <Text
                                        fontWeight='400'
                                        fontSize='16px'
                                        lineHeight='150%'
                                        color='black'
                                    >
                                        Логин для входа на сайт
                                    </Text>
                                    <Input
                                        data-test-id='login-input'
                                        {...register('login')}
                                        type='text'
                                        placeholder='Введите логин'
                                        _placeholder={{
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            color: 'lime.800',
                                        }}
                                        size='sm'
                                        background='white'
                                        border='2px solid lime.150'
                                    />
                                    {errors.login?.message ? (
                                        <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
                                    ) : (
                                        <FormHelperText>
                                            Логин не менее 5 символов, только латиница
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={!!errors.password}>
                                    <PasswordInput passwordRegister={register('password')} />
                                    {errors.password?.message ? (
                                        <FormErrorMessage>
                                            {errors.password?.message}
                                        </FormErrorMessage>
                                    ) : (
                                        <FormHelperText>
                                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={!!errors.passwordConfirm}>
                                    <Text
                                        fontWeight='400'
                                        fontSize='16px'
                                        lineHeight='150%'
                                        color='black'
                                    >
                                        Повторите пароль
                                    </Text>
                                    <Input
                                        data-test-id='confirm-password-input'
                                        {...register('passwordConfirm')}
                                        type='password'
                                        placeholder='Повторите пароль'
                                        _placeholder={{
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            color: 'lime.800',
                                        }}
                                        size='sm'
                                        background='white'
                                        border='2px solid lime.150'
                                    />
                                    {errors.passwordConfirm?.message ? (
                                        <FormErrorMessage>
                                            {errors.passwordConfirm?.message}
                                        </FormErrorMessage>
                                    ) : (
                                        <FormHelperText>Пароли должны совпадать</FormHelperText>
                                    )}
                                </FormControl>
                            </form>
                        </Flex>
                    </ModalBody>

                    <ModalFooter flexDirection='column' p='0'>
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
                            onClick={handleSubmit(handlerResetForm)}
                            mt={4}
                            data-test-id='submit-button'
                        >
                            Зарегистрироваться
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
