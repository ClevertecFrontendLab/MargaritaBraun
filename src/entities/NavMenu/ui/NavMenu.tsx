import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Link as ChakraLink,
    List,
    ListItem,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import { AccordionIcon } from '~/shared/Icons';

import navigationData from '../const/navigationData';

export const NavMenu = () => (
    <Flex direction='column' flex='1 1 auto' overflow='hidden' padding='10px 16px 10px 10px'>
        <Accordion allowToggle height='100%' p='0'>
            {navigationData.map((item) => (
                <AccordionItem key={item.label} border='none'>
                    {({ isExpanded }) => (
                        <>
                            <AccordionButton
                                as={ReachLink}
                                to={item.url}
                                data-test-id={
                                    item.url === 'vegan-cuisine' ? 'vegan-cuisine' : undefined
                                }
                                px='2'
                                py='3'
                                bg={isExpanded ? '#EAFFC7' : 'transparent'}
                                _hover={{ bg: '#EAFFC7' }}
                            >
                                <Box
                                    flex='1'
                                    textAlign='left'
                                    fontSize='md'
                                    fontWeight='500'
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='center'
                                    textDecoration='none'
                                    lineHeight='24px'
                                    gap='3'
                                    whiteSpace='nowrap'
                                >
                                    {item.icon && (
                                        <item.icon
                                            boxSize={{ base: '12px', md: '24px', lg: '24px' }}
                                            objectFit='cover'
                                        />
                                    )}
                                    <Box w='100%' textAlign='left'>
                                        {item.label}
                                    </Box>
                                    <AccordionIcon />
                                </Box>
                            </AccordionButton>
                            {item.subitems && (
                                <AccordionPanel pb={4} defaultValue={2}>
                                    <List spacing={1.5}>
                                        {item.subitems.map((subitem) => (
                                            <ListItem
                                                key={subitem.label}
                                                pl='56px'
                                                pr='8px'
                                                pos='relative'
                                            >
                                                <ChakraLink
                                                    _activeLink={{
                                                        fontWeight: 'bold',
                                                        _before: {
                                                            width: '7px',
                                                        },
                                                    }}
                                                    _before={{
                                                        height: '100%',
                                                        width: '3px',
                                                        content: '" "',
                                                        background: 'lime.300',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '20px',
                                                    }}
                                                    as={ReachLink}
                                                    to={subitem.url}
                                                    _hover={{ textDecoration: 'none' }}
                                                >
                                                    {subitem.label}
                                                </ChakraLink>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionPanel>
                            )}
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    </Flex>
);
