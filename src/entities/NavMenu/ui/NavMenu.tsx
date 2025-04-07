import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Link as ChakraLink,
    List,
    ListItem,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router';

import navigationData from '../const/navigationData';

export const NavMenu = () => (
    <Flex overflow='auto' direction='column' flex='1 1 auto' height='100%'>
        <Accordion allowToggle overflow='auto' height='100%'>
            {navigationData.map((item) => (
                <AccordionItem key={item.label}>
                    {({ isExpanded }) => (
                        <>
                            <AccordionButton
                                as={ReachLink}
                                to={item.uri}
                                data-test-id={
                                    item.uri === 'vegan-cuisine' ? 'vegan-cuisine' : undefined
                                }
                                px='2'
                                py='3'
                                bg={isExpanded ? '#EAFFC7' : 'transparent'}
                                _hover={{ bg: '#EAFFC7' }}
                                // size='md'
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
                                >
                                    {item.icon && <item.icon style={{ marginRight: 8 }} />}
                                    {item.label}
                                    <AccordionIcon />
                                </Box>
                            </AccordionButton>
                            {item.subitems && (
                                <AccordionPanel pb={4}>
                                    <List spacing={2}>
                                        {item.subitems.map((subitem) => (
                                            <ListItem key={subitem.label}>
                                                <ChakraLink as={ReachLink} to={subitem.uri}>
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
