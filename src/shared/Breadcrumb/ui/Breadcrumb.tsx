import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation } from 'react-router';

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
    const { data: navigationData } = useGetAllCategoriesQuery();

    // Извлекаем ID рецепта, если он есть
    const recipeId = pathnames.length > 2 ? pathnames[pathnames.length - 1] : '';
    // const recipeTitle = recipeId ? useRecipesIDTitle(recipeId) : '';
    const recipeTitle = useRecipesIDTitle(recipeId);

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

                    // Ищем категорию по текущему пути
                    const categoryObj = navigationData.find(
                        (item) => item.category === currentPath,
                    );
                    let categoryLabel = categoryObj ? categoryObj.title : currentPath; // Заголовок по умолчанию

                    // Если категория не найдена, ищем среди подкатегорий
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

                    // Проверяем, есть ли специальный объект страниц
                    const pageObj = pagesParams.find((page) => page.url === currentPath);
                    if (pageObj) {
                        categoryLabel = pageObj.label;
                    }

                    // Если это ID рецепта, используем его название
                    if (isCurrentPage && recipeId) {
                        categoryLabel = recipeTitle || categoryLabel; // Если название рецепта есть, используем его
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

// import { ChevronRightIcon } from '@chakra-ui/icons';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
// import { useLocation } from 'react-router';

// // import dataAllCategory from '~/shared/consts/dataAllCategory';
// import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

// import { useRecipesIDTitle } from '../hooks/useRecipesIDTitle';

// // import { useRecipesIDTitle } from './'; // Импортируйте ваш хук

// const pagesParams = [
//     {
//         label: 'Самое сочное',
//         url: 'the-juiciest',
//     },
// ];

// export const Breadcrumbs = () => {
//     const title = 'Главная';
//     const location = useLocation();
//     const pathnames = location.pathname.split('/').filter((x) => x);
//     const { data: navigationData } = useGetAllCategoriesQuery();

//     return (
//         <Breadcrumb
//             display='flex'
//             flexWrap='wrap'
//             separator={<ChevronRightIcon color='gray.500' />}
//             data-test-id='breadcrumbs'
//             sx={{
//                 '& > ol': {
//                     flexWrap: 'wrap',
//                     gap: '8px',
//                 },
//             }}
//         >
//             <BreadcrumbItem>
//                 <BreadcrumbLink href='/' color='blackAlpha.700'>
//                     {title}
//                 </BreadcrumbLink>
//             </BreadcrumbItem>

//             {navigationData &&
//                 pathnames.map((currentPath, index) => {
//                     const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//                     const isCurrentPage = index === pathnames.length - 1;

//                     // Ищем категорию по текущему пути
//                     const categoryObj = navigationData.find(
//                         (item) => item.category === currentPath,
//                     );
//                     let categoryLabel = categoryObj ? categoryObj.title : currentPath; // Заголовок по умолчанию

//                     // Если категория не найдена, ищем среди подкатегорий
//                     if (!categoryObj) {
//                         for (const item of navigationData) {
//                             const subitem = item.subCategories?.find(
//                                 (sub) => sub.category === currentPath,
//                             );
//                             if (subitem) {
//                                 categoryLabel = subitem.title;
//                                 break;
//                             }
//                         }
//                     }

//                     // Проверяем, есть ли специальный объект страниц
//                     const pageObj = pagesParams.find((page) => page.url === currentPath);
//                     if (pageObj) {
//                         categoryLabel = pageObj.label;
//                     }

//                     // Если это ID рецепта, ищем его название
//                     if (pathnames.length > 2 && index === pathnames.length - 1) {
//                         const recipeId = currentPath; // последний элемент в пути
//                         const recipeTitle = useRecipesIDTitle(recipeId); // Используем хук
//                         if (recipeTitle) {
//                             categoryLabel = recipeTitle;
//                         }
//                     }

//                     return (
//                         <BreadcrumbItem
//                             key={routeTo}
//                             isCurrentPage={isCurrentPage}
//                             color={isCurrentPage ? 'black' : 'blackAlpha.700'}
//                         >
//                             <BreadcrumbLink href={routeTo}>{categoryLabel}</BreadcrumbLink>
//                         </BreadcrumbItem>
//                     );
//                 })}
//         </Breadcrumb>
//     );
// };

// export default Breadcrumbs;

// import { ChevronRightIcon } from '@chakra-ui/icons';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
// import { useLocation } from 'react-router';

// import dataAllCategory from '~/shared/consts/dataAllCategory';
// import { useGetAllCategoriesQuery } from '~/store/apiQuery/marathonApi';

// const pagesParams = [
//     {
//         label: 'Самое сочное',
//         url: 'the-juiciest',
//     },
// ];

// export const Breadcrumbs = () => {
//     const title = 'Главная';
//     const location = useLocation();
//     const pathnames = location.pathname.split('/').filter((x) => x);
//     const { data: navigationData } = useGetAllCategoriesQuery();
//     console.log('navigationData', navigationData);

//     return (
//         <Breadcrumb
//             display='flex'
//             flexWrap='wrap'
//             separator={<ChevronRightIcon color='gray.500' />}
//             data-test-id='breadcrumbs'
//             sx={{
//                 '& > ol': {
//                     flexWrap: 'wrap',
//                     gap: '8px',
//                 },
//             }}
//         >
//             <BreadcrumbItem>
//                 <BreadcrumbLink href='/' color='blackAlpha.700'>
//                     {title}
//                 </BreadcrumbLink>
//             </BreadcrumbItem>

//             {navigationData &&
//                 pathnames.map((currentPath, index) => {
//                     const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//                     const isCurrentPage = index === pathnames.length - 1;

//                     let categoryLabel = currentPath;

//                     const categoryObj = navigationData.find(
//                         (item) => item.category === currentPath,
//                     );
//                     if (categoryObj) {
//                         categoryLabel = categoryObj.title;
//                     } else {
//                         for (const item of navigationData) {
//                             const subitem = item.subCategories?.find(
//                                 (sub) => sub.category === routeTo,
//                             );
//                             if (subitem) {
//                                 categoryLabel = subitem.title;
//                                 break;
//                             }
//                         }

//                         const pageObj = pagesParams.find((page) => page.url === currentPath);
//                         if (pageObj) {
//                             categoryLabel = pageObj.label;
//                         }

//                         if (typeof +currentPath === 'number' && categoryLabel) {
//                             const currentRecipe = dataAllCategory.find(
//                                 (recipe) => recipe.id === `${currentPath}`,
//                             );

//                             if (currentRecipe) {
//                                 if (currentRecipe.title) {
//                                     categoryLabel = currentRecipe.title;
//                                 }
//                             }
//                         }
//                     }
//                     return (
//                         <BreadcrumbItem
//                             key={routeTo}
//                             isCurrentPage={isCurrentPage}
//                             color={isCurrentPage ? 'black' : 'blackAlpha.700'}
//                         >
//                             <BreadcrumbLink href={routeTo}>{categoryLabel}</BreadcrumbLink>
//                         </BreadcrumbItem>
//                     );
//                 })}
//         </Breadcrumb>
//     );
// };

// export default Breadcrumbs;
