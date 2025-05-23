import { Button, Progress, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FocusEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { ErrorNotification } from '~/entities/Alert';
import { VerificationPendingModal } from '~/entities/Modal';
import { ServerResponseTypes, UserRegistrationData } from '~/query/constants/types';
import { useSignupMutation } from '~/query/services/auth';
import { setEmailUser } from '~/store/user-slice';

import Loading from '../Loading/Loading';
import { registrationSchema } from './consts/YupScheme';
import { RegistrationStep1 } from './ui/RegistrationStep1';
import { RegistrationStep2 } from './ui/RegistrationStep2';

export interface DataRegistrationForm extends UserRegistrationData {
    passwordRepeat: string;
}

const Registration = () => {
    const [signup, { data, error, isLoading }] = useSignupMutation();
    const [stepRegistration, setStepRegistry] = useState(1);
    const [progressValue, setProgressValue] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const {
        watch,
        register,
        trigger,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<DataRegistrationForm>({
        reValidateMode: 'onChange',
        resolver: yupResolver(registrationSchema),
        mode: 'all',
    });

    const formValues = watch();

    useEffect(() => {
        const allFields: (keyof DataRegistrationForm)[] = [
            'firstName',
            'lastName',
            'email',
            'login',
            'password',
            'passwordRepeat',
        ];

        const validFields = allFields.filter(
            (field) => !!formValues[field] && !errors[field],
        ).length;

        setProgressValue((validFields / allFields.length) * 100);
    }, [formValues, errors]);

    const checkButtonDisabled = () => {
        const currentArrayFields: (keyof DataRegistrationForm)[] =
            stepRegistration === 1
                ? ['firstName', 'lastName', 'email']
                : ['login', 'password', 'passwordRepeat'];

        const validFields = currentArrayFields.filter(
            (field) => !!formValues[field] && !errors[field],
        ).length;

        return validFields !== currentArrayFields.length;
    };

    const onSubmitHandler = async (result: DataRegistrationForm) => {
        dispatch(setEmailUser(result.email));
        const { passwordRepeat, ...dataWithoutRepeatPassword } = result as DataRegistrationForm;
        await signup(dataWithoutRepeatPassword).unwrap();
        if (data) {
            navigation('/login');
        }
    };

    const handlerButtonForm = () => {
        const validate = checkButtonDisabled();
        if (!validate) {
            if (stepRegistration === 1) {
                setStepRegistry(2);
            } else if (stepRegistration === 2) {
                handleSubmit(onSubmitHandler)();
            }
        } else {
            handleSubmit((_data) => {})();
        }
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
    };

    const handleBlur = async (e: FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        e.target.value = e.target.value.trim();
        await trigger(name as keyof DataRegistrationForm);
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && parseError()}
            {data && <VerificationPendingModal />}
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                data-test-id='sign-up-form'
                onKeyDown={(e) => {
                    console.log('enter');
                    if (e.key === 'Enter') {
                        handlerButtonForm();
                    }
                }}
            >
                <Text>
                    {stepRegistration === 1 ? 'Шаг 1. Личная информация' : 'Шаг 2. Логин и пароль'}
                </Text>
                <Progress
                    hasStripe
                    value={progressValue}
                    colorScheme='lime'
                    background='rgba(0, 0, 0, 0.06)'
                    data-test-id='sign-up-progress'
                />

                <Stack spacing={4}>
                    {stepRegistration === 1 ? (
                        <RegistrationStep1
                            register={register}
                            errors={errors}
                            handleBlur={handleBlur}
                        />
                    ) : (
                        <RegistrationStep2
                            register={register}
                            errors={errors}
                            handleBlur={handleBlur}
                        />
                    )}
                </Stack>

                <Button
                    data-test-id='submit-button'
                    w='100%'
                    size={['lg']}
                    fontWeight='600'
                    fontSize='18px'
                    lineHeight='156%'
                    variant='solid'
                    background='black'
                    color='white'
                    _hover={{ background: 'blackAlpha.600' }}
                    isLoading={isSubmitting}
                    type='button'
                    onClick={handlerButtonForm}
                    mt={4}
                    disabled={checkButtonDisabled()}
                >
                    {stepRegistration === 1 ? 'Дальше' : 'Зарегистрироваться'}
                </Button>
            </form>
        </>
    );
};

export default Registration;
