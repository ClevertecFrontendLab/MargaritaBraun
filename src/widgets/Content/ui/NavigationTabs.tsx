import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

export interface subcategoryObject {
    itemsNavigations?: Array<{ label: string; url: string }>;
}

export const NavigationTabs = ({ itemsNavigations }: subcategoryObject) => (
    <>
        {itemsNavigations && itemsNavigations.length > 0 && (
            <Flex align='center' justify='center' pb='12px'>
                <Tabs variant='unstyled'>
                    <TabList flexWrap='wrap' justifyContent='center'>
                        {itemsNavigations.map((item, index) => (
                            <Tab
                                as={ReachLink}
                                textStyle='textParagraph'
                                color='lime.800'
                                whiteSpace='nowrap'
                                data-test-id={`tab-${item.url.split('/').pop()}-${index}`}
                                _activeLink={{
                                    color: 'lime.600',
                                    borderBottom: '2px solid #2DB100',
                                }}
                                to={item.url}
                                key={item.label}
                            >
                                {item.label}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels display='none'>
                        <TabPanel></TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        )}
    </>
);
