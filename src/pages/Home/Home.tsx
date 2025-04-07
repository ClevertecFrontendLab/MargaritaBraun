import { PageHeaderWithFilters, RecipesSections } from '~/widgets/Content';
// import { RecipesSections } from "~/widgets/Content";
import { PageHeaderWithFiltersProps } from '~/widgets/Content/ui/PageHeaderWithFilters';
// import { RecipesSections } from "~/widgets/Content/ui/RecipesSections";
// const title = 'Приятного аппетита';
const dataForPage: PageHeaderWithFiltersProps = {
    title: 'Приятного аппетита',
    // subtitle: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
};

const Home = () => (
    <>
        <PageHeaderWithFilters {...dataForPage}></PageHeaderWithFilters>
        {/* <NavigationTabs category='Веганская кухня'></NavigationTabs> */}
        <RecipesSections></RecipesSections>
    </>
);
export default Home;
