// Assuming User, Award, and CustomizableProduct types are defined elsewhere
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//type
import { UserProfile,Award,CustomizableProduct } from '../../Types/profile';

// Initial state type
interface UserProfileState {
    userProfile: UserProfile | null;
    isLoading: boolean;
    error: string | null;
}

// Initial state
const initialState: UserProfileState = {
    userProfile: null,
    isLoading: false,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // Action to set the user profile
        setUserProfile(state, action: PayloadAction<UserProfile | null>) {
            state.userProfile = action.payload;
        },

        updateSimpleBackground(state, action: PayloadAction<string>) {
            if (state.userProfile) {
                state.userProfile.simpleBackground = action.payload;
            }
        },

        updateFullBackground(state, action: PayloadAction<string>) {
            if (state.userProfile) {
                state.userProfile.fullBackground = action.payload;
            }
        },

        addAward(state, action: PayloadAction<Award>) {
            state.userProfile?.awards?.push(action.payload);
        },
        
        addProduct(state, action: PayloadAction<string>) {
            state.userProfile?.products.push(action.payload);
        },
        
        addDIYplan(state, action: PayloadAction<CustomizableProduct>) {
            state.userProfile?.DIYplans.push(action.payload);
        },
        
        addFavorite(state, action: PayloadAction<string>) {
            //if state include the item then delete
            if(!state.userProfile){
                return;
            }
            const index = state.userProfile?.favorites.indexOf(action.payload);
            
            if (index !== -1) {
                state.userProfile?.favorites.splice(index, 1);
            } else {
                //if state not include the item then add
                state.userProfile?.favorites.push(action.payload);
            }
        
        },
        
        addToWishlist(state, action: PayloadAction<string>) {
            state.userProfile?.wishlist.push(action.payload);
        },
        
        addToCart(state, action: PayloadAction<{ productid: string; quantity: number }>) {
            //if state include the item then update the quantity
            if (state.userProfile) {
                const item = state.userProfile.cart.find(item => item.productid === action.payload.productid);
                if (item) {
                    item.quantity += action.payload.quantity;
                } else {
                    //if state not include the item then add
                    state.userProfile.cart.push(action.payload);
                }
            }
        },
        updateCartItemQuantity(state, action: PayloadAction<{ productid: string; quantity: number }>) {
            const item = state.userProfile?.cart.find(item => item.productid === action.payload.productid);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        
        removeCartItem(state, action: PayloadAction<string>) {
            if (state.userProfile) {
            state.userProfile.cart = state.userProfile.cart.filter(item => item.productid !== action.payload);
            }
        },

        addMasterpiece(state, action: PayloadAction<string>) {
            state.userProfile?.masterpieces?.push(action.payload);
        },

        updateProfileMasterpieces(state, action: PayloadAction<string[]>) {
            console.log(action.payload)
            if (state.userProfile) {
                console.log(action.payload)
                state.userProfile.masterpieces = action.payload;
            }
        },

        // Action to start loading
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },

        // Action to set an error
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        // Add more actions as needed
    },
});

  // Export actions
export const { 
    setUserProfile, 
    setLoading, 
    setError,
    updateSimpleBackground,
    updateFullBackground,
    addAward,
    addProduct,
    addDIYplan,
    addFavorite,
    addToWishlist,
    addToCart,
    updateCartItemQuantity,
    removeCartItem,
    addMasterpiece,
    updateProfileMasterpieces

} = profileSlice.actions;

// Export reducer
export default profileSlice.reducer;

