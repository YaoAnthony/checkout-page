
// redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "../Features/auth/authSlice";
import profileReducer from "../Features/profile/profileSlice";
// import cartReducer from "../Features/cart/cartSlice";


import { authApi } from "../Features/auth/authApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer, // add RTK Query reducers
        profile: profileReducer,
        // cart: cartReducer,
    },
    //Middleare
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});


// RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
