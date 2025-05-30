import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from './constants/apiConsts';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include',

        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('access_token');
            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
