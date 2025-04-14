// import { Flex } from '@chakra-ui/react';

import { HomeKitchen } from '~/entities/KitchenSection';
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
        <SliderNewRecipes />
        <HomeJuiciest />
        <CookingBlogs />
        <HomeKitchen />
    </>
);
export default Home;
