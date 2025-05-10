import { SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { NutritionValue } from '~/store/model/categoryType';

export const ShowColorfulness: FC<NutritionValue> = ({
    calories,
    protein,
    proteins,
    fats,
    carbohydrates,
}) => (
    <>
        <VStack w='100%'>
            <Text
                as='h4'
                color='blackAlpha.800'
                alignSelf='flex-start'
                textStyle='textCardDescription'
            >
                * Калорийность на 1 порцию
            </Text>
            <SimpleGrid
                columns={[1, 1, 4, 4, 4]}
                spacing={6}
                w='100%'
                justifyContent='space-around'
            >
                <Stack
                    spacing={8}
                    direction={['row', null, 'column']}
                    border='1px'
                    borderColor='blackAlpha.200'
                    borderRadius='16px'
                    p={['16px 12px', null, 4]}
                    gap={[1, 1, 3, 3]}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='400'
                        lineHeight='20px'
                        color='blackAlpha.600'
                        flexBasis={['33%', null, 'auto']}
                    >
                        калорийность
                    </Text>
                    <Text
                        as='h4'
                        fontFamily='Inter'
                        fontSize={['24px', null, null, null, '36px']}
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight={['32px', null, null, null, '40px']}
                        color='lime.800'
                        w='100px'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        {calories}
                    </Text>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='20px'
                        color='blackAlpha.900'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        ККАЛ
                    </Text>
                </Stack>

                <Stack
                    spacing={8}
                    direction={['row', null, 'column']}
                    border='1px'
                    borderColor='blackAlpha.200'
                    borderRadius='16px'
                    p={['16px 12px', null, 4]}
                    gap={[1, 1, 3, 3]}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='400'
                        lineHeight='20px'
                        color='blackAlpha.600'
                        flexBasis={['33%', null, 'auto']}
                    >
                        белки
                    </Text>
                    <Text
                        as='h4'
                        fontFamily='Inter'
                        fontSize={['24px', null, null, null, '36px']}
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight={['32px', null, null, null, '40px']}
                        color='lime.800'
                        w='100px'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        {protein ? protein : proteins}
                    </Text>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='20px'
                        color='blackAlpha.900'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        ГРАММ
                    </Text>
                </Stack>

                <Stack
                    spacing={8}
                    direction={['row', null, 'column']}
                    border='1px'
                    borderColor='blackAlpha.200'
                    borderRadius='16px'
                    p={['16px 12px', null, 4]}
                    gap={[1, 1, 3, 3]}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='400'
                        lineHeight='20px'
                        color='blackAlpha.600'
                        flexBasis={['33%', null, 'auto']}
                    >
                        жиры
                    </Text>
                    <Text
                        as='h4'
                        fontFamily='Inter'
                        fontSize={['24px', null, null, null, '36px']}
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight={['32px', null, null, null, '40px']}
                        color='lime.800'
                        w='100px'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        {fats}
                    </Text>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='20px'
                        color='blackAlpha.900'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        ГРАММ
                    </Text>
                </Stack>

                <Stack
                    spacing={8}
                    direction={['row', null, 'column']}
                    border='1px'
                    borderColor='blackAlpha.200'
                    borderRadius='16px'
                    p={['16px 12px', null, 4]}
                    gap={[1, 1, 3, 3]}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='400'
                        lineHeight='20px'
                        color='blackAlpha.600'
                        flexBasis={['33%', null, 'auto']}
                    >
                        углеводы
                    </Text>
                    <Text
                        as='h4'
                        fontFamily='Inter'
                        fontSize={['24px', null, null, null, '36px']}
                        fontStyle='normal'
                        fontWeight='500'
                        lineHeight={['32px', null, null, null, '40px']}
                        color='lime.800'
                        w='100px'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        {carbohydrates}
                    </Text>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='20px'
                        color='blackAlpha.900'
                        textAlign='center'
                        flexBasis={['33%', null, 'auto']}
                    >
                        ГРАММ
                    </Text>
                </Stack>
            </SimpleGrid>
        </VStack>
    </>
);
