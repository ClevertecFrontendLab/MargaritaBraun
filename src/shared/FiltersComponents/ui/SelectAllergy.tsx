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
import { ChangeEvent, FC, useState } from 'react';

import { PlusIcon } from '~/shared/Icons';
import { FieldForFilterProps, FiltersData } from '~/widgets/Content/modal/filtersType';

export const SelectAllergy: FC<FieldForFilterProps> = ({
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

    const handleClick = () => {
        if (addNewAllergy !== '' && !allOptions.includes(addNewAllergy)) {
            setAllOptions((prev) => [...prev, addNewAllergy]);
            setNewAllergy('');
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
                    data-test-id='allergens-switcher'
                />
            </Flex>
            <Menu closeOnSelect={false}>
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
                            borderColor='lime.600'
                            p={['10px 12px']}
                            disabled={!activated}
                            onClick={(e) => {
                                if (!activated) {
                                    e.preventDefault();
                                }
                            }}
                            h='auto'
                            data-test-id='allergens-menu-button'
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
                                            data-test-id='filter-tag'
                                        >
                                            <TagLabel>{option}</TagLabel>
                                        </Tag>
                                    ))}
                                </Box>
                            ) : (
                                <Text textAlign='left'>{title}</Text>
                            )}
                        </MenuButton>
                        <MenuList
                            zIndex='10'
                            w='269px'
                            display='flex'
                            flexDirection='column'
                            data-test-id='allergens-menu'
                        >
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
                            <InputGroup size='md' mt={2}>
                                <Input
                                    type='text'
                                    value={addNewAllergy}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                        setNewAllergy(event.target.value)
                                    }
                                    placeholder='Добавить аллерген'
                                    data-test-id='add-other-allergen'
                                />
                                <InputRightElement>
                                    <IconButton
                                        onClick={handleClick}
                                        aria-label='add'
                                        size='xs'
                                        icon={<PlusIcon />}
                                        data-test-id='add-allergen-button'
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    );
};
