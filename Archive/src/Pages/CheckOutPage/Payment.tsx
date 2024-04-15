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


interface PaymentProps {
    //function props, useState boolean function, set next step
    next: React.Dispatch<React.SetStateAction<number>>;
}

const Payment : React.FC<PaymentProps> = ({next}) => {

    return(
        <div>
            <h1>Confirm</h1>
        </div>
    )
}

export default Payment;
