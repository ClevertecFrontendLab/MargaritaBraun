import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import dataAllCategory from '~/shared/consts/dataAllCategory';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

const pagesParams = [
    {
        label: 'Самое сочное',
        url: 'the-juiciest',
    },
];

export const Breadcrumbs = () => {
    const title = 'Главная';
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const { data: navigationData } = useGetAllCategoriesQuery();

    return (
        <Breadcrumb
            display='flex'
            flexWrap='wrap'
            separator={<ChevronRightIcon color='gray.500' />}
            data-test-id='breadcrumbs'
            sx={{
                '& > ol': {
                    flexWrap: 'wrap',
                    gap: '8px',
                },
            }}
        >
            <BreadcrumbItem>
                <BreadcrumbLink href='/' color='blackAlpha.700'>
                    {title}
                </BreadcrumbLink>
            </BreadcrumbItem>

            {navigationData &&
                pathnames.map((currentPath, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isCurrentPage = index === pathnames.length - 1;

                    let categoryLabel = currentPath;

                    const categoryObj = navigationData.find(
                        (item) => item.category === currentPath,
                    );
                    if (categoryObj) {
                        categoryLabel = categoryObj.title;
                    } else {
                        for (const item of navigationData) {
                            const subitem = item.subCategories?.find(
                                (sub) => sub.category === routeTo,
                            );
                            if (subitem) {
                                categoryLabel = subitem.title;
                                break;
                            }
                        }

                        const pageObj = pagesParams.find((page) => page.url === currentPath);
                        if (pageObj) {
                            categoryLabel = pageObj.label;
                        }

                        if (typeof +currentPath === 'number' && categoryLabel) {
                            const currentRecipe = dataAllCategory.find(
                                (recipe) => recipe.id === `${currentPath}`,
                            );

                            if (currentRecipe) {
                                if (currentRecipe.title) {
                                    categoryLabel = currentRecipe.title;
                                }
                            }
                        }
                    }
                    return (
                        <BreadcrumbItem
                            key={routeTo}
                            isCurrentPage={isCurrentPage}
                            color={isCurrentPage ? 'black' : 'blackAlpha.700'}
                        >
                            <BreadcrumbLink href={routeTo}>{categoryLabel}</BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
