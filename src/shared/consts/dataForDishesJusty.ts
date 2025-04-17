export interface dataForDishesProps {
    imageUrl: string;
    category: string;
    isFavorites: number;
    isLiked: number;
    title: string;
    description: string;
}

const dataForDishesJusty: dataForDishesProps[] = [
    // {
    //     imageUrl: '../public/homeJuiciest/noodles-with-chicken.png',
    //     category: 'Вторые блюда',
    //     isFavorites: 258,
    //     isLiked: 342,
    //     title: 'Лапша с курицей и шафраном',
    //     description:
    //         'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    // },
    {
        imageUrl: '../public/recipeImage/tom-yam.png',
        category: 'Национальные',
        isFavorites: 124,
        isLiked: 324,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        imageUrl: '../public/homeJuiciest/spicy-Italian-ham.png',
        category: 'Вторые блюда',
        isFavorites: 159,
        isLiked: 257,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        imageUrl: '../public/homeJuiciest/spaghetti-dumplings.png',
        category: 'Вторые блюда',
        isFavorites: 85,
        isLiked: 152,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    // {
    //     imageUrl: '../public/recipeImage/potatoes-stewed.png',
    //     category: 'Национальные',
    //     isFavorites: 85,
    //     isLiked: 152,
    //     title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
    //     description:
    //         'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
    // },
    {
        imageUrl: '../public/recipeImage/potato-rolls.png',
        category: 'Детские блюда',
        isFavorites: 85,
        isLiked: 152,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
    },
    {
        imageUrl: '../public/recipeImage/vegetable-pita-lasagna.png',
        category: 'Блюда на гриле',
        isFavorites: 85,
        isLiked: 152,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
    },
    {
        imageUrl: '../public/recipeImage/meatballs.png',
        category: 'Вторые блюда',
        isFavorites: 85,
        isLiked: 152,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
    },
];
export default dataForDishesJusty;
