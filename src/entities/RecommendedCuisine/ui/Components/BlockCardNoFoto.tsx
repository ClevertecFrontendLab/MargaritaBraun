import { CardWithOutFoto } from '~/entities/Card';
import { Recipe } from '~/store/model/categoryType';

interface blockProps {
    dataForCardWithoutFoto: Recipe[];
}
export const BlockCardNoFoto = ({ dataForCardWithoutFoto }: blockProps) => (
    <>
        {dataForCardWithoutFoto &&
            dataForCardWithoutFoto.map((item) => <CardWithOutFoto key={item.title} {...item} />)}
    </>
);
