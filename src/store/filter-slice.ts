import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type FilterState = {
    filters: {
        categoryFilter: string[];
        autorsFilter: string[];
        meatTypeFilter: string[];
        sideDishFilter: string[];
        allergyFilter: string[];
    };
};

const initialState: FilterState = {
    filters: {
        categoryFilter: [],
        autorsFilter: [],
        meatTypeFilter: [],
        sideDishFilter: [],
        allergyFilter: [],
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<FilterState['filters']>) {
            state.filters = action.payload;
        },
        setCategoryFilter(state, action: PayloadAction<string[]>) {
            state.filters.categoryFilter = action.payload;
        },
        setAutorsFilter(state, action: PayloadAction<string[]>) {
            state.filters.autorsFilter = action.payload;
        },
        setMeatTypeFilter(state, action: PayloadAction<string[]>) {
            state.filters.meatTypeFilter = action.payload;
        },
        setSideDishFilter(state, action: PayloadAction<string[]>) {
            state.filters.sideDishFilter = action.payload;
        },
        setAllergyFilter(state, action: PayloadAction<string[]>) {
            state.filters.allergyFilter = action.payload;
        },
    },
});

export const {
    setFilters,
    setCategoryFilter,
    setAutorsFilter,
    setMeatTypeFilter,
    setSideDishFilter,
    setAllergyFilter,
} = filterSlice.actions;

export const filtersSelector = (state: ApplicationState) => state.filters.filters;

export default filterSlice.reducer;
