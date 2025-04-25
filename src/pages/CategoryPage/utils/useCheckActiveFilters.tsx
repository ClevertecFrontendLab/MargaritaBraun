import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';

import { filtersSelector } from '~/store/filter-slice';

export const useCheckActiveFilters = () => {
    const [searchParams] = useSearchParams();
    const filters = useSelector(filtersSelector);

    const hasSearchQuery = Boolean(searchParams.get('search'));
    const hasFilters = Object.values(filters).some((item) => item.length > 0);

    return hasSearchQuery || hasFilters;
};
