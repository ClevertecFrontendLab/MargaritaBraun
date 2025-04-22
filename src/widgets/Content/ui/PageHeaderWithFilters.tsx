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
    Switch,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

import { FiltersDrawer } from '~/shared/Filters';
import { SelectAllergy } from '~/shared/FiltersComponents';
import { FiltersIcon } from '~/shared/Icons';

import { FiltersData } from '../modal/filtersType';

export interface PageHeaderWithFiltersProps {
    title: string;
    subtitle?: string;
}

export const PageHeaderWithFilters = ({ title, subtitle }: PageHeaderWithFiltersProps) => {
    const placeholderForInput = 'Название или ингредиент...';
    const [switchAllergy, setswitchAllergy] = useState(false);

    const [fullFilters, setfullFilters] = useState<FiltersData>({
        categoryFilter: [],
        autorsFilter: [],
        meatTypeFilter: [],
        sideDishFilter: [],
        allergyFilter: [],
    });

    const btnRef = useRef<HTMLButtonElement | null>(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('switch', event.target.checked);
        setswitchAllergy(() => event.target.checked);
    };

    return (
        <Flex direction='column' align='center' gap={['4', null, null, '8', '8']} pt='8'>
            <Flex gap='3' direction='column' align='center'>
                <Heading
                    as='h1'
                    fontFamily='Inter'
                    fontSize={{ base: '24px', md: '48px' }}
                    lineHeight={{ base: '32px', md: '48px' }}
                    textAlign='center'
                >
                    {title}
                </Heading>
                {subtitle && (
                    <Text
                        textStyle='textParagraph'
                        color='blackAlpha.600'
                        maxW={['100%', null, null, '696px']}
                        textAlign='center'
                    >
                        {subtitle}
                    </Text>
                )}
            </Flex>
            <Flex gap='3' align='center' justify='center'>
                <IconButton
                    variant='outline'
                    bg='transparent'
                    color='black'
                    aria-label='Filters Button'
                    p={['0 10px', '0 10px', '0 12px']}
                    colorScheme='blackAlpha'
                    size={['sm', 'lg']}
                    icon={<FiltersIcon />}
                    borderColor='blackAlpha.600'
                    ref={btnRef}
                    onClick={onOpen}
                />
                <InputGroup
                    size={['sm', 'lg']}
                    colorScheme='grey'
                    borderColor='blackAlpha.600'
                    maxW={['100%', null, null, '458px']}
                >
                    <Input placeholder={placeholderForInput} _placeholder={{ color: 'lime.800' }} />
                    <InputRightElement>
                        <SearchIcon color='black' />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex gap='4' display={['none', 'flex']}>
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
                        colorScheme='lime.400'
                    >
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch
                        id='exclude-my-allergens'
                        isChecked={switchAllergy}
                        onChange={handleSwitch}
                        colorScheme='lime'
                    />
                </FormControl>
                <SelectAllergy isEnabled={switchAllergy} />
            </Flex>
            <FiltersDrawer
                btnRef={btnRef}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                fullFilters={fullFilters}
                setfullFilters={setfullFilters}
            />
        </Flex>
    );
};
