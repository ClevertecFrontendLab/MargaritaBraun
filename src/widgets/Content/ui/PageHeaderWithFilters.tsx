import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    Heading,
    Hide,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useColorInput } from '~/pages/CategoryPage/utils/useColorInput';
import { FiltersDrawer } from '~/shared/Filters';
import filterAllergy from '~/shared/Filters/consts/filterAllergy';
import { SelectAllergy } from '~/shared/FiltersComponents';
import { FiltersIcon } from '~/shared/Icons';

import { FiltersData } from '../modal/filtersType';

export interface PageHeaderWithFiltersProps {
    title: string;
    subtitle?: string;
}

export const PageHeaderWithFilters = ({ title, subtitle }: PageHeaderWithFiltersProps) => {
    const [fullFilters, setfullFilters] = useState<FiltersData>({
        categoryFilter: [],
        autorsFilter: [],
        meatTypeFilter: [],
        sideDishFilter: [],
        allergyFilter: [],
    });

    const [inputSearch, setInputSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (inputSearch.length === 0) {
            searchParams.delete('search');
            setSearchParams(searchParams);
        }
    }, [inputSearch]);

    const placeholderForInput = 'Название или ингредиент...';
    const allergyOptions = filterAllergy;

    const currentColor = useColorInput();

    return (
        <Flex direction='column' align='center' gap={['4', null, null, '8', '8']} pt='8'>
            <Flex gap='3' direction='column' align='center'>
                <Heading
                    as='h1'
                    fontFamily='Inter'
                    fontSize={['24px', null, null, '48px']}
                    lineHeight={['32px', null, null, '48px']}
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
            <Flex gap='3' align='center' justify='space-between' w='80%' alignItems='center'>
                <IconButton
                    variant='outline'
                    bg='transparent'
                    color='black'
                    aria-label='Filters Button'
                    p={['0 10px', null, null, '0 12px']}
                    colorScheme='blackAlpha'
                    size={['sm', null, null, 'lg']}
                    icon={<FiltersIcon />}
                    borderColor='blackAlpha.600'
                    ref={btnRef}
                    data-test-id='filter-button'
                    onClick={() => {
                        setfullFilters({
                            categoryFilter: [],
                            autorsFilter: [],
                            meatTypeFilter: [],
                            sideDishFilter: [],
                            allergyFilter: [],
                        });
                        onOpen();
                    }}
                />
                <InputGroup
                    size={['sm', null, null, 'lg']}
                    colorScheme='grey'
                    borderColor='blackAlpha.600'
                    w='100%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Input
                        size={['sm', null, null, 'lg']}
                        placeholder={placeholderForInput}
                        _placeholder={{ color: 'lime.800' }}
                        _focus={{ borderColor: 'lime.600' }}
                        data-test-id='search-input'
                        value={inputSearch}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setInputSearch(() => event.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && inputSearch.length > 2) {
                                searchParams.set('search', inputSearch);
                                setSearchParams(searchParams);
                            }
                        }}
                        position='relative'
                        borderColor={currentColor}
                    />
                    {inputSearch.length > 2 && (
                        <IconButton
                            size='sm'
                            position='absolute'
                            icon={<CloseIcon />}
                            aria-label='delete'
                            bg='transparent'
                            onClick={() => {
                                setInputSearch(() => '');
                                searchParams.delete('search');
                                setSearchParams(searchParams);
                            }}
                            right='50px'
                            p='0'
                            zIndex='2'
                            boxSize='5'
                        />
                    )}
                    <InputRightElement
                        data-test-id='search-button'
                        pointerEvents={inputSearch.length > 2 ? 'auto' : 'none'}
                        cursor={inputSearch.length > 2 ? 'pointer' : 'not-allowed'}
                        onClick={() => {
                            if (inputSearch.length > 2) {
                                searchParams.set('search', inputSearch);
                                setSearchParams(searchParams);
                            }
                        }}
                    >
                        <SearchIcon color={inputSearch.length > 2 ? 'black' : 'gray.400'} />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Hide below='lg'>
                <Flex w='80%' alignItems='center' justifyContent='center' gap={[4]}>
                    <SelectAllergy
                        title='Выберите из списка...'
                        options={allergyOptions}
                        fullFilters={fullFilters}
                        setfullFilters={setfullFilters}
                        filterKey='allergyFilter'
                    />
                </Flex>
            </Hide>
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
