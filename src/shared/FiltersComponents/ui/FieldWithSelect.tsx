import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { FieldForFilterProps, FiltersData } from '~/widgets/Content/modal/filtersType';

export const FieldWithSelect: FC<FieldForFilterProps> = ({
    title,
    options,
    fullFilters,
    setfullFilters,
    filterKey,
    dataTestId,
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
                            data-test-id={dataTestId}
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
                            p={['10px 12px']}
                            borderColor='blackAlpha.200'
                            _focus={{ borderColor: 'lime.300' }}
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
                                <Text textAlign='left'>{title}</Text>
                            )}
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
                                    data-test-id={
                                        option === 'Веганская кухня'
                                            ? 'checkbox-веганская кухня'
                                            : null
                                    }
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
