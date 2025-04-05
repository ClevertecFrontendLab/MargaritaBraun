import { ChildrensMealsIcon, SaladsIcon, VeganIcon } from '~/shared/Icons';

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
        uri: '#',
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
        label: 'Десерты, выпечка',
        name: 'Desserts, pastries',
        uri: '#',
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
        label: 'Блюда на гриле',
        name: 'Grilled dishes',
        uri: 'juiciest',
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
        label: 'Веганская кухня',
        name: 'Vegan cuisine',
        icon: VeganIcon,
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
        label: 'Детские блюда',
        name: 'Childrens meals',
        icon: ChildrensMealsIcon,
        uri: '#',
    },
];

export default navigationData;
