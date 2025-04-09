import { CardWithOutFoto } from '~/entities/Card';

export interface blockCardNoFotoProps {
    category: string;
    isFavorites: number;
    isLiked: number;
    title: string;
    description: string;
}

export const BlockCardNoFoto = () => {
    const data: blockCardNoFotoProps[] = [
        {
            category: 'Вторые блюда',
            isFavorites: 1,
            isLiked: 1,
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        },
        {
            category: 'Вторые блюда',
            isFavorites: 2,
            isLiked: 1,
            title: 'Капустные котлеты',
            description:
                'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        },
    ];
    return <>{data && data.map((item) => <CardWithOutFoto key={item.title} {...item} />)}</>;
};
