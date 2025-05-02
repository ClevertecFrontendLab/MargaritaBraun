import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import { CategoryInterface } from '~/store/model/categoryType';

export const NavigationTabs = ({ category, subCategories }: CategoryInterface) => (
    <>
        {subCategories && subCategories.length > 0 && (
            <Flex align='center' justify='center' pb='12px'>
                <Tabs variant='unstyled'>
                    <TabList flexWrap='wrap' justifyContent='center'>
                        {subCategories.map((item, index) => (
                            <Tab
                                as={ReachLink}
                                textStyle='textParagraph'
                                color='lime.800'
                                whiteSpace='nowrap'
                                data-test-id={`tab-${item.title.split('/').pop()}-${index}`}
                                _activeLink={{
                                    color: 'lime.600',
                                    borderBottom: '2px solid #2DB100',
                                }}
                                to={`/${category}/${item.category}`}
                                key={item._id}
                            >
                                {item.title}
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
