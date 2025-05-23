import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useUser } from '~/context/UserContext';
import { ErrorNotification } from '~/entities/Alert';
import { ForgotPasswordModal, LoginErrorModal } from '~/entities/Modal';
import { LoginCredentials, ServerResponseTypes } from '~/query/constants/types';
import { useLoginMutation } from '~/query/services/auth';

import Loading from '../Loading/Loading';
import { loginSchema } from './consts/YupScheme';
import { PasswordInput } from './ui/PasswordInput';

const Login: FC = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [loginUser, { data, error, isLoading }] = useLoginMutation();
    const [loginValue, setLoginValue] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginCredentials>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmitHandler = async (formData: LoginCredentials) => {
        setLoginValue(formData.login);

        await loginUser({
            login: formData.login.trim(),
            password: formData.password,
        }).unwrap();
    };

    const parseError = () => {
        const typeError = error as ServerResponseTypes;
        if (typeError?.status === 500) {
            return <LoginErrorModal onSubmit={handleSubmit(onSubmitHandler)} />;
        }

        if (typeError?.status === 401) {
            return (
                <ErrorNotification
                    message='Неверный логин или пароль'
                    submessage='Попробуйте снова'
                />
            );
        }

        if (typeError?.status === 403) {
            return (
                <ErrorNotification
                    message='E-mail не верифицирован'
                    submessage='Проверьте почту и перейдите по ссылке'
                />
            );
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (data) {
            setUser({
                login: loginValue,
            });
            navigate('/');
        }
    }, [data]);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.trim();
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && parseError()}
            <form onSubmit={handleSubmit(onSubmitHandler)} data-test-id='sign-in-form'>
                <Stack spacing={2} direction='column'>
                    <FormControl isInvalid={!!errors.login}>
                        <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
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
                            onBlur={handleBlur}
                        />
                        <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password}>
                        <PasswordInput passwordRegister={register('password')} />
                        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    </FormControl>
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
                        isLoading={isSubmitting || isLoading}
                        type='submit'
                        data-test-id='submit-button'
                    >
                        Войти
                    </Button>
                    <Button
                        variant='link'
                        onClick={onOpen}
                        fontWeight='600'
                        fontSize='16px'
                        lineHeight='150%'
                        color='black'
                        mt='16px'
                        data-test-id='forgot-password'
                        size={['md', 'lg']}
                    >
                        Забыли логин или пароль?
                    </Button>
                    <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
                </Stack>
            </form>
        </>
    );
};

export default Login;
