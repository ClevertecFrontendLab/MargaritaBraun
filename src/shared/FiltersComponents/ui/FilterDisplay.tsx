import { Box, Tag, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

import { FiltersData } from '~/widgets/Content/modal/filtersType';

interface FilterDisplayProps {
    fullFilters: FiltersData;
}

export const FilterDisplay: FC<FilterDisplayProps> = ({ fullFilters }) => (
    <Box display='flex' flexWrap='wrap' gap={2} pb={[2]}>
        {Object.keys(fullFilters).map((filterKey) => {
            const values = fullFilters[filterKey as keyof FiltersData];
            return (
                <>
                    {values.map((value) => (
                        <Tag key={value} colorScheme='green' mr={1}>
                            <TagLabel>{value}</TagLabel>
                        </Tag>
                    ))}
                </>
            );
        })}
    </Box>
);
