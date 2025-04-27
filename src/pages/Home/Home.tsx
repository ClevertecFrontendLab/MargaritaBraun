import { useSearchParams } from 'react-router';

import { HomeKitchen } from '~/entities/KitchenSection';
import { SliderNewRecipes } from '~/entities/Slider';
import { CookingBlogs } from '~/shared/CookingBlogs';
import { HomeJuiciest, PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';

import { useCheckActiveFilters } from '../CategoryPage/utils/useCheckActiveFilters';
import { useFilteredRecipes } from '../CategoryPage/utils/useFilteredRecipes';

const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Приятного аппетита!',
};

const Home = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const check = useCheckActiveFilters();
    const filteredData = useFilteredRecipes();
    return (
        <>
            <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
            {check ? (
                <>
                    <RecipesSections dataAllCategory={filteredData} searchQuery={searchQuery} />
                </>
            ) : (
                <>
                    <SliderNewRecipes />
                    <HomeJuiciest />
                    <CookingBlogs />
                    <HomeKitchen />
                </>
            )}
        </>
    );
};
export default Home;
