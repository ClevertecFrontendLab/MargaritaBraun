import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router';

import { Category } from '~/store/model/categoryType';

interface NavigationTabsProps {
    categoryObject: Category;
    handleRefresh: () => void;
}

export const NavigationTabs = ({ categoryObject, handleRefresh }: NavigationTabsProps) => (
    <>
        {categoryObject && categoryObject.subCategories.length > 0 && (
            <Flex align='center' justify='center' pb='12px'>
                <Tabs variant='unstyled' onChange={handleRefresh}>
                    <TabList flexWrap='wrap' justifyContent='center'>
                        {categoryObject.subCategories.map((item, index) => {
                            const isActive = window.location.pathname.includes(item.category);

                            return (
                                <Tab
                                    as={ReachLink}
                                    textStyle='textParagraph'
                                    color='lime.800'
                                    whiteSpace='nowrap'
                                    data-test-id={`tab-${item.category}-${index}`}
                                    _activeLink={{
                                        color: 'lime.600',
                                        borderBottom: '2px solid #2DB100',
                                    }}
                                    to={`/${categoryObject.category}/${item.category}`}
                                    key={item._id}
                                    aria-selected={isActive}
                                >
                                    <Text
                                        as='span'
                                        data-test-id={isActive && `${item.category}-active`}
                                    >
                                        {item.title}
                                    </Text>
                                </Tab>
                            );
                        })}
                    </TabList>
                    <TabPanels display='none'>
                        <TabPanel></TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        )}
    </>
);
