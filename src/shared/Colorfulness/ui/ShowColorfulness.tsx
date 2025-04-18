import { SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { NutritionalInformation } from '~/shared/consts/dataAllCategory';

export const ShowColorfulness: FC<NutritionalInformation> = ({
    calories,
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
                    >
                        {proteins}
                    </Text>
                    <Text
                        as='h5'
                        fontFamily='Inter'
                        fontSize='14px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='20px'
                        color='blackAlpha.900'
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
                    >
                        ГРАММ
                    </Text>
                </Stack>
            </SimpleGrid>
        </VStack>
    </>
);
