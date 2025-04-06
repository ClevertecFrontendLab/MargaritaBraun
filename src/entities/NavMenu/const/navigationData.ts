import {
    BeveragesIcon,
    BlanksIcon,
    ChildrensMealsIcon,
    DessertsIcon,
    FirstCourses,
    GrilledDishesIcon,
    NationalIcon,
    SaladsIcon,
    SaucesIcon,
    SecondCourses,
    SnacksIcon,
    TherapeuticFoodIcon,
    VeganIcon,
} from '~/shared/Icons';

export type MenuProps = Array<{
    label: string;
    uri: string;
    name: string;
    icon?: React.ElementType;
    subitems?: Array<{ label: string; uri: string }>;
}>;

const navigationData: MenuProps = [
    {
        label: 'Салаты',
        name: 'Salads',
        uri: 'vegan-cuisine',
        icon: SaladsIcon,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Закуски',
        name: 'Snacks',
        uri: 'vegan-cuisine',
        icon: SnacksIcon,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Первые блюда',
        name: 'First courses',
        uri: '#',
        icon: FirstCourses,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Вторые блюда',
        name: 'Second courses',
        uri: '#',
        icon: SecondCourses,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Десерты, выпечка',
        name: 'Desserts, pastries',
        uri: '#',
        icon: DessertsIcon,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Блюда на гриле',
        name: 'Grilled dishes',
        uri: 'juiciest',
        icon: GrilledDishesIcon,
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Веганская кухня',
        name: 'Vegan cuisine',
        icon: VeganIcon,
        uri: 'vegan-cuisine',
        // data-test-id='vegan-cuisine'
        subitems: [
            {
                label: 'Закуски',
                uri: 'vegan-cuisine',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
            {
                label: 'Гарниры',
                uri: '#',
            },
            {
                label: 'Десерты',
                uri: '#',
            },
            {
                label: 'Выпечка',
                uri: '#',
            },
            {
                label: 'Сыроедческие блюда',
                uri: '#',
            },
            {
                label: 'Напитки',
                uri: '#',
            },
        ],
    },
    {
        label: 'Детские блюда',
        name: 'Childrens meals',
        icon: ChildrensMealsIcon,
        uri: '#',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Лечебное питание',
        name: 'Therapeutic food',
        icon: TherapeuticFoodIcon,
        uri: 'vegan-cuisine',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Национальные',
        name: 'National',
        icon: NationalIcon,
        uri: 'vegan-cuisine',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Соусы',
        name: 'Sauces',
        icon: SaucesIcon,
        uri: 'vegan-cuisine',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Напитки',
        name: 'Beverages',
        icon: BeveragesIcon,
        uri: 'vegan-cuisine',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
    {
        label: 'Заготовки',
        name: 'Blanks',
        icon: BlanksIcon,
        uri: 'vegan-cuisine',
        subitems: [
            {
                label: 'Закуски',
                uri: '#',
            },
            {
                label: 'Первые блюда',
                uri: '#',
            },
            {
                label: 'Вторые блюда',
                uri: '#',
            },
        ],
    },
];

export default navigationData;
