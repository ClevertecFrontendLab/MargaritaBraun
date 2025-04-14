import { JuiciestKitchen } from '~/entities/KitchenSection';
import dataForDishesJusty from '~/shared/consts/dataForDishesJusty';
import { PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';

const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Самое сочное',
};

const Juiciest = () => (
    <>
        <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
        <RecipesSections dataForDishes={dataForDishesJusty}></RecipesSections>
        <JuiciestKitchen />
    </>
);
export default Juiciest;
