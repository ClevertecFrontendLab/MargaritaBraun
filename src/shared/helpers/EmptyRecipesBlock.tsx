import { Flex, Text } from '@chakra-ui/react';

interface EmptyRecipesBlockProps {
    message: string;
}

export const EmptyRecipesBlock = ({ message }: EmptyRecipesBlockProps) => (
    <>
        <Flex>
            <Text fontSize='xl'>{message}</Text>
        </Flex>
    </>
);
