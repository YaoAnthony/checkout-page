import { useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';

//router
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

//antd
import { Divider } from 'antd';

//icon
import { LeftOutlined } from '@ant-design/icons';

//framer-motion
import { motion } from 'framer-motion';

//types
import { RootState } from '../../Redux/store';

interface ShippingProps {
    //function props, useState boolean function, set next step
    next: React.Dispatch<React.SetStateAction<number>>;
}


const Shipping : React.FC<ShippingProps> = ({next}) => {

    //hook
    const navigate = useNavigate();
    const location = useLocation();

    const profile = useSelector((state: RootState) => state.profile.userProfile);

    const emptyAddress = {
        firstName: '',
        lastName: '',

        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
    };

    const [ collectData, setCollectData ] = useState({
        email: profile?.user.email || '',
        address: profile?.shippingAddress || emptyAddress,
    });

    let from = location.state?.from?.pathname || "/";

    const onSubmit = () => {
        //TODO: Check if the email is valid

        //TODO: Check if the address is valid

        

        next(1);
    }
    


    return(
        <div>
            <div className=''>
                <legend>Express Checkout</legend>
                <div className='flex h-12 flex-col gap-2 justify-center items-center'>
                    no express shipping available
                </div>
            </div>

            <div className='w-full flex gap-5 items-center'>
                <div className='flex-1'><Divider/></div>
                <p className='text-gray-200'>OR</p>
                <div className='flex-1'><Divider/></div>
            </div>

            <div className='w-full flex flex-col gap-12'>
                <div className='flex flex-col gap-5'>
                    <legend>Contact information</legend>
                    <input
                        type='email'
                        placeholder='Email'
                        value={collectData.email}
                        onChange={(e) => setCollectData({ ...collectData, email: e.target.value })}
                        className='w-full h-12 border border-gray-200 rounded-md p-3'
                    />
                </div>

                <div className='flex flex-col gap-5'>
                    <legend>Shipping address</legend>
                    <input
                        type='text'
                        placeholder='Country'
                        value={collectData.address.country}
                        onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, country: e.target.value } })}
                        className='w-full h-12 border border-gray-200 rounded-md p-3'
                    />
                    <div className='flex gap-5'>
                        <input
                            type='text'
                            placeholder='First name'
                            value={collectData.address.firstName}
                            onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, firstName: e.target.value } })}
                            className='w-1/2 h-12 border border-gray-200 rounded-md p-3'
                        />
                        <input
                            type='text'
                            placeholder='Last name'
                            value={collectData.address.lastName}
                            onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, lastName: e.target.value } })}
                            className='w-1/2 h-12 border border-gray-200 rounded-md p-3'
                        />
                    </div>  
                    <input
                        type='text'
                        placeholder='Address'
                        value={collectData.address.street}
                        onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, street: e.target.value } })}
                        className='w-full h-12 border border-gray-200 rounded-md p-3'
                    />
                    <div className='flex gap-5'>
                        <input
                            type='text'
                            placeholder='City'
                            value={collectData.address.city}
                            onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, city: e.target.value } })}
                            className='w-full h-12 border border-gray-200 rounded-md p-3'
                        />
                        <input
                            type='text'
                            placeholder='Province'
                            value={collectData.address.province}
                            onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, province: e.target.value } })}
                            className='w-full h-12 border border-gray-200 rounded-md p-3'
                        />

                        <input
                            type='text'
                            placeholder='Postal code'
                            value={collectData.address.postalCode}
                            onChange={(e) => setCollectData({ ...collectData, address: { ...collectData.address, postalCode: e.target.value } })}
                            className='w-full h-12 border border-gray-200 rounded-md p-3'
                        />      
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>

                    <motion.div
                        className='text-primary cursor-pointer flex gap-2 items-center'
                        onClick={() => navigate(from, { replace: true })}
                    >
                        <LeftOutlined />
                        <span> Return to shopping</span>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onSubmit}
                        className='bg-primary text-white rounded-md py-4 px-5'>
                            Continue to payment
                    </motion.button>
                </div>

                <Divider/>

                <div className='flex gap-8 text-sm flex-wrap'>
                    <NavLink to='/policy/return' className="text-primary cursor-pointer">
                        <p>Return policy</p>
                    </NavLink>
                    <NavLink to='/policy/shipping' className="text-primary cursor-pointer">
                        <p>Shipping policy</p>
                    </NavLink>
                    <NavLink to='/policy/privacy' className="text-primary cursor-pointer">
                        <p>Privacy policy</p>
                    </NavLink>
                    <NavLink to='/policy/terms' className="text-primary cursor-pointer">
                        <p>Terms of service</p>
                    </NavLink>
                    <NavLink to='/policy/terms' className="text-primary cursor-pointer">
                        <p>Purchase options cancellatiopn policy</p>
                    </NavLink>
                </div>
            </div>
                    
        </div>
    )
}

export default Shipping;