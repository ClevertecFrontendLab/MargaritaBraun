import { RecommendedCuisine } from '~/entities/RecommendedCuisine';
import { RecipesSections } from '~/widgets/Content';

import { useCheckActiveFilters } from '../CategoryPage/utils/useCheckActiveFilters';
import ContentLayout from '../Layout/ContentLayout';

const Juiciest = () => {
    const check = useCheckActiveFilters();
    return (
        <ContentLayout title='Самое сочное' showFiltered={check}>
            {!check && (
                <>
                    <RecipesSections />
                    <RecommendedCuisine />
                </>
            )}
        </ContentLayout>
    );
};
export default Juiciest;
