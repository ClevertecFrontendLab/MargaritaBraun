export interface dataForDishesProps {
    imageUrl: string;
    category: string;
    isFavorites: number;
    isLiked: number;
    title: string;
    description: string;
}

const dataForDishes: dataForDishesProps[] = [
    {
        imageUrl: './recipeImage/potatoes-stewed.png',
        category: 'Национальные',
        isFavorites: 85,
        isLiked: 152,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
    },
    {
        imageUrl: './recipeImage/potato-rolls.png',
        category: 'Детские блюда',
        isFavorites: 85,
        isLiked: 152,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
    },
];
export default dataForDishes;
