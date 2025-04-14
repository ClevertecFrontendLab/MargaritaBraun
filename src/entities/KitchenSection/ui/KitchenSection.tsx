import { Flex, Heading, Text } from '@chakra-ui/react';

import { CardRowProps } from '~/entities/Card/ui/CardRow';

import { blockCardNoFotoProps } from '../consts/sectionsType';
import { BlockCardNoFoto } from './BlockCardNoFoto';
import { BlockRowRecipe } from './BlockRowRecipe';

interface KitchenSectionProps {
    title: string;
    description: string;
    dataForCardWithoutFoto: blockCardNoFotoProps[];
    dataForCardRow: CardRowProps[];
}
export const KitchenSection = ({
    title,
    description,
    dataForCardWithoutFoto,
    dataForCardRow,
}: KitchenSectionProps) => (
    <>
        <Flex direction='column' pt={['16px', null, '24px']} pb='2'>
            <Flex
                direction={['column', null, null, 'row']}
                gap={['3', null, null, '0']}
                justify='space-between'
            >
                <Heading
                    as='h3'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize={['20px', '24px', '24px', '30px', '36px', '48px']}
                    lineHeight={['30px', '32px', '32px', '38px', '40px', '48px']}
                >
                    {title}
                </Heading>
                <Text
                    color='blackAlpha.700'
                    fontFamily='Inter'
                    fontSize={['14px', '14px', null, null, '16px']}
                    lineHeight={['20px', '20px', null, null, '24px']}
                    maxW={{ md: '100%', xl: '578px', '2xl': '668px' }}
                >
                    {description}
                </Text>
            </Flex>
            <Flex
                gap={['3', '3', null, '4', '6']}
                justify='space-between'
                direction={{ base: 'column', md: 'row' }}
                pt={{ base: '12px', md: '24px' }}
            >
                <BlockCardNoFoto dataForCardWithoutFoto={dataForCardWithoutFoto} />
                <BlockRowRecipe dataForCardRow={dataForCardRow} />
            </Flex>
        </Flex>
    </>
);
