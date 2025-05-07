import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import { Category } from '~/store/model/categoryType';

interface NavigationTabsProps {
    categoryObject: Category;
}

export const NavigationTabs = ({ categoryObject }: NavigationTabsProps) => (
    <>
        {categoryObject && categoryObject.subCategories.length > 0 && (
            <Flex align='center' justify='center' pb='12px'>
                <Tabs variant='unstyled'>
                    <TabList flexWrap='wrap' justifyContent='center'>
                        {categoryObject.subCategories.map((item, index) => (
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
                                to={`/${categoryObject.category}/${item.category}`}
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
