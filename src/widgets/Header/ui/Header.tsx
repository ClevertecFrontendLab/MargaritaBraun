import { Flex, GridItem, Text } from '@chakra-ui/react';

import { MiniCardAvatar } from '~/entities/Avatar';
import { LogoNavLink } from '~/shared/NavLinks';

export const Header = () => (
    <GridItem
        pl='2'
        bg='#FFFFD3'
        area='header'
        colSpan={12}
        height='80px'
        as='header'
        data-test-id='header'
    >
        <Flex align='center' justify='space-between' height='100%' px={4}>
            <LogoNavLink />
            <Text fontSize='lg' fontWeight='bold'>
                Header
            </Text>
            <MiniCardAvatar />
        </Flex>
    </GridItem>
);
