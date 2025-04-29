import { JuiciestKitchen } from '~/entities/KitchenSection';
import dataAllCategory from '~/shared/consts/dataAllCategory';
import { PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';

const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Самое сочное',
};

const Juiciest = () => (
    <>
        <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
        <RecipesSections dataAllCategory={dataAllCategory}></RecipesSections>
        <JuiciestKitchen />
    </>
);
export default Juiciest;
