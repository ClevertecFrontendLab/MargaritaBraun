import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuList,
    Switch,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { PlusIcon } from '~/shared/Icons';
import { FieldForFilterProps, FiltersData } from '~/widgets/Content/modal/filtersType';

export const SelectAllergyWithSwitch: FC<FieldForFilterProps> = ({
    title,
    options,
    fullFilters,
    setfullFilters,
    filterKey,
}) => {
    const [allOptions, setAllOptions] = useState<string[]>(options);
    const [addNewAllergy, setNewAllergy] = useState('');
    const [activated, setActivated] = useState(false);

    const handleSelect = (value: string) => {
        setfullFilters((prev: FiltersData) => {
            const currentValues = prev[filterKey] || [];

            if (currentValues.includes(value)) {
                return {
                    ...prev,
                    [filterKey]: currentValues.filter((option) => option !== value),
                };
            } else {
                return {
                    ...prev,
                    [filterKey]: [...currentValues, value],
                };
            }
        });
    };

    const handleAddAllergy = () => {
        const trimmedValue = addNewAllergy.trim();
        if (!trimmedValue) return;

        if (!allOptions.includes(trimmedValue)) {
            setAllOptions((prev) => [...prev, trimmedValue]);
        }

        setfullFilters((prev: FiltersData) => ({
            ...prev,
            [filterKey]: [...(prev[filterKey] || []), trimmedValue],
        }));

        setNewAllergy('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddAllergy();
        }
    };

    const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setActivated(isChecked);

        if (!isChecked) {
            setfullFilters((prev: FiltersData) => ({
                ...prev,
                [filterKey]: [],
            }));
        }
    };

    return (
        <>
            <Flex alignItems='center' gap={[3]}>
                <Text
                    whiteSpace='nowrap'
                    fontFamily='Inter'
                    fontSize='16px'
                    fontStyle='normal'
                    fontWeight='500'
                    lineHeight='24px'
                >
                    Исключить аллергены
                </Text>
                <Switch
                    size='md'
                    colorScheme='lime'
                    onChange={handleSwitch}
                    isChecked={activated}
                    data-test-id='allergens-switcher-filter'
                />
            </Flex>
            <Menu closeOnSelect={false} matchWidth={true}>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={Button}
                            isActive={isOpen}
                            variant='outline'
                            w='100%'
                            rightIcon={
                                <ChevronDownIcon
                                    transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                                />
                            }
                            colorScheme='white'
                            borderColor='blackAlpha.200'
                            _focus={{ borderColor: 'lime.300' }}
                            p={['10px 12px']}
                            disabled={!activated}
                            onClick={(e) => {
                                if (!activated) {
                                    e.preventDefault();
                                }
                            }}
                            h='auto'
                            data-test-id='allergens-menu-button-filter'
                        >
                            {fullFilters[filterKey].length > 0 ? (
                                <Box display='flex' flexWrap='wrap' gap={1} h='auto'>
                                    {fullFilters[filterKey].map((option: string) => (
                                        <Tag
                                            key={option}
                                            colorScheme='lime'
                                            color='lime.400'
                                            borderColor='lime.400'
                                            border='1px'
                                            mr={1}
                                        >
                                            <TagLabel>{option}</TagLabel>
                                        </Tag>
                                    ))}
                                </Box>
                            ) : (
                                <Text textAlign='left' as='span' color='blackAlpha.700'>
                                    {title}
                                </Text>
                            )}
                        </MenuButton>
                        <MenuList zIndex='10' w='100%' display='flex' flexDirection='column'>
                            {allOptions.map((option, index) => (
                                <Checkbox
                                    key={option}
                                    colorScheme='lime'
                                    isChecked={fullFilters[filterKey].includes(option)}
                                    onChange={() => handleSelect(option)}
                                    bg={index % 2 === 0 ? 'white' : 'blackAlpha.100'}
                                    p={2}
                                    data-test-id={`allergen-${index}`}
                                >
                                    {option}
                                </Checkbox>
                            ))}
                            {isOpen && (
                                <InputGroup size='md' mt={2}>
                                    <Input
                                        type='text'
                                        value={addNewAllergy}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            setNewAllergy(event.target.value)
                                        }
                                        placeholder='Добавить аллерген'
                                        data-test-id='add-other-allergen'
                                        onKeyDown={handleKeyDown}
                                    />
                                    <InputRightElement>
                                        <IconButton
                                            aria-label='add'
                                            size='xs'
                                            icon={<PlusIcon />}
                                            data-test-id='add-allergen-button'
                                            onClick={handleAddAllergy}
                                        />
                                    </InputRightElement>
                                </InputGroup>
                            )}
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    );
};
