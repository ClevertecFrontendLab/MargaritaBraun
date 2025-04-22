import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { FieldForFilterProps, FiltersData } from '~/widgets/Content/modal/filtersType';

export const FieldWithCheckbox: FC<FieldForFilterProps> = ({
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
            <Stack flexDirection='column' gap='3'>
                <Text>{title}</Text>
                {options.map((option) => (
                    <Checkbox
                        key={option}
                        colorScheme='lime'
                        isChecked={fullFilters[filterKey].includes(option)}
                        onChange={() => handleSelect(option)}
                        textStyle='textCardDescription'
                        p='0'
                    >
                        {option}
                    </Checkbox>
                ))}
            </Stack>
        </>
    );
};
