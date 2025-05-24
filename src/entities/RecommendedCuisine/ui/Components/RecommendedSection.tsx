import { Flex, Heading, Text } from '@chakra-ui/react';

import { ErrorNotification } from '~/entities/Alert';
import { useGetRecipesBySubCategoryQuery } from '~/store/apiQuery/marathonApi';
import { Recipe } from '~/store/model/categoryType';

import { BlockCardNoFoto } from './BlockCardNoFoto';
import { BlockRowRecipe } from './BlockRowRecipe';

interface RecommendedSectionProps {
    title: string;
    description: string;
    idSubcategory: string;
}

export const RecommendedSection = ({
    title,
    description,
    idSubcategory,
}: RecommendedSectionProps) => {
    const { data: allRecipes, isError } = useGetRecipesBySubCategoryQuery({
        subCategoryId: idSubcategory,
        params: {
            limit: 5,
        },
    });

    if (isError) {
        return <ErrorNotification message='mistake' />;
    }

    const currentRecipes: Recipe[] = allRecipes ? allRecipes.data : [];
    return (
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
                    <BlockCardNoFoto dataForCardWithoutFoto={currentRecipes.slice(0, 2)} />
                    <BlockRowRecipe dataForCardRow={currentRecipes.slice(2, 6)} />
                </Flex>
            </Flex>
        </>
    );
};
