import { RecommendedCuisine } from '~/entities/RecommendedCuisine';
import { SliderNewRecipes } from '~/entities/Slider';
import { CookingBlogs } from '~/shared/CookingBlogs';
import { HomeJuiciest } from '~/widgets/Content';

import { useCheckActiveFilters } from '../CategoryPage/utils/useCheckActiveFilters';
import ContentLayout from '../Layout/ContentLayout';

const Home = () => {
    const check = useCheckActiveFilters();

    return (
        <ContentLayout title='Приятного аппетита!' showFiltered={check}>
            {!check && (
                <>
                    <SliderNewRecipes />
                    <HomeJuiciest />
                    <CookingBlogs />
                    <RecommendedCuisine />
                </>
            )}
        </ContentLayout>
    );
};

export default Home;
