import { Button, Card, Image, Text } from '@chakra-ui/react';

import { IMAGE_URL } from '~/query/constants/apiConsts';

import { useCategoryAtSubCategID } from '../hooks/useCategoryAtSubCategID';
export interface CardRowProps {
    categoriesIds: string[];
    title: string;
}

export const CardRow = ({ title, categoriesIds }: CardRowProps) => {
    const associatedCategories = useCategoryAtSubCategID(categoriesIds);
    const currentCategory = associatedCategories[0];
    return (
        <Card
            flexDirection='row'
            size='sm'
            justify='space-between'
            align='center'
            p={['2', '2', '3']}
            gap='2'
        >
            {currentCategory && (
                <Image
                    src={`${IMAGE_URL}${currentCategory?.icon}`}
                    boxSize={['14px', null, null, '16px']}
                />
            )}

            <Text noOfLines={[1, 1]} w='100%' textAlign='left'>
                {title}
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
