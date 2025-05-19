import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
    //   register: UseFormRegister<{ password: string }>; // Только поле password
    // register: UseFormRegister<unknown>;
    // register: UseFormRegister<{ password: string }>;
    passwordRegister: ReturnType<UseFormRegister<{ password: string }>>;
}

export const PasswordInput = ({ passwordRegister }: PasswordInputProps) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup size='md' flexDirection='column'>
            <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
                Пароль
            </Text>
            <Input
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
                    background='transparent'
                    h='100%'
                    size='sm'
                    onClick={handleClick}
                    aria-label='Show / hide password'
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                />
            </InputRightElement>
        </InputGroup>
    );
};

// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
// import { useState } from 'react';
// import { UseFormRegister } from 'react-hook-form';

// import { DataLoginForm } from '../Login';
// import { DataRegistrationForm } from '../Registration';

// interface PasswordInputProps<T extends DataLoginForm | DataRegistrationForm> {
//   register: UseFormRegister<T>;
//   // другие пропсы
// }

// // interface PasswordInputProps {
// //     register: UseFormRegister<DataLoginForm | DataRegistrationForm>;
// // }

// export const PasswordInput = ({ register }: PasswordInputProps) => {
//     const [show, setShow] = useState(false);
//     const handleClick = () => setShow(!show);

//     return (
//         <InputGroup size='md' flexDirection='column'>
//             <Text fontWeight='400' fontSize='16px' lineHeight='150%' color='black'>
//                 Пароль
//             </Text>
//             <Input
//                 {...register('password')}
//                 pr='4.5rem'
//                 type={show ? 'text' : 'password'}
//                 placeholder='Пароль для сайта'
//                 background='white'
//                 border='2px solid lime.150'
//                 _placeholder={{
//                     fontWeight: 400,
//                     fontSize: '18px',
//                     color: 'lime.800',
//                 }}
//             />
//             <InputRightElement top='24px'>
//                 <IconButton
//                     background='transparent'
//                     h='100%'
//                     size='sm'
//                     onClick={handleClick}
//                     aria-label='Show / hide password'
//                     icon={show ? <ViewIcon /> : <ViewOffIcon />}
//                 />
//             </InputRightElement>
//         </InputGroup>
//     );
// };
