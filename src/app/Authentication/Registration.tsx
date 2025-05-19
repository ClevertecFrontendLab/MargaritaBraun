import { Button, Progress, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorNotification } from '~/entities/Alert';
import { VerificationPendingModal } from '~/entities/Modal';
import { DataResponse, UserRegistrationData } from '~/query/constants/types';
import { useSignupMutation } from '~/query/services/auth';

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

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<DataRegistrationForm>({
        resolver: yupResolver(registrationSchema),
        mode: 'onChange',
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

    const onSubmitHandler = async (data: DataRegistrationForm) => {
        const { passwordRepeat, ...dataWithoutRepeatPassword } = data as DataRegistrationForm;
        try {
            await signup(dataWithoutRepeatPassword).unwrap();
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    const handlerButtonForm = () => {
        if (stepRegistration === 1) {
            setStepRegistry(2);
        } else if (stepRegistration === 2) {
            handleSubmit(onSubmitHandler)();
        }
    };

    const parseError = () => {
        const typeError = error as DataResponse;

        if (typeError?.message) {
            return <ErrorNotification message={typeError.message} />;
        }
        return <ErrorNotification message='Нет ответа' />;
    };

    return (
        <>
            {isLoading && <Loading />}
            {error && parseError()}
            {data && <VerificationPendingModal />}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Text>
                    {stepRegistration === 1 ? 'Шаг 1. Личная информация' : 'Шаг 2. Логин и пароль'}
                </Text>
                <Progress
                    hasStripe
                    value={progressValue}
                    colorScheme='lime'
                    background='rgba(0, 0, 0, 0.06)'
                />

                <Stack spacing={4}>
                    {stepRegistration === 1 ? (
                        <RegistrationStep1 register={register} errors={errors} />
                    ) : (
                        <RegistrationStep2 register={register} errors={errors} />
                    )}
                </Stack>

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
