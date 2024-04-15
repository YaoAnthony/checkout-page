import { User } from "./user";

import { Comment } from "./comment";



/**
 * Represents an award given to a user.
 */
export type Award = {
    id: string;
    name: string;
    time: string; // The date or time the award was given.
    image: string; // URL or path to the award image.
};



/**
 * Represents a customizable product with various attributes.
 */
export type CustomizableProduct = {
    id: string;
    name: string;
    productionCycle: string; // This could be more specifically typed if the values are known and limited.
    
    acceptTime: string; // Similarly, this could be more specifically typed or converted to a boolean if it means availability.
    initialPrice: number; 
    maxPrice: number; 
    
    image: string[]; // URL or path to the product image.
    tag: string[]; // Array of tags related to the product.
    description: string; // Description of the product.
};

export type Address = {
    firstName: string;
    lastName: string;

    country: string;
    province: string;
    city: string;
    street: string;
    postalCode: string;
};

/**
 * Defines the profile structure of a user within the application.
 */
export type UserProfile = {
    user: User; // The user entity.
    simpleBackground: string; // URL or path to the background image for the profile.
    fullBackground: string; // URL or path to the full background image for the profile.
    awards?: Award[]; // Optional array of awards received by the user.

    // Sale product
    masterpieces: string[]; // Optional array of the user's masterpieces.
    products: string[]; // Array of product IDs created by the user.
    DIYplans: CustomizableProduct[]; // Array of customizable products created by the user.

    favorites: string[]; // Array of product IDs favorited by the user.
    wishlist: string[]; // Array of product IDs in the user's wishlist.
    history: string[]; // Array of product IDs in the user's purchase history.
    cart: { 
        productid: string; 
        quantity: number 
    }[]; // Array of product IDs in the user's cart.

    //comment
    comments: Comment[]; // Array of comments made by the user.

    // Shipping information
    shippingAddress: Address; // The user's shipping address.
};
