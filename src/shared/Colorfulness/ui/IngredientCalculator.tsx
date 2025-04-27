import {
    Flex,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import { RecipeIngredientDetail } from '~/shared/consts/dataAllCategory';

interface IngredientCalculatorProps {
    ingredients: RecipeIngredientDetail[];
    portions: number;
}

export const IngredientCalculator: FC<IngredientCalculatorProps> = ({ ingredients, portions }) => {
    const [letsPortions, setPortions] = useState(portions);

    const handleChangePortions = (valueString: string) => {
        const newValue = Number(valueString);
        if (newValue > 0) {
            setPortions(newValue);
        }
    };

    const calculateIngredients = (currentPortions: number) => {
        if (currentPortions === 0) {
            return '';
        }
        const resultCalculate = (currentPortions / +portions) * letsPortions;
        return resultCalculate;
    };

    return (
        <>
            <Stack flexDirection='column'>
                <HStack gap='6' h='56px'>
                    <Text
                        textAlign='left'
                        w='50%'
                        color='lime.600'
                        fontFamily='Inter'
                        fontSize='12px'
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight='16px'
                        letterSpacing='0.6px'
                        p={['0 8px', '0 8px', '0 24px']}
                    >
                        ИНГРЕДИЕНТЫ
                    </Text>
                    <Flex
                        alignItems='center'
                        w='100%'
                        justifyContent='flex-end'
                        gap={['3', '3', '4']}
                    >
                        <Text
                            color='lime.600'
                            fontFamily='Inter'
                            fontSize='12px'
                            fontStyle='normal'
                            fontWeight='600'
                            lineHeight='16px'
                            letterSpacing='0.6px'
                        >
                            ПОРЦИЙ
                        </Text>
                        <NumberInput
                            size='md'
                            w='90px'
                            value={letsPortions}
                            min={1}
                            onChange={handleChangePortions}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper data-test-id='increment-stepper' />
                                <NumberDecrementStepper data-test-id='decrement-stepper' />
                            </NumberInputStepper>
                        </NumberInput>
                    </Flex>
                </HStack>
                <Stack w='100%' direction='column'>
                    {ingredients &&
                        ingredients.map((item, index) => (
                            <HStack
                                key={index}
                                bg={index % 2 === 0 ? '#FFF' : 'blackAlpha.100'}
                                w='100%'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Text
                                    w='50%'
                                    fontFamily='Inter'
                                    fontSize='14px'
                                    fontStyle='normal'
                                    fontWeight='400'
                                    lineHeight='20px'
                                    p={['10px 8px', '10px 8px', '16px 24px']}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    w='50%'
                                    textAlign='right'
                                    fontFamily='Inter'
                                    fontSize='14px'
                                    fontStyle='normal'
                                    fontWeight='400'
                                    lineHeight='20px'
                                    p={['12px 8px', '12px 8px', '16px 24px']}
                                    data-test-id={`ingredient-quantity-${index}`}
                                >{`${calculateIngredients(+item.count)} ${item.measureUnit}`}</Text>
                            </HStack>
                        ))}
                </Stack>
            </Stack>
        </>
    );
};
