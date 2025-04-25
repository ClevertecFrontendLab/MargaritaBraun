import { Badge, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { PreparationStep } from '~/shared/consts/dataAllCategory';

export const PreparationSteps: FC<{ steps: PreparationStep[] }> = ({ steps }) => {
    const defaultImage = '../../public/stepsCooking/step-3.png';

    return (
        <>
            <Flex direction='column' gap={[2, 5]}>
                <Heading
                    as='h2'
                    fontFamily='Inter'
                    fontSize={['24px', '24px', '24px', '24px', '48px', null]}
                    fontStyle='normal'
                    fontWeight='500'
                    lineHeight={['32px', '32px', '32px', '32px', '48px', null]}
                >
                    Шаги приготовления
                </Heading>
                {steps &&
                    steps.map((nowStep) => (
                        <Card direction='row' key={nowStep.stepNumber}>
                            {nowStep.image && (
                                <Flex w='45%'>
                                    <Image
                                        src={nowStep.image === 'url' ? nowStep.image : defaultImage}
                                    />
                                </Flex>
                            )}
                            <Flex direction='column' gap={['4', '4']} p={['20px 24px']}>
                                <Badge w='57px'>
                                    <Text textStyle='textCardDescription'>{`Шаг ${nowStep.stepNumber}`}</Text>
                                </Badge>
                                <Text textStyle='textCardDescription'>{nowStep.description}</Text>
                            </Flex>
                        </Card>
                    ))}
            </Flex>
        </>
    );
};
