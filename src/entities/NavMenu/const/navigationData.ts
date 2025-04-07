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
    icon: React.ElementType;
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
                label: 'Мясные салаты',
                uri: '#',
            },
            {
                label: 'Рыбные салаты',
                uri: '#',
            },
            {
                label: 'Овощные салаты',
                uri: '#',
            },
            {
                label: 'Теплые салаты',
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
                label: 'Мясные закуски',
                uri: '#',
            },
            {
                label: 'Рыбные закуски',
                uri: '#',
            },
            {
                label: 'Овощные закуски',
                uri: '#',
            },
            {
                label: 'Теплые закуски',
                uri: '#',
            },
            {
                label: 'Бутерброды',
                uri: '#',
            },
            {
                label: 'Фастфуд',
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
                label: 'Мясные супы',
                uri: '#',
            },
            {
                label: 'Овощные супы',
                uri: '#',
            },
            {
                label: 'Бульоны',
                uri: '#',
            },
            {
                label: 'Холодные супы',
                uri: '#',
            },
            {
                label: 'Диетические супы',
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
                label: 'Мясные',
                uri: '#',
            },
            {
                label: 'Рыбные',
                uri: '#',
            },
            {
                label: 'Овощные',
                uri: '#',
            },
            {
                label: 'Из птицы',
                uri: '#',
            },
            {
                label: 'Из грибов',
                uri: '#',
            },
            {
                label: 'Из субпродуктов',
                uri: '#',
            },
            {
                label: 'На пару',
                uri: '#',
            },
            {
                label: 'Пельмени, вареники',
                uri: '#',
            },
            {
                label: 'Мучные гарниры',
                uri: '#',
            },
            {
                label: 'Овощные гарниры ',
                uri: '#',
            },
            {
                label: 'Пицца',
                uri: '#',
            },
            {
                label: 'Суши',
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
                label: 'Блины и оладьи',
                uri: '#',
            },
            {
                label: 'Пироги и пончики',
                uri: '#',
            },
            {
                label: 'Торты',
                uri: '#',
            },
            {
                label: 'Рулеты',
                uri: '#',
            },
            {
                label: 'Кексы и маффины',
                uri: '#',
            },
            {
                label: 'Сырники и ватрушки',
                uri: '#',
            },
            {
                label: 'Из слоеного теста',
                uri: '#',
            },
            {
                label: 'Из заварного теста',
                uri: '#',
            },
            {
                label: 'Из дрожжевого теста',
                uri: '#',
            },
            {
                label: 'Булочки и сдоба',
                uri: '#',
            },
            {
                label: 'Хлеб',
                uri: '#',
            },
            {
                label: 'Тесто на пиццу',
                uri: '#',
            },
            {
                label: 'Кремы',
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
                label: 'Говядина',
                uri: '#',
            },
            {
                label: 'Свинина',
                uri: '#',
            },
            {
                label: 'Птица',
                uri: '#',
            },
            {
                label: 'Рыба',
                uri: '#',
            },
            {
                label: 'Грибы',
                uri: '#',
            },
            {
                label: 'Овощи',
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
                label: 'Выпечка',
                uri: '#',
            },
            {
                label: 'Без глютена',
                uri: '#',
            },
            {
                label: 'Без сахара',
                uri: '#',
            },
            {
                label: 'Без аллергенов',
                uri: '#',
            },
            {
                label: 'Блюда для прикорма',
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
            {
                label: 'Без сахара',
                uri: '#',
            },
            {
                label: 'Без глютена',
                uri: '#',
            },
            {
                label: 'Без аллергенов',
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
