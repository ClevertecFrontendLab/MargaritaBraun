import { VeganKitchen } from '~/entities/KitchenSection';
import dataForDishes from '~/shared/consts/dataForDishes';
import { PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';

const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Веганская кухня',
    subtitle:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
};

const VeganСuisine = () => (
    <>
        <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
        {/* <NavigationTabs category='Веганская кухня'></NavigationTabs> */}
        <RecipesSections dataForDishes={dataForDishes}></RecipesSections>
        <VeganKitchen />
    </>
);

export default VeganСuisine;
