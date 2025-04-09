import { Button, Card, Text } from '@chakra-ui/react';

import getCategoryData from '~/entities/NavMenu/utils/getCategoryData';

export interface CardRowProps {
    category: string;
    recipeTitle: string;
}

export const CardRow = ({ category, recipeTitle }: CardRowProps) => {
    const categoryData = getCategoryData(category);
    const Icon = categoryData.icon;
    return (
        <Card flexDirection='row' size='sm' justify='space-between' align='center' p={['1.5', '2']}>
            <Icon />

            <Text noOfLines={[1, 1]}>{recipeTitle}</Text>
            <Button
                colorScheme='teal'
                variant='outline'
                color='lime.300'
                borderColor='lime.300'
                size='md'
            >
                Готовить
            </Button>
        </Card>
    );
};
