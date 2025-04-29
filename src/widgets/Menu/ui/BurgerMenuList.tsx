import { Flex, MenuItem, MenuList } from '@chakra-ui/react';
import { FC } from 'react';

import { NavMenu } from '~/entities/NavMenu';
import { Breadcrumbs } from '~/shared/Breadcrumb';

import { FooterMenu } from './FooterMenu';

interface BurgerMenuListProps {
    isActive: boolean;
}

export const BurgerMenuList: FC<BurgerMenuListProps> = ({ isActive }) => (
    <>
        <MenuList>
            {isActive && (
                <>
                    <MenuItem
                        as='div'
                        w='400px'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        closeOnSelect={false}
                        bg='white'
                    >
                        <Flex
                            direction='column'
                            justify='space-between'
                            position='sticky'
                            top='64px'
                            h='100%'
                            w='100%'
                            gap={[2]}
                        >
                            <Flex w='300px' wrap='wrap'>
                                <Breadcrumbs />
                            </Flex>
                            <NavMenu />
                        </Flex>
                    </MenuItem>
                    <MenuItem as='div' w='400px' bg='white'>
                        <FooterMenu />
                    </MenuItem>
                </>
            )}
        </MenuList>
    </>
);
