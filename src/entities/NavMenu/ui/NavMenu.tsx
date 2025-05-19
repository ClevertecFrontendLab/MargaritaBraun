import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Link as ChakraLink,
    List,
    ListItem,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import Loading from '~/app/Loading/Loading';
import { IMAGE_URL } from '~/query/constants/apiConsts';
import { AccordionIcon } from '~/shared/Icons';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

export const NavMenu = () => {
    const { data: navigationData, isLoading: catsLoading } = useGetAllCategoriesQuery();

    if (catsLoading) return <Loading />;

    return (
        <Flex
            direction='column'
            overflow='auto'
            p={['0', null, null, '10px 16px 10px 10px']}
            h='100%'
            w='100%'
            zIndex='10'
        >
            <Accordion allowToggle p='0' w='100%' data-test-id='nav'>
                {navigationData &&
                    navigationData.map((item) => (
                        <AccordionItem key={item.title} border='none' w='100%'>
                            {({ isExpanded }) => (
                                <>
                                    <AccordionButton
                                        as={ReachLink}
                                        to={
                                            item.subCategories
                                                ? `/${item.category}/${item.subCategories[0].category}`
                                                : `${item.category}`
                                        }
                                        px='2'
                                        py='3'
                                        bg={isExpanded ? '#EAFFC7' : 'transparent'}
                                        _hover={{ bg: '#EAFFC7' }}
                                        data-test-id={
                                            item.category === 'vegan'
                                                ? 'vegan-cuisine'
                                                : `${item.category}`
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
                                                <Image
                                                    src={`${IMAGE_URL}${item.icon}`}
                                                    boxSize={{
                                                        base: '12px',
                                                        md: '24px',
                                                        lg: '24px',
                                                    }}
                                                    objectFit='cover'
                                                    alt={item.title}
                                                />
                                            )}
                                            <Box w='100%' textAlign='left'>
                                                {item.title}
                                            </Box>
                                            <AccordionIcon />
                                        </Box>
                                    </AccordionButton>
                                    {item.subCategories && (
                                        <AccordionPanel pb={4} defaultValue={2}>
                                            <List spacing={1.5}>
                                                {item.subCategories.map((subitem) => (
                                                    <ListItem
                                                        key={subitem.title}
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
                                                            to={`/${item.category}/${subitem.category}`}
                                                            _hover={{ textDecoration: 'none' }}
                                                        >
                                                            {subitem.title}
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
