import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type UserState = {
    email: string;
};

const initialState: UserState = {
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmailUser(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },
});

export const { setEmailUser } = userSlice.actions;

export const userSelector = (state: ApplicationState) => state.user;

export default userSlice.reducer;
