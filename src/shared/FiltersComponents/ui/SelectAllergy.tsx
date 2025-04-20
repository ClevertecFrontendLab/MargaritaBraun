import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuList,
    Tag,
    TagCloseButton,
    TagLabel,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';

import { PlusIcon } from '~/shared/Icons';

import defaultAllergyOptions from '../consts/defaultAllergyOptions';

interface SelectAllergyProps {
    isEnabled: boolean;
}

export const SelectAllergy: FC<SelectAllergyProps> = ({ isEnabled }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [allOptions, setAllOptions] = useState([...defaultAllergyOptions]);
    const [addNewAllergy, setNewAllergy] = useState('');

    const handleSelect = (value: string) => {
        setSelectedOptions((prev) => {
            if (prev.includes(value)) {
                return prev.filter((option) => option !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleClick = () => {
        if (
            addNewAllergy !== '' &&
            !allOptions.find(
                (allergy) => allergy.label.toLowerCase() === addNewAllergy.toLowerCase(),
            )
        ) {
            const newOptionObject = {
                label: addNewAllergy,
                value: addNewAllergy.toLowerCase(),
                key: addNewAllergy + Math.random(),
            };
            setAllOptions((prev) => [...prev, newOptionObject]);
            setNewAllergy('');
        }
    };

    return (
        <>
            {isEnabled ? (
                <Menu closeOnSelect={false}>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                as={Button}
                                isActive={isOpen}
                                variant='outline'
                                w='269px'
                                rightIcon={
                                    <ChevronDownIcon
                                        transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                                    />
                                }
                                colorScheme='white'
                                borderColor='lime.600'
                                p={['10px 12px']}
                            >
                                <Box display='flex' flexWrap='wrap' gap={1}>
                                    {selectedOptions.length > 0
                                        ? selectedOptions.map((option) => {
                                              const selectedOption = allOptions.find(
                                                  (o) => o.value === option,
                                              );
                                              return (
                                                  <Tag
                                                      key={selectedOption?.key}
                                                      size='sm'
                                                      variant='outline'
                                                      borderColor='lime.600'
                                                      bg='transparent'
                                                      mr={2}
                                                  >
                                                      <TagLabel>{selectedOption?.label}</TagLabel>
                                                      <TagCloseButton
                                                          onClick={() => handleSelect(option)}
                                                      />
                                                  </Tag>
                                              );
                                          })
                                        : 'Выберите аллерген'}
                                </Box>
                            </MenuButton>
                            <MenuList zIndex='10' w='269px' display='flex' flexDirection='column'>
                                {allOptions.map((option, index) => (
                                    <Checkbox
                                        key={option.key}
                                        colorScheme='lime'
                                        isChecked={selectedOptions.includes(option.value)}
                                        onChange={() => handleSelect(option.value)}
                                        bg={index % 2 === 0 ? 'white' : 'blackAlpha.100'}
                                        p={2}
                                    >
                                        {option.label}
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
                                        >
                                            +
                                        </IconButton>
                                    </InputRightElement>
                                </InputGroup>
                            </MenuList>
                        </>
                    )}
                </Menu>
            ) : (
                <Input />
            )}
        </>
    );
};
