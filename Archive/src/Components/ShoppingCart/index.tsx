 //antd
import { Drawer,Popconfirm } from 'antd';

//icon
import { DeleteOutlined } from '@ant-design/icons';

//react router dom
import { NavLink } from 'react-router-dom';

// CartContext.tsx
import React, { useState } from 'react';
import { useCart } from '../../Context/ShoppingCartContext';

//redux
import { useSelector,useDispatch } from 'react-redux';
import { removeCartItem } from '../../Features/profile/profileSlice';

//image
import { iconBag } from '../../Assets';

//type
import { UserProfile } from '../../Types/profile';
import { RootState } from '../../Redux/store';
import { Product } from '../../Types/product';
import type { PopconfirmProps } from 'antd';

//api
import { findProductsAndQuantities } from '../../Api';

interface ProductWithQuantity {
    product: Product;
    quantity: number;
}


const ShoppingCart: React.FC = () => {
    const { isCartOpen, toggleCart } = useCart();

    const dispatch = useDispatch();

    //get cart from redux: profile
    const profile = useSelector(( state: RootState ) => state.profile.userProfile);
    // Determine the cart based on the profile's existence
    let cart: ProductWithQuantity[];
    if (profile) {
        cart = findProductsAndQuantities(profile.cart || []);
    } else {
        cart = [];
    }

    const handleDelete = (id : string) => {
        //delete the product from the cart
        dispatch(removeCartItem(id));
    }   
    return ( 
        <Drawer 
            title="Shopping Cart" 
            placement="right" 
            onClose={toggleCart} 
            open={isCartOpen}
            style={{
                width : "100%",
                height : "100%",
                position : "relative",
                padding : "0px",
                margin : "0px",
            }}>
            <div className="w-full flex flex-col items-center">
                {cart.length > 0 ?
                    <div className="w-full flex flex-col">
                        {cart.map((itemList,index) => (
                            <div key={index} className="relative w-full flex items-start p-2  ">
                                <div className='absolute top-0 right-5'>
                                <Popconfirm
                                    title="Delete the task"
                                    description="Are you sure to delete this product?"
                                    onConfirm={() => handleDelete(itemList.product.id)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <div 
                                        className='rounded-full hover:border w-7 h-7 flex justify-center items-center cursor-pointer'
                                    >
                                        <DeleteOutlined />
                                    </div>
                                </Popconfirm>
                                </div>
                                
                                
                                <img src={itemList.product.image[0]} className="w-20 h-20" alt = ""/>
                                <div className="flex flex-col gap-2 ml-2">
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <NavLink 
                                            to={`/asset/${itemList.product.id}`}
                                            onClick={toggleCart}
                                            className="text-md hover:text-primary">{itemList.product.name}
                                        </NavLink>
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-between gap-5">
                                        <p className="text-md">Count: {itemList.quantity}</p>
                                        <p className="text-md">Price: {itemList.product.price}</p>
                                    </div> 
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="w-full h-96 gap-10 flex flex-col items-center justify-center">
                        <p className="text-xl">Your cart is empty</p>
                        <p>keep Shopping!</p>
                        <img src={iconBag} className="w-36 h-36" alt = ""/>
                    </div>
                }
            </div>

            <div className='absolute bottom-0 w-auto flex flex-col gap-2 p-2 border-t'>
                <div className="w-72 flex flex-row justify-between items-center">
                    <p className="text-md">Shipping</p>
                    <p className="text-md">Free</p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-md">Total</p>
                    {/* <p className="text-md">$ {state.cart.length > 0 ? getTotalPrice(state.cart) : 0}</p> */}
                </div>
                <NavLink
                    to="/checkout"
                    onClick={toggleCart}
                    className="w-full flex flex-row justify-between items-center rounded-md shadow-button">
                    <button className="w-full bg-black text-black p-2 border">Check out</button>
                </NavLink>
            </div>
            </Drawer>
    )
}

export default ShoppingCart;