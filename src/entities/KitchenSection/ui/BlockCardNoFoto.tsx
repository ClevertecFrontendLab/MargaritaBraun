import { CardWithOutFoto } from '~/entities/Card';

import { blockCardNoFotoProps } from '../consts/sectionsType';

interface blockProps {
    dataForCardWithoutFoto: blockCardNoFotoProps[];
}
export const BlockCardNoFoto = ({ dataForCardWithoutFoto }: blockProps) => (
    <>
        {dataForCardWithoutFoto &&
            dataForCardWithoutFoto.map((item) => <CardWithOutFoto key={item.title} {...item} />)}
    </>
);
