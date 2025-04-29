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
import { NavLink as ReachLink, useLocation, useParams } from 'react-router';

import { AccordionIcon } from '~/shared/Icons';

import navigationData from '../const/navigationData';

export const NavMenu = () => {
    const { category: currentCategory, subcategory: currentSubCategory } = useParams<{
        category: string;
        subcategory: string;
    }>();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const indexCategory = navigationData.findIndex((item) => {
        if (item.url === currentCategory) return true;

        if (item.subitems) {
            return item.subitems.some((subitem) => {
                const subpath = `${item.url}/${subitem.url}`;
                return location.pathname.includes(subpath);
            });
        }

        return false;
    });

    const indexOpenMenu = isHomePage ? [] : indexCategory !== -1 ? [indexCategory] : [];
    return (
        <Flex
            direction='column'
            overflow='auto'
            p={['0', null, null, '10px 16px 10px 10px']}
            h='100%'
            w='100%'
            zIndex='10'
        >
            <Accordion allowToggle p='0' index={indexOpenMenu} w='100%' data-test-id='nav'>
                {navigationData.map((item) => (
                    <AccordionItem key={item.label} border='none' w='100%'>
                        {({ isExpanded }) => (
                            <>
                                <AccordionButton
                                    as={ReachLink}
                                    to={item.subitems ? item.subitems[0].url : item.url}
                                    px='2'
                                    py='3'
                                    bg={isExpanded ? '#EAFFC7' : 'transparent'}
                                    _hover={{ bg: '#EAFFC7' }}
                                    data-test-id={
                                        item.url === 'vegan' ? 'vegan-cuisine' : `${item.url}`
                                    }
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
                                                        data-test-id={
                                                            currentSubCategory ===
                                                            subitem.url.split('/').pop()
                                                                ? `${currentSubCategory}-active`
                                                                : null
                                                        }
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
};
