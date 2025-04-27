import { Box, Tag, TagLabel } from '@chakra-ui/react';
import { FC } from 'react';

import { FiltersData } from '~/widgets/Content/modal/filtersType';

interface FilterDisplayProps {
    fullFilters: FiltersData;
}

export const FilterDisplay: FC<FilterDisplayProps> = ({ fullFilters }) => (
    <Box display='flex' flexWrap='wrap' gap={2} pb={[2]}>
        {Object.entries(fullFilters).map(([filterKey, values]) =>
            values.map((value: string) => (
                <Tag
                    key={`${filterKey}-${value}`}
                    colorScheme='lime'
                    color='lime.400'
                    borderColor='lime.400'
                    border='1px'
                    mr={1}
                    data-test-id='filter-tag'
                >
                    <TagLabel>{value}</TagLabel>
                </Tag>
            )),
        )}
    </Box>
);
