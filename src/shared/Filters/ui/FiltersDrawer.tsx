import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Stack,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink as ReachLink } from 'react-router';

import navigationData from '~/entities/NavMenu/const/navigationData';
import {
    FieldWithCheckbox,
    FieldWithSelect,
    FilterDisplay,
    SelectAllergyWithSwitch,
} from '~/shared/FiltersComponents';
import { setFilters } from '~/store/filter-slice';
import { FiltersDrawerProps } from '~/widgets/Content/modal/filtersType';

import filterAllergy from '../consts/filterAllergy';
import filterAutors from '../consts/filterAutors';
import filterTypeGarnish from '../consts/filterTypeGarnish';
import filterTypeMeat from '../consts/filterTypeMeat';

export const FiltersDrawer: FC<FiltersDrawerProps> = ({
    isOpen,
    onClose,
    fullFilters,
    setfullFilters,
}) => {
    const categoryOptions = navigationData.map((item) => item.label);
    const typeMeatOptions = filterTypeMeat;
    const typeGarnishOptions = filterTypeGarnish;
    const autorsOptions = filterAutors;
    const allergyOptions = filterAllergy;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilters(fullFilters));
    }, [dispatch, fullFilters]);

    const handleCleanFilters = () => {
        setfullFilters(() => ({
            categoryFilter: [],
            autorsFilter: [],
            meatTypeFilter: [],
            sideDishFilter: [],
            allergyFilter: [],
        }));
    };

    return (
        <>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
                <DrawerOverlay
                    background='var(--blackAlpha-300, rgba(0, 0, 0, 0.16))'
                    backdropFilter='blur(2px)'
                />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Фильтр</DrawerHeader>

                    <DrawerBody
                        display='flex'
                        flexDirection='column'
                        gap={['4', null, null, null, '6']}
                    >
                        <FieldWithSelect
                            title='Категория'
                            options={categoryOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='categoryFilter'
                        />
                        <FieldWithSelect
                            title='Поиск по автору'
                            options={autorsOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='autorsFilter'
                        />
                        <FieldWithCheckbox
                            title='Тип мяса:'
                            options={typeMeatOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='meatTypeFilter'
                        />
                        <FieldWithCheckbox
                            title='Тип гарнира:'
                            options={typeGarnishOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='sideDishFilter'
                        />
                        <SelectAllergyWithSwitch
                            title='Выберите из списка аллергенов...'
                            options={allergyOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='allergyFilter'
                        />
                    </DrawerBody>

                    <DrawerFooter display='flex' flexDirection='column'>
                        <FilterDisplay fullFilters={fullFilters} />
                        <Stack direction='row' w='100%' justifyContent='flex-end'>
                            <Button
                                variant='outline'
                                colorScheme='black'
                                size={['sm', 'sm', null, null, 'lg']}
                                onClick={handleCleanFilters}
                            >
                                Очистить фильтр
                            </Button>
                            <Button
                                as={ReachLink}
                                colorScheme='black'
                                variant='solid'
                                bg='black'
                                color='white'
                                size={['sm', 'sm', null, null, 'lg']}
                                to='/filters'
                            >
                                Найти рецепт
                            </Button>
                        </Stack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
