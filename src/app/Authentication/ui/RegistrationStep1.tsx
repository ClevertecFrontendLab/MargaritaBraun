import { FormControl, FormErrorMessage, Input, Text } from '@chakra-ui/react';
import { FC, FocusEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { DataRegistrationForm } from '../Registration';

export interface RegistrationStepProps {
    register: UseFormRegister<DataRegistrationForm>;
    errors: FieldErrors<DataRegistrationForm>;
    handleBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

export const RegistrationStep1: FC<RegistrationStepProps> = ({ register, errors, handleBlur }) => (
    <>
        <FormControl isInvalid={!!errors.firstName}>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Ваше имя
            </Text>
            <Input
                data-test-id='first-name-input'
                {...register('firstName')}
                type='text'
                placeholder='Введите имя'
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
            {errors.firstName?.message && (
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            )}
        </FormControl>

        <FormControl isInvalid={!!errors.lastName}>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Ваша фамилия
            </Text>
            <Input
                data-test-id='last-name-input'
                {...register('lastName')}
                type='text'
                placeholder='Введите фамилию'
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
            {errors.lastName?.message && (
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            )}
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Ваш e-mail
            </Text>
            <Input
                data-test-id='email-input'
                {...register('email')}
                type='email'
                placeholder='Введите email'
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
            {errors.email?.message && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
        </FormControl>
    </>
);
