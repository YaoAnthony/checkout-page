
//react
import React,{ useState,useEffect } from 'react';
import { NavLink,useNavigate, useLocation } from 'react-router-dom';

//component
import SearchBar from '../SearchBar';

//redux
import { useSelector,useDispatch } from "react-redux";

//animation
import { motion } from "framer-motion";
import { dropDown } from '../../Motion';

//antd
import { Divider, message } from 'antd';

const HeaderMobile : React.FC = () => {
    return(
        <div className='flex md:hidden'>
            <h1>Header</h1>
        </div>
    )
}

export default HeaderMobile;