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
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { ErrorNotification } from '~/entities/Alert';
import { ForgotPasswordModal, LoginErrorModal } from '~/entities/Modal';
import { DataResponse, LoginCredentials } from '~/query/constants/types';
import { useLoginMutation } from '~/query/services/auth';

import Loading from '../Loading/Loading';
import { loginSchema } from './consts/YupScheme';
import { PasswordInput } from './ui/PasswordInput';

const Login = () => {
    const navigate = useNavigate();
    const [loginUser, { error, isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginCredentials>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    const onSubmitHandler = async (data: LoginCredentials) => {
        try {
            const response = await loginUser({
                login: data.login,
                password: data.password,
            }).unwrap();

            console.log('Response data:', response);
            navigate('/');
        } catch (error) {
            console.log('error', error);
        }
    };

    const parseError = () => {
        const typeError = error as DataResponse;

        if (typeError?.message) {
            return <ErrorNotification message={typeError.message} />;
        }
        return <LoginErrorModal />;
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {isLoading && <Loading />}
            {error && parseError}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Stack spacing={2} direction='column'>
                    <FormControl isInvalid={!!errors.login}>
                        <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                            Логин для входа на сайт
                        </Text>
                        <Input
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
