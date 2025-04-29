import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

    const checkFiltersParams = () => Object.values(fullFilters).every((item) => item.length === 0);
    return (
        <>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
                <DrawerOverlay
                    background='var(--blackAlpha-300, rgba(0, 0, 0, 0.16))'
                    backdropFilter='blur(2px)'
                />
                <DrawerContent
                    data-test-id='filter-drawer'
                    boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    padding={['8px', null, '32px', null, '48px 32px 32px 32px']}
                >
                    <DrawerHeader
                        position='relative'
                        p='0'
                        display='flex'
                        alignItems='center'
                        paddingBottom='16px'
                        justifyContent='space-between'
                    >
                        <Text fontFamily='Inter' fontSize='24px' fontWeight='700' lineHeight='32px'>
                            Фильтр
                        </Text>
                        <DrawerCloseButton
                            data-test-id='close-filter-drawer'
                            borderRadius='1000'
                            color='white'
                            bg='black'
                            pos='static'
                        />
                    </DrawerHeader>

                    <DrawerBody
                        display='flex'
                        flexDirection='column'
                        gap={['4', null, null, null, '6']}
                        w='100%'
                        p='0'
                    >
                        <FieldWithSelect
                            title='Категория'
                            options={categoryOptions}
                            fullFilters={fullFilters}
                            setfullFilters={setfullFilters}
                            filterKey='categoryFilter'
                            dataTestId='filter-menu-button-категория'
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
                        <Flex direction='column'>
                            <SelectAllergyWithSwitch
                                title='Выберите из списка аллергенов...'
                                options={allergyOptions}
                                fullFilters={fullFilters}
                                setfullFilters={setfullFilters}
                                filterKey='allergyFilter'
                            />
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter display='flex' flexDirection='column' gap={[2]}>
                        <FilterDisplay fullFilters={fullFilters} />
                        <Stack direction='row' w='100%' justifyContent='flex-end'>
                            <Button
                                variant='outline'
                                colorScheme='black'
                                size={['sm', 'sm', null, null, 'lg']}
                                onClick={handleCleanFilters}
                                data-test-id='clear-filter-button'
                            >
                                Очистить фильтр
                            </Button>
                            <Button
                                colorScheme='black'
                                variant='solid'
                                bg='black'
                                color='white'
                                size={['sm', 'sm', null, null, 'lg']}
                                onClick={onClose}
                                data-test-id='find-recipe-button'
                                isDisabled={checkFiltersParams()}
                                pointerEvents={checkFiltersParams() ? 'none' : 'auto'}
                                opacity={checkFiltersParams() ? 0.6 : 1}
                                cursor={checkFiltersParams() ? 'not-allowed' : 'pointer'}
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
