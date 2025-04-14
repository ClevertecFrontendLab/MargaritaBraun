export interface dataCookingBlogsProps {
    urlToImage: string;
    titleName: string;
    nickName: string;
    review: string;
}

const dataCookingBlogs: dataCookingBlogsProps[] = [
    {
        urlToImage: '../public/cookingBlogs/elenapovar.png',
        titleName: 'Елена Высоцкая',
        nickName: '@elenapovar',
        review: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        urlToImage: '../public/cookingBlogs/elenapovar.png',
        titleName: 'Alex Cook',
        nickName: '@funtasticooking',
        review: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        urlToImage: '../public/cookingBlogs/elenapovar.png',
        titleName: 'Екатерина Константинопольская',
        nickName: '@bake_and_pie',
        review: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export default dataCookingBlogs;
