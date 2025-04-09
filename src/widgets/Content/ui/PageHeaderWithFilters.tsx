import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';

import { FiltersIcon } from '~/shared/Icons';

export interface PageHeaderWithFiltersProps {
    title: string;
    subtitle?: string;
}

export const PageHeaderWithFilters = ({ title, subtitle }: PageHeaderWithFiltersProps) => {
    const placeholderForInput = 'Название или ингредиент...';
    return (
        <Flex direction='column' align='center' gap='8' py='8'>
            <Flex gap='3' direction='column' align='center'>
                <Heading
                    as='h1'
                    fontFamily='Inter'
                    fontSize={{ base: '24px', md: '48px' }}
                    lineHeight={{ base: '32px', md: '48px' }}
                >
                    {title}
                </Heading>
                {subtitle && (
                    <Text
                        textStyle='textParagraph'
                        color='blackAlpha.600'
                        maxW='696px'
                        textAlign='center'
                    >
                        {subtitle}
                    </Text>
                )}
            </Flex>
            <Flex gap='3'>
                <IconButton
                    variant='outline'
                    bg='transparent'
                    color='black'
                    aria-label='Filters Button'
                    colorScheme='blackAlpha'
                    size='lg'
                    icon={<FiltersIcon />}
                    borderColor='blackAlpha.600'
                />
                <InputGroup w='458px' size='lg' colorScheme='grey' borderColor='blackAlpha.600'>
                    <Input placeholder={placeholderForInput} _placeholder={{ color: 'lime.800' }} />
                    <InputRightElement>
                        <SearchIcon color='black' />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex gap='4' mt='-16px'>
                <FormControl
                    display='flex'
                    alignItems='center'
                    padding='6px 0px 6px 8px'
                    gap='3'
                    w='260px'
                >
                    <FormLabel
                        htmlFor='exclude-my-allergens'
                        m='0'
                        size='md'
                        lineHeight='24px'
                        fontFamily='Inter'
                        whiteSpace='nowrap'
                    >
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='exclude-my-allergens' />
                </FormControl>
                <Select placeholder='Выберите из списка...' size='lg'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </Flex>
        </Flex>
    );
};
