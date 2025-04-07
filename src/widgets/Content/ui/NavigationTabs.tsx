import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import navigationData from '~/entities/NavMenu/const/navigationData';

export interface NavigationTabsProps {
    category: string;
}
// Веганская кухня
export const NavigationTabs = ({ category }: NavigationTabsProps) => {
    const pop = 'Text tabs';
    const data = navigationData.filter((item) => item.label === category);
    // console.log('data', data);
    const itemsNavigations = data[0].subitems;
    return (
        <>
            {itemsNavigations && itemsNavigations.length > 0 && (
                <Flex align='center' justify='center'>
                    <Tabs position='relative' variant='unstyled' defaultIndex={2} overflow='hidden'>
                        <TabList overflowX='auto'>
                            {itemsNavigations.map((item) => (
                                <Tab
                                    textStyle='textParagraph'
                                    color='lime.800'
                                    whiteSpace='nowrap'
                                    _selected={{
                                        color: 'lime.600',
                                        borderBottom: '2px solid #2DB100',
                                    }}
                                    key={item.label}
                                >
                                    {item.label}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {itemsNavigations.map((_, index) => (
                                <TabPanel key={index}>
                                    <p>{`${pop} ${index}`}</p>
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                </Flex>
            )}
        </>
    );
};
