//RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
import { User,AuthToken } from "../../Types/user";
import { UserProfile } from "../../Types/profile";

//simulation of a database
import { userProfiles } from "../../Api/simulationUserDatabase";




export const fakeLogin = async (email: string, password: string) => {
    return new Promise<{userProfile: UserProfile; token: string}>((resolve, reject) => {
        setTimeout(() => {
            const user = userProfiles.find((element) => element.user.email === email);
            
            if (user) {
                const token = "fake-token-" + new Date().getTime();
                resolve({userProfile: user, token});
            } else {
                reject(new Error("User not found"));
            }
        }, 500);
    });
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BACKEND_API_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<{userProfile: UserProfile; token: string}, {email: string; password: string}>({
            queryFn: async ({email, password}, queryApi, extraOptions, baseQuery) => {
                try {
                    const { userProfile, token } = await fakeLogin(email, password);
                    // 返回用户信息和 token
                    return { data: { userProfile, token } };
                } catch (error) {
                    // 错误处理
                    const errorMessage = (error as Error).message;
                    return { error: { status: 'CUSTOM_ERROR', error: errorMessage }};
                }
            },
        }),
        // register: builder.mutation<AuthToken, Partial<User>>({
        //     query: (body) => ({
        //         url: "auth/register",
        //         method: "POST",
        //         body,
        //     }),
        // }),
        // logout: builder.mutation<void, void>({
        //     query: () => ({
        //         url: "auth/logout",
        //         method: "POST",
        //     }),
        // }),
    }),
});

export const { 
    useLoginMutation, 
} = authApi;