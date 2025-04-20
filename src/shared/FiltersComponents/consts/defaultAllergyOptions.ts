interface defaultAllergyOptionsProps {
    label: string;
    value: string;
    key: string;
}
const defaultAllergyOptions: defaultAllergyOptionsProps[] = [
    { label: 'Молочные продукты', value: 'milk', key: 'milk21' },
    { label: 'Яйцо', value: 'egg', key: 'egg21' },
    { label: 'Рыба', value: 'fish', key: 'fish21' },
    { label: 'Моллюски', value: 'shellfish', key: 'shellfish21' },
    { label: 'Орехи', value: 'nuts', key: 'nuts21' },
    { label: 'Томат (помидор)', value: 'tomato', key: 'tomato21' },
    { label: 'Цитрусовые', value: 'citrus', key: 'citrus21' },
    { label: 'Клубника (ягоды)', value: 'strawberry', key: 'strawberry21' },
    { label: 'Шоколад', value: 'chocolate', key: 'chocolate21' },
];

export default defaultAllergyOptions;
