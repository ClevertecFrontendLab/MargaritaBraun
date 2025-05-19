import { FormControl, FormErrorMessage, FormHelperText, Input, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { PasswordInput } from './PasswordInput';
import { RegistrationStepProps } from './RegistrationStep1';

export const RegistrationStep2: FC<RegistrationStepProps> = ({ register, errors }) => (
    <>
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
            {errors.login?.message ? (
                <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            ) : (
                <FormHelperText>Логин не менее 5 символов, только латиница</FormHelperText>
            )}
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
            <PasswordInput passwordRegister={register('password')} />
            {errors.password?.message ? (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            ) : (
                <FormHelperText>
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </FormHelperText>
            )}
        </FormControl>

        <FormControl isInvalid={!!errors.passwordRepeat}>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Повторите пароль
            </Text>
            <Input
                {...register('passwordRepeat')}
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
            {errors.passwordRepeat?.message ? (
                <FormErrorMessage>{errors.passwordRepeat?.message}</FormErrorMessage>
            ) : (
                <FormHelperText>Пароли должны совпадать</FormHelperText>
            )}
        </FormControl>
    </>
);
