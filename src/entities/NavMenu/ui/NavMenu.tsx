import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react';

import navigationData from '../const/navigationData';

export const NavMenu = () => (
    <Accordion allowToggle>
        {navigationData.map((item) => (
            <AccordionItem key={item.label}>
                {({ isExpanded }) => (
                    <>
                        <AccordionButton
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
                                fontFamily='Inter'
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
                                            <Link href={subitem.uri}>{subitem.label}</Link>
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
);
