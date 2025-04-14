import { CardRowProps } from '~/entities/Card/ui/CardRow';

import { blockCardNoFotoProps } from '../../consts/sectionsType';
import { KitchenSection } from '../KitchenSection';

const dataForCardWithoutFoto: blockCardNoFotoProps[] = [
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

const dataForCardRow: CardRowProps[] = [
    {
        category: 'Вторые блюда',
        recipeTitle: 'Стейк для вегетарианцев',
    },
    {
        category: 'Вторые блюда',
        recipeTitle: 'Котлеты из гречки и фасоли',
    },
    {
        category: 'Первые блюда',
        recipeTitle: 'Сырный суп с лапшой и брокколи',
    },
];

export const HomeKitchen = () => {
    const title = 'Веганская кухня';
    const description =
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';
    return (
        <>
            <KitchenSection
                dataForCardRow={dataForCardRow}
                title={title}
                description={description}
                dataForCardWithoutFoto={dataForCardWithoutFoto}
            />
        </>
    );
};
