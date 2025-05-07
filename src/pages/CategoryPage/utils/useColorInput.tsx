import { useSearchParams } from 'react-router';

import dataAllCategory from '~/shared/consts/dataAllCategory';

export const useColorInput = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    let currentColor = 'blackAlpha.600';

    if (searchQuery && searchQuery !== '') {
        const filtered = dataAllCategory.filter((recipe) => recipe.title.includes(searchQuery));
        currentColor = filtered.length === 0 ? 'red.200' : 'lime.600';
    }

    return currentColor;
};
