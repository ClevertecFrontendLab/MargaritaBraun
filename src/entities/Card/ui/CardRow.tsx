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
        <Card
            flexDirection='row'
            size='sm'
            justify='space-between'
            align='center'
            p={['2', '2', '3']}
            gap='2'
        >
            <Icon />

            <Text noOfLines={[1, 1]} w='100%' textAlign='left'>
                {recipeTitle}
            </Text>
            <Button
                colorScheme='teal'
                variant='outline'
                color='lime.300'
                borderColor='lime.300'
                size={['xs', 'xs', 'xs', 'sm']}
            >
                <Text p={['10px', '10px', '2px 10px', '2px 10px']}>Готовить</Text>
            </Button>
        </Card>
    );
};
