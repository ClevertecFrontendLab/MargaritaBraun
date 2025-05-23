import { Button, Flex, Text } from '@chakra-ui/react';

import { SighOutIcon } from '~/shared/Icons';

export const FooterMenu = () => {
    const version = 'Версия программы 03.25';
    const text = 'Все права защищены, ученический файл, ©Клевер Технолоджи, 2025';
    const out = 'Выйти';
    return (
        <Flex
            direction='column'
            gap='4'
            p={['0', null, null, '0px 24px 32px 24px']}
            maxW={['344px', null, null, '256px']}
            bg='white'
            w='100%'
        >
            <Text fontSize='12px' lineHeight='16px' color='blackAlpha.400'>
                {version}
            </Text>
            <Text fontSize='12px' lineHeight='16px' color='blackAlpha.700'>
                {text}
            </Text>
            <Button
                leftIcon={<SighOutIcon />}
                variant='ghost'
                justifyContent='flex-start'
                w='100px'
                alignItems='center'
                size='xs'
            >
                {out}
            </Button>
        </Flex>
    );
};
