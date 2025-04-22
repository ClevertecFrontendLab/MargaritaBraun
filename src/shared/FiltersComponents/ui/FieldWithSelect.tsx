import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { FC } from 'react';

import { FieldForFilterProps, FiltersData } from '~/widgets/Content/modal/filtersType';

export const FieldWithSelect: FC<FieldForFilterProps> = ({
    title,
    options,
    fullFilters,
    setfullFilters,
    filterKey,
}) => {
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

    return (
        <>
            <Menu closeOnSelect={false}>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={Button}
                            isActive={isOpen}
                            variant='outline'
                            w='100%'
                            h='auto'
                            rightIcon={
                                <ChevronDownIcon
                                    transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                                />
                            }
                            colorScheme='white'
                            borderColor='lime.600'
                            p={['10px 12px']}
                        >
                            {title}
                        </MenuButton>
                        <MenuList zIndex='10' w='100%' display='flex' flexDirection='column'>
                            {options.map((option, index) => (
                                <Checkbox
                                    key={option}
                                    colorScheme='lime'
                                    isChecked={fullFilters[filterKey].includes(option)}
                                    onChange={() => handleSelect(option)}
                                    bg={index % 2 === 0 ? 'white' : 'blackAlpha.100'}
                                    p={2}
                                    w='100%'
                                >
                                    {option}
                                </Checkbox>
                            ))}
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    );
};
