import React from 'react'

//style
import { pageSetting } from '../../style'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantity,removeCartItem } from '../../Features/profile/profileSlice';

//antd
import { 
    Steps, 
    Divider,
    message,
    Popconfirm,
    InputNumber
} from 'antd';

//framer-motion
import { motion } from 'framer-motion';

//api
import { findProductsAndQuantities } from "../../Api";

//react
import { useState,useEffect } from 'react';

//component
import Shipping from './Shipping';
import Confirm from './Confirm';
import Payment from './Payment';
import Complete from './Complete';

//router
import { NavLink } from 'react-router-dom';

//types
import { RootState } from '../../Redux/store';
import { Product } from '../../Types/product';

interface ProductWithQuantity {
    product: Product;
    quantity: number;
}

interface ProductElementProps {
    data: ProductWithQuantity;
}
const ProductElement: React.FC<ProductElementProps> = ({ data }) => {
    //hooks
    const dispatch = useDispatch();
    //产品分为 product 和 quantity 两个部分
    const { product , quantity } = data;
    //计算产品的价格
    const price = product.price * quantity;

    return (
        <div className='flex gap-4 items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={product.image[0]} alt={product.name} className='w-20 h-20 rounded-md object-cover'/>
                <div className='flex flex-col gap-1'>
                    <NavLink to={`/asset/${product.id}`} className='text-lg font-semibold'>{product.name}</NavLink>
                    <div className='text-sm'>kit</div>
                </div>
            </div>
            <Popconfirm
                title="Delete it!"
                description="Are you sure to delete this product?"
                onConfirm={() => {
                    dispatch(removeCartItem(product.id));
                }}
                okText="Yes"
                cancelText="No"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='rounded-full text-gray-400 hover:text-accent w-7 h-7 flex justify-center items-center cursor-pointer'
                >
                    delete
                </motion.div>
            </Popconfirm>
            
            <InputNumber
                min={1}
                max={3}
                value={quantity}
                onChange={(value) => {
                    // Ensure value is not null before dispatching
                    if (value !== null) {
                        dispatch(updateCartItemQuantity({ productid: product.id, quantity: value }));
                    } else {
                        // Handle the case when value is null, possibly by setting a default
                        dispatch(updateCartItemQuantity({ productid: product.id, quantity: 1 }));
                    }
                }}
            />
            <div className='self-right'>
                <p>${price}</p>
            </div>
        </div>
    )
}


const ProductTable = () => {
    //total price
    const [ totalPrice, setTotalPrice ] = useState(0);
    
    //get products from redux
    const { userProfile } = useSelector((state: RootState) => state.profile);

    // 使用 useEffect 计算总价
    useEffect(() => {
        if (!userProfile) {
            return;
        }
        //caclulate total price
        const total = findProductsAndQuantities(userProfile.cart).reduce((acc, item) => {
            return acc + item.product.price * item.quantity;
        }, 0);

        setTotalPrice(total);
    }, [userProfile]); // 添加 userProfile 作为依赖项

    //if userProfile is null, return empty array
    if (!userProfile) return (
        <div className='w-full h-full flex items-center flex-col gap-5'>
            <p>Your cart is empty</p>
        </div>
    )

    //tax 
    const tax =totalPrice * 0.13;
    
    //delivery fee
    const deliveryFee = 0;
    //Final payment
    const totalPayment = totalPrice + tax + deliveryFee;

    //handle coupon submit
    const handleCouponSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        message.success('coupon applied');
    }


    return(
        <div className='w-full flex flex-col gap-5'>
            {
                findProductsAndQuantities(userProfile.cart).map((product : ProductWithQuantity, index) => (
                    <div key={index}>
                        <ProductElement data={product} />
                    </div>
                ))
            }
            <Divider />
            <form onSubmit={handleCouponSubmit} className='flex w-full gap-7'>
                <input type="text" placeholder="gift card or coupon code" className='flex-1 text-md font-thin p-2 border border-gray-200 rounded-md'/>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type='submit'
                    className='w-1/3 p-2 bg-primary text-white rounded-md'>
                        Apply
                </motion.button>
            </form>

            <Divider />
            
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                </div>
                
                <div className='flex justify-between'>
                    <p>Shipping</p>
                    <p>Calculate at next step</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>${totalPayment.toFixed(2)}</p>
                </div>

            </div>

            <Divider />

        </div>
    
    )
}





const CheckOutPage = () => {

    //step control
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
          title: 'Shipping',
          content: <Shipping next={next}/>,
        },
        {
          title: 'Payment',
          content: <Payment next={next}/>,
        },
        {
          title: 'Confirm',
          content: <Confirm next={next}/>,
        },
        {
          title: 'Complete',
          content: <Complete next={next}/>,
        },
    ];
    //step props
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

   
    return (
        <div className={`relative w-full mt-36 ${pageSetting.padding} flex gap-16`}>
            <motion.div 
                className='flex-1 border border-gray-200 rounded-xl shadow-product p-10'
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ProductTable/>
            </motion.div>

            <motion.div 
                className='flex-1 flex flex-col gap-10'
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Steps current={current} items={items} />
                <div>{steps[current].content}</div>
            </motion.div>
        </div>
    ) 
}

export default CheckOutPage