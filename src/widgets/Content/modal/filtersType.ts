import { RefObject } from 'react';

export interface FiltersDrawerProps {
    btnRef: RefObject<HTMLButtonElement | null>;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    fullFilters: FiltersData;
    setfullFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
}

export interface FiltersData {
    categoryFilter: string[];
    autorsFilter: string[];
    meatTypeFilter: string[];
    sideDishFilter: string[];
    allergyFilter: string[];
}

export interface FieldForFilterProps {
    title: string;
    options: string[];
    fullFilters: FiltersData;
    setfullFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
    filterKey: keyof FiltersData;
    dataTestId?: string;
}
