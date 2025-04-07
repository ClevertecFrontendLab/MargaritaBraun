import { Flex } from '@chakra-ui/react';

export const Block = () => {
    const version = 'Версия программы 03.25';
    const text = 'Все права защищены, ученический файл, ©Клевер Технолоджи, 2025';
    const out = 'Out';
    return (
        <Flex bg='orange.600' direction='column'>
            <p> {version}</p>
            <p> {text}</p>
            <p> {out}</p>
        </Flex>
    );
};
