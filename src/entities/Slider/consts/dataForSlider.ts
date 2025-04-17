export interface dataForSliderProps {
    imageUrl: string;
    category: string;
    isFavorites?: number;
    isLiked?: number;
    title: string;
    description: string;
}

export const dataForSlider: dataForSliderProps[] = [
    {
        imageUrl: './slider/solyanka-with-mushrooms.png',
        category: 'Первые блюда',
        isFavorites: 1,
        // isLiked: 0,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    // {
    //     imageUrl: './slider/cabbage-patties.png',
    //     category: 'Веганская кухня',
    //     isFavorites: 2,
    //     isLiked: 1,
    //     title: 'Капустные котлеты',
    //     description:
    //         'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
    // },
    {
        imageUrl: './slider/kefir-pancakes-puffy.png',
        category: 'Десерты, выпечка',
        // isFavorites: 85,
        isLiked: 1,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
    },
    {
        imageUrl: './slider/salad-health.png',
        category: 'Салаты',
        isFavorites: 12,
        isLiked: 2,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
    },
    // {
    //     imageUrl: './slider/cabbage-patties.png',
    //     category: 'Национальные',
    //     isFavorites: 85,
    //     isLiked: 152,
    //     title: 'Солянка с грибами',
    //     description: 'Картошка, тушевлеты.',
    // },
    // {
    //     imageUrl: './slider/potatoes-stewed.png',
    //     category: 'Национальные',
    //     isFavorites: 85,
    //     isLiked: 152,
    //     title: 'Солянка с грибами',
    //     description: 'Картошка, тушевлеты.',
    // },
];
