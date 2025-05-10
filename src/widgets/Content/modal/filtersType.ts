import { RefObject } from 'react';

export interface FiltersDrawerProps {
    btnRef: RefObject<HTMLButtonElement | null>;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    fullFilters: FiltersData;
    setfullFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
    handleRefresh: () => void;
}

export interface FiltersData {
    categoryFilter: string[];
    autorsFilter: string[];
    meatTypeFilter: string[];
    sideDishFilter: string[];
    allergyFilter: string[];
}

export interface ObjectCategoryForFilters {
    _id: string;
    title: string;
}

export interface FieldForFilterProps {
    title: string;
    options: string[];
    fullFilters: FiltersData;
    setfullFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
    filterKey: keyof FiltersData;
    dataTestId?: string;
}
export interface FieldForFilterCategoryProps {
    title: string;
    options: ObjectCategoryForFilters[];
    fullFilters: FiltersData;
    setfullFilters: React.Dispatch<React.SetStateAction<FiltersData>>;
    filterKey: keyof FiltersData;
    dataTestId?: string;
}
