import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
    passwordRegister: ReturnType<UseFormRegister<{ password: string }>>;
}

export const PasswordInput = ({ passwordRegister }: PasswordInputProps) => {
    const [show, setShow] = useState(false);

    const handleMouseDown = () => setShow(true);
    const handleMouseUp = () => setShow(false);
    const handleMouseLeave = () => setShow(false);

    return (
        <InputGroup size='md' flexDirection='column'>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Пароль
            </Text>
            <Input
                data-test-id='password-input'
                {...passwordRegister}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Пароль для сайта'
                background='white'
                border='2px solid lime.150'
                _placeholder={{
                    fontWeight: 400,
                    fontSize: '18px',
                    color: 'lime.800',
                }}
            />
            <InputRightElement top='24px'>
                <IconButton
                    data-test-id='password-visibility-button'
                    background='transparent'
                    h='100%'
                    size='sm'
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    aria-label='Show / hide password'
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                />
            </InputRightElement>
        </InputGroup>
    );
};
