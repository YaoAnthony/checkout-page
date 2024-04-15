//redux
import { useDispatch } from "react-redux";
import { setUser,setToken } from '../Features/auth/authSlice';
import { useLoginMutation } from '../Features/auth/authApi';
import { setUserProfile } from '../Features/profile/profileSlice';

//react
import { useState } from 'react'

//
import { message } from 'antd';

//motion
import { motion } from 'framer-motion';

//用于测试的代码
const CheckoutTest = () => {
  //hooks
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const loginInfo = {
    email: 'echo.xia@gmail.com',
    password: 'sdfdsf'
  };
  
  //lgoin
  const test = async () => {
    message.info("test start")
  
    const userData = await login(loginInfo).unwrap();
    dispatch(setUser(userData.userProfile.user));
    dispatch(setToken({
        accessToken:userData.token,
        refreshToken:'',
        expiresIn: 5000
    }));
    dispatch(setUserProfile(userData.userProfile));
    message.success('Login success');
  
    //add product to cart
    dispatch({ type: 'profile/addToCart', payload: { productid: "pic7", quantity: 1 } });
    dispatch({ type: 'profile/addToCart', payload: { productid: "pic4", quantity: 1 } });
    dispatch({ type: 'profile/addToCart', payload: { productid: "pic5", quantity: 1 } });
    message.success('Add to cart success');
  }

  return(
      <motion.button
        className="text-primary p-3 z-10 rounded-md shadow-md border"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={test}
      >
        Test Start
      </motion.button>
  )
}

export default CheckoutTest;
  