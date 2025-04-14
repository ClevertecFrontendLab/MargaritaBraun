import { CardRowProps } from '~/entities/Card/ui/CardRow';

import { blockCardNoFotoProps } from '../../consts/sectionsType';
import { KitchenSection } from '../KitchenSection';

const dataForCardWithoutFoto: blockCardNoFotoProps[] = [
    {
        category: 'Детские блюда',
        isFavorites: 1,
        isLiked: 1,
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
    },
    {
        category: 'Детские блюда',
        isFavorites: 2,
        isLiked: 1,
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
    },
];

const dataForCardRow: CardRowProps[] = [
    {
        category: 'Детские блюда',
        recipeTitle: 'Домашние сырные палочки',
    },
    {
        category: 'Национальные',
        recipeTitle: 'Панкейки',
    },
    {
        category: 'Веганская кухня',
        recipeTitle: 'Воздушное банановое печенье на сковороде',
    },
];

export const VeganKitchen = () => {
    const title = 'Десерты, выпечка';
    const description =
        'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.';
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
