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
    url: string;
    name: string;
    icon: React.ElementType;
    subitems?: Array<{ label: string; url: string }>;
}>;

const navigationData: MenuProps = [
    {
        label: 'Салаты',
        name: 'Salads',
        url: 'salads',
        icon: SaladsIcon,
        subitems: [
            {
                label: 'Мясные салаты',
                url: '/salads/meat',
            },
            {
                label: 'Рыбные салаты',
                url: '/salads/fish',
            },
            {
                label: 'Овощные салаты',
                url: '/salads/vegitables-salads',
            },
            {
                label: 'Теплые салаты',
                url: '/salads/warm-salads',
            },
        ],
    },
    {
        label: 'Закуски',
        name: 'Snacks',
        url: 'snacks',
        icon: SnacksIcon,
        subitems: [
            {
                label: 'Мясные закуски',
                url: '/snacks/meat',
            },
            {
                label: 'Рыбные закуски',
                url: '/snacks/fish',
            },
            {
                label: 'Овощные закуски',
                url: '/snacks/vegetables',
            },
            {
                label: 'Теплые закуски',
                url: '/snacks/warm-snacks',
            },
            {
                label: 'Бутерброды',
                url: '/snacks/sandwiches',
            },
            {
                label: 'Фастфуд',
                url: '/snacks/fastfood',
            },
        ],
    },
    {
        label: 'Первые блюда',
        name: 'First courses',
        url: 'first-courses',
        icon: FirstCourses,
        subitems: [
            {
                label: 'Мясные супы',
                url: '/first-courses/meat-soup',
            },
            {
                label: 'Овощные супы',
                url: '/first-courses/vegetables-soup',
            },
            {
                label: 'Бульоны',
                url: '/first-courses/broths',
            },
            {
                label: 'Холодные супы',
                url: '/first-courses/cold-soups',
            },
            {
                label: 'Диетические супы',
                url: '/first-courses/diet-soups',
            },
        ],
    },
    {
        label: 'Вторые блюда',
        name: 'Second dish',
        url: 'second-dish',
        icon: SecondCourses,
        subitems: [
            {
                label: 'Мясные',
                url: '/second-dish/meat',
            },
            {
                label: 'Рыбные',
                url: '/second-dish/fish',
            },
            {
                label: 'Овощные',
                url: '/second-dish/veggie',
            },
            {
                label: 'Из птицы',
                // url: '/second-dish/chicken',
                url: '/second-dish/poultry-dish',
            },
            {
                label: 'Из грибов',
                url: '/second-dish/mushrooms',
            },
            {
                label: 'Из субпродуктов',
                url: '/second-dish/offal',
            },
            {
                label: 'На пару',
                url: '/second-dish/steamed',
            },
            {
                label: 'Пельмени, вареники',
                url: '/second-dish/dumplings',
            },
            {
                label: 'Мучные гарниры',
                url: '/second-dish/flour-side-dishes',
            },
            {
                label: 'Овощные гарниры ',
                url: '/second-dish/veggie-side-dishes',
            },
            {
                label: 'Пицца',
                url: '/second-dish/pizza',
            },
            {
                label: 'Суши',
                url: '/second-dish/sushi',
            },
        ],
    },
    {
        label: 'Десерты, выпечка',
        name: 'Desserts, pastries',
        url: 'desserts-pastries',
        icon: DessertsIcon,
        subitems: [
            {
                label: 'Блины и оладьи',
                url: '/desserts-pastries/pancakes',
            },
            {
                label: 'Пироги и пончики',
                url: '/desserts-pastries/pies-donuts',
            },
            {
                label: 'Торты',
                url: '/desserts-pastries/cakes',
            },
            {
                label: 'Рулеты',
                url: '/desserts-pastries/rolls',
            },
            {
                label: 'Кексы и маффины',
                url: '/desserts-pastries/muffins',
            },
            {
                label: 'Сырники и ватрушки',
                url: '/desserts-pastries/cottage-cheese-pastries',
            },
            {
                label: 'Из слоеного теста',
                url: '/desserts-pastries/puff-pastry',
            },
            {
                label: 'Из заварного теста',
                url: '/desserts-pastries/choux-pastry',
            },
            {
                label: 'Из дрожжевого теста',
                url: '/desserts-pastries/yeast-dough',
            },
            {
                label: 'Булочки и сдоба',
                url: '/desserts-pastries/buns',
            },
            {
                label: 'Хлеб',
                url: '/desserts-pastries/bread',
            },
            {
                label: 'Тесто на пиццу',
                url: '/desserts-pastries/pizza-dough',
            },
            {
                label: 'Кремы',
                url: '/desserts-pastries/creams',
            },
        ],
    },
    {
        label: 'Блюда на гриле',
        name: 'Grilled dishes',
        url: 'grilled-dishes',
        icon: GrilledDishesIcon,
        subitems: [
            {
                label: 'Говядина',
                url: '/grilled-dishes/beef',
            },
            {
                label: 'Свинина',
                url: '/grilled-dishes/pork',
            },
            {
                label: 'Птица',
                url: '/grilled-dishes/chicken',
            },
            {
                label: 'Рыба',
                url: '/grilled-dishes/fish',
            },
            {
                label: 'Грибы',
                url: '/grilled-dishes/mushrooms',
            },
            {
                label: 'Овощи',
                url: '/grilled-dishes/vegetables',
            },
        ],
    },
    {
        label: 'Веганская кухня',
        name: 'Vegan cuisine',
        icon: VeganIcon,
        url: 'vegan',
        subitems: [
            {
                label: 'Закуски',
                url: '/vegan/snacks',
            },
            {
                label: 'Первые блюда',
                url: '/vegan/first-courses',
            },
            {
                label: 'Вторые блюда',
                url: '/vegan/second-dish',
            },
            {
                label: 'Гарниры',
                url: '/vegan/side-dishes',
            },
            {
                label: 'Десерты',
                url: '/vegan/desserts',
            },
            {
                label: 'Выпечка',
                url: '/vegan/baking',
            },
            {
                label: 'Сыроедческие блюда',
                url: '/vegan/raw-dishes',
            },
            {
                label: 'Напитки',
                url: '/vegan/drinks',
            },
        ],
    },
    {
        label: 'Детские блюда',
        name: 'Childrens meals',
        url: 'childrens-meals',
        icon: ChildrensMealsIcon,
        subitems: [
            {
                label: 'Первые блюда',
                url: '/childrens-meals/first-courses',
            },
            {
                label: 'Вторые блюда',
                url: '/childrens-meals/second-dish',
            },
            {
                label: 'Гарниры',
                url: '/childrens-meals/side-dishes',
            },
            {
                label: 'Выпечка',
                url: '/childrens-meals/baking',
            },
            {
                label: 'Без глютена',
                url: '/childrens-meals/gluten-free',
            },
            {
                label: 'Без сахара',
                url: '/childrens-meals/sugar-free',
            },
            {
                label: 'Без аллергенов',
                url: '/childrens-meals/allergen-free',
            },
            {
                label: 'Блюда для прикорма',
                url: '/childrens-meals/first-food',
            },
        ],
    },
    {
        label: 'Лечебное питание',
        name: 'Therapeutic food',
        icon: TherapeuticFoodIcon,
        url: 'therapeutic-food',
        subitems: [
            {
                label: 'Детская диета',
                url: '/therapeutic-food/childrens-diet',
            },
            {
                label: 'Диета №1',
                url: '/therapeutic-food/diet-1',
            },
            {
                label: 'Диета №2',
                url: '/therapeutic-food/diet-2',
            },
            {
                label: 'Диета №3',
                url: '/therapeutic-food/diet-3',
            },
            {
                label: 'Диета №4',
                url: '/therapeutic-food/diet-4',
            },
            {
                label: 'Диета №5',
                url: '/therapeutic-food/diet-5',
            },
            {
                label: 'Диета №6',
                url: '/therapeutic-food/diet-6',
            },
            {
                label: 'Диета №7',
                url: '/therapeutic-food/diet-7',
            },
            {
                label: 'Диета №8',
                url: '/therapeutic-food/diet-8',
            },
            {
                label: 'Диета №9',
                url: '/therapeutic-food/diet-9',
            },
            {
                label: 'Диета №10',
                url: '/therapeutic-food/diet-10',
            },
            {
                label: 'Диета №11',
                url: '/therapeutic-food/diet-11',
            },
            {
                label: 'Диета №12',
                url: '/therapeutic-food/diet-12',
            },
            {
                label: 'Диета №13',
                url: '/therapeutic-food/diet-13',
            },
            {
                label: 'Диета №14',
                url: '/therapeutic-food/diet-14',
            },
            {
                label: 'Без глютена',
                url: '/therapeutic-food/gluten-free',
            },
            {
                label: 'Без аллергенов',
                url: '/therapeutic-food/allergen-free',
            },
        ],
    },
    {
        label: 'Национальные',
        name: 'National',
        icon: NationalIcon,
        url: 'national',
        subitems: [
            {
                label: 'Американская кухня',
                url: '/national/american',
            },
            {
                label: 'Армянская кухня',
                url: '/national/armenian',
            },
            {
                label: 'Греческая кухня',
                url: '/national/greek',
            },
            {
                label: 'Грузинская кухня',
                url: '/national/georgian',
            },
            {
                label: 'Итальянская кухня',
                url: '/national/italian',
            },
            {
                label: 'Китайская кухня',
                url: '/national/chinese',
            },
            {
                label: 'Мексиканская кухня',
                url: '/national/mexican',
            },
            {
                label: 'Паназиатская кухня',
                url: '/national/pan-asian',
            },
            {
                label: 'Русская кухня',
                url: '/national/russian',
            },
            {
                label: 'Турецкая кухня',
                url: '/national/turkish',
            },
            {
                label: 'Французская кухня',
                url: '/national/french',
            },
            {
                label: 'Шведская кухня',
                url: '/national/swedish',
            },
            {
                label: 'Японская кухня',
                url: '/national/japanese',
            },
            {
                label: 'Другая кухня',
                url: '/national/other',
            },
        ],
    },
    {
        label: 'Соусы',
        name: 'Sauces',
        icon: SaucesIcon,
        url: 'sauces',
        subitems: [
            {
                label: 'Соусы мясные',
                url: '/sauces/meat-sauces',
            },
            {
                label: 'Соусы сырные',
                url: '/sauces/cheese-sauces',
            },
            {
                label: 'Маринады',
                url: '/sauces/marinades',
            },
        ],
    },
    {
        label: 'Напитки',
        name: 'Beverages',
        icon: BeveragesIcon,
        url: 'beverages',
        subitems: [
            {
                label: 'Соки и фреши',
                url: '/beverages/juices',
            },
            {
                label: 'Смузи',
                url: '/beverages/smoothies',
            },
            {
                label: 'Компоты',
                url: '/beverages/compotes',
            },
            {
                label: 'Кисели',
                url: '/beverages/jellies',
            },
            {
                label: 'Кофе',
                url: '/beverages/coffee',
            },
            {
                label: 'Квас',
                url: '/beverages/kvas',
            },
            {
                label: 'Коктейли',
                url: '/beverages/cocktails',
            },
            {
                label: 'Алкогольные',
                url: '/beverages/alcoholic',
            },
        ],
    },
    {
        label: 'Заготовки',
        name: 'Blanks',
        icon: BlanksIcon,
        url: 'blanks',
        subitems: [
            {
                label: 'Мясные заготовки',
                url: '/blanks/meat-blanks',
            },
            {
                label: 'Рыбные заготовки',
                url: '/blanks/fish-blanks',
            },
            {
                label: 'Из огурцов',
                url: '/blanks/cucumber-blanks',
            },
            {
                label: 'Из томатов',
                url: '/blanks/tomato-blanks',
            },
            {
                label: 'Из грибов',
                url: '/blanks/mushroom-blanks',
            },
            {
                label: 'Овощные заготовки',
                url: '/blanks/veggie-blanks',
            },
            {
                label: 'Салаты, икра',
                url: '/blanks/salads-caviar',
            },
            {
                label: 'Из фруктов и ягод',
                url: '/blanks/fruit-berry-blanks',
            },
        ],
    },
];

export default navigationData;
