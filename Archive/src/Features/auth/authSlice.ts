
//redux toolkit
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

//Types
import { User,AuthToken } from "../../Types/user";

//api
import { fakeLogin } from "./authApi";

type AuthState = {
    isLoggedIn: boolean;
    user: User | null;
    token: AuthToken | null;
};

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;

            //TODO: Connect to the backend
            state.user = action.payload;

        },
        setToken(state, action: PayloadAction<AuthToken>) {
            state.token = action.payload;

            //Set the token in localstorage
            localStorage.setItem('accessToken', state.token.accessToken);
            //localStorage.setItem('refreshToken', data.tokens.refresh.token);
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;