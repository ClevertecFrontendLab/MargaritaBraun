import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import { marathonApi } from './apiQuery/marathonApi';
import appReducer, { appSlice } from './app-slice';
import filterReducer from './filter-slice';
import userReducer from './user-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [marathonApi.reducerPath]: marathonApi.reducer,
    filters: filterReducer,
    user: userReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, marathonApi.middleware),
    devTools: !isProduction,
});
