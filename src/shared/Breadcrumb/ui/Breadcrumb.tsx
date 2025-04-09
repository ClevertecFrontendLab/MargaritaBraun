import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';

const pagesParams = [
    {
        label: 'Самое сочное',
        url: 'juiciest',
    },
];

export const Breadcrumbs = () => {
    const title = 'Главная';
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <Flex flexGrow='1' pl='112px' display={{ base: 'none', lg: 'flex' }}>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>{title}</BreadcrumbLink>
                </BreadcrumbItem>

                {pathnames.map((currentPath, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isCurrentPage = index === pathnames.length - 1;

                    let categoryLabel = currentPath;

                    const categoryObj = navigationData.find((item) => item.url === currentPath);
                    if (categoryObj) {
                        categoryLabel = categoryObj.label;
                    } else {
                        for (const item of navigationData) {
                            const subitem = item.subitems?.find((sub) => sub.url === routeTo);
                            if (subitem) {
                                categoryLabel = subitem.label;
                                break;
                            }
                        }

                        const pageObj = pagesParams.find((page) => page.url === currentPath);
                        if (pageObj) {
                            categoryLabel = pageObj.label;
                        }
                    }
                    return (
                        <BreadcrumbItem key={routeTo} isCurrentPage={isCurrentPage}>
                            <BreadcrumbLink href={routeTo}>{categoryLabel}</BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </Flex>
    );
};

export default Breadcrumbs;
