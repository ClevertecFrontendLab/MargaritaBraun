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
    Text,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';

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
        <Flex display='column' gap={[2]}>
            <Flex alignItems='center'>
                <Text>Исключить аллергены</Text>
                <Switch
                    size='md'
                    colorScheme='lime'
                    onChange={handleSwitch}
                    isChecked={activated}
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
                        >
                            <Box display='flex' flexWrap='wrap' gap={1}>
                                {fullFilters[filterKey].length > 0
                                    ? fullFilters[filterKey].map((option: string) => (
                                          <Text
                                              as='span'
                                              textStyle='textCardDescription'
                                              noOfLines={1}
                                              key={option}
                                          >
                                              {option}
                                          </Text>
                                      ))
                                    : title}
                            </Box>
                        </MenuButton>
                        <MenuList zIndex='10' w='269px' display='flex' flexDirection='column'>
                            {allOptions.map((option, index) => (
                                <Checkbox
                                    key={option}
                                    colorScheme='lime'
                                    isChecked={fullFilters[filterKey].includes(option)}
                                    onChange={() => handleSelect(option)}
                                    bg={index % 2 === 0 ? 'white' : 'blackAlpha.100'}
                                    p={2}
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
                                />
                                <InputRightElement>
                                    <IconButton
                                        onClick={handleClick}
                                        aria-label='add'
                                        size='xs'
                                        icon={<PlusIcon />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
