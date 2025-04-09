import { Flex } from '@chakra-ui/react';

import { KitchenSection } from '~/entities/KitchenSection';
import { SliderNewRecipes } from '~/entities/Slider';
import { CookingBlogs } from '~/shared/CookingBlogs';
import { HomeJuiciest, PageHeaderWithFilters } from '~/widgets/Content';
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';

const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Приятного аппетита!',
};

const Home = () => (
    <>
        <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
        <Flex direction='column' gap='10'>
            <SliderNewRecipes />
            <HomeJuiciest />
            <CookingBlogs />
            <KitchenSection />
        </Flex>
    </>
);
export default Home;
