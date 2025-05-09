import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import Loading from '~/app/Loading/Loading';
import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

import { useRecipesIDTitle } from '../hooks/useRecipesIDTitle';

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
    const { data: navigationData, isLoading } = useGetAllCategoriesQuery();

    const recipeId = pathnames.length > 2 ? pathnames[pathnames.length - 1] : '';
    const recipeTitle = useRecipesIDTitle(recipeId);

    if (isLoading) return <Loading />;

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

                    const categoryObj = navigationData.find(
                        (item) => item.category === currentPath,
                    );
                    let categoryLabel = categoryObj ? categoryObj.title : currentPath;

                    if (!categoryObj) {
                        for (const item of navigationData) {
                            const subitem = item.subCategories?.find(
                                (sub) => sub.category === currentPath,
                            );
                            if (subitem) {
                                categoryLabel = subitem.title;
                                break;
                            }
                        }
                    }

                    const pageObj = pagesParams.find((page) => page.url === currentPath);
                    if (pageObj) {
                        categoryLabel = pageObj.label;
                    }

                    if (isCurrentPage && recipeId) {
                        categoryLabel = recipeTitle || categoryLabel;
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
