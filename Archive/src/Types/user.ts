// src/types/user.ts

/**
 * Defines the structure for a user entity within the application.
 */
export type User = {
    id: string | number; 
    username: string;
    isVerified: boolean;

    // information details
    email: string;
    firstName?: string;
    lastName?: string;
    roles?: string[];

    // social details
    avatar?: string;
    followers: number;
    rate: number;
    personalSignature?: string; // Optional personal signature or quote.
};

/**
 * Token payload for a user.
 */
export type AuthToken = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};

