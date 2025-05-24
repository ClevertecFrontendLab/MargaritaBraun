// import Cookies from 'js-cookie'; // УДАЛИТЬ НЕ ЗАБЫТЬ

import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

import {
    DataForResetPassword,
    LoginCredentials,
    ServerResponseTypes,
    UserRegistrationData,
} from '../constants/types';

export const authApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.AUTH],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            signup: builder.mutation<ServerResponseTypes, UserRegistrationData>({
                query: (userData) => ({
                    url: ApiEndpoints.SIGNUP,
                    method: 'POST',
                    body: userData,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.SIGNUP,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            login: builder.mutation<ServerResponseTypes, LoginCredentials>({
                query: (credentials) => ({
                    url: ApiEndpoints.LOGIN,
                    method: 'POST',
                    body: credentials,
                }),
                transformResponse: (response: ServerResponseTypes, meta): ServerResponseTypes => {
                    const accessToken = meta?.response?.headers.get('authentication-access');
                    if (accessToken) {
                        localStorage.setItem('accessToken', accessToken);
                    }
                    return response;
                },
            }),
            refresh: builder.query<void, void>({
                query: () => ({
                    url: ApiEndpoints.REFRESH,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.REFRESH,
                }),
                providesTags: [Tags.AUTH],
            }),
            checkAuth: builder.query<void, void>({
                query: () => ({
                    url: ApiEndpoints.CHECKAUTH,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.CHECKAUTH,
                }),
                providesTags: [Tags.AUTH],
            }),
            verify: builder.mutation<void, { token: string }>({
                query: (data) => ({
                    url: ApiEndpoints.VERIFY,
                    method: 'POST',
                    body: data,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.VERIFY,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            forgotPassword: builder.mutation<void, { email: string }>({
                query: (data) => ({
                    url: ApiEndpoints.FORGOTPASSWORD,
                    method: 'POST',
                    body: data,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.FORGOTPASSWORD,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            verifyOtp: builder.mutation<
                void,
                {
                    email: string;
                    otpToken: string;
                }
            >({
                query: (data) => ({
                    url: ApiEndpoints.VERIFYOTP,
                    method: 'POST',
                    body: data,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.VERIFYOTP,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
            resetPassword: builder.mutation<void, DataForResetPassword>({
                query: (data) => ({
                    url: ApiEndpoints.RESETPASSWORD,
                    method: 'POST',
                    body: data,
                    apiGroupName: ApiGroupNames.AUTH,
                    name: EndpointNames.RESETPASSWORD,
                }),
                invalidatesTags: [Tags.AUTH],
            }),
        }),
    });

export const {
    useSignupMutation,
    useLoginMutation,
    useRefreshQuery,
    useCheckAuthQuery,
    useVerifyMutation,
    useForgotPasswordMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
} = authApiSlice;
