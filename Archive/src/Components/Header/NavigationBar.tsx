//react
import React,{ useState } from 'react';

//redux
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../Features/auth/authSlice';

//router
import { useNavigate,useLocation,NavLink } from 'react-router-dom';

//types
import { RootState } from '../../Redux/store';

//antd
import { message } from 'antd';

//motion
import { motion } from 'framer-motion';
import { dropDown } from '../../Motion';

//icons
import { UpOutlined, ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { LuBellRing } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

//shopping cart controller
import { useCart } from '../../Context/ShoppingCartContext';


//test
import CheckoutTest from '../../Test/CheckoutTest';

const NavigationBar = () => {

    //hook
    const dispatch = useDispatch();
    const navigate = useNavigate(); //navigate to other page
    const location = useLocation(); //get the path

    const { toggleCart } = useCart();
    

    const isAuthenticated = useSelector((state:RootState) => state.auth.isLoggedIn);
    const currentUser = useSelector((state:RootState) => state.auth.user);
    
    //set the user menu open or not
    const [isOpen, setIsOpen] = useState(false); 

    //Sign out action
    const handleSignOut = () => {
        
        const data = dispatch(logout());

        // // 检查当前的路由
        // if (location.pathname.startsWith('/profile/')) {
        //     // 如果在 profile/* 下面，跳转到主页
        //     navigate('/');
        // }
        // // 如果在其他页面，此处可以添加其他的逻辑

        message.success("You have successfully logged out")
    }
    
    //style
    const itemStyle = "w-full flex gap-2 items-center text-left text-[1rem] px-5 py-2 hover:bg-gray-200 rounded-md whitespace-nowrap"


    const handleSignIn = () => {
        navigate('/auth', { state: { from: location } });
    }

    return(
        <nav className="relative flex gap-10 items-center text-lg tracking-wide font-sans">
            {isAuthenticated && currentUser != null ?
                <>
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-12 flex gap-2 items-center text-lg tracking-wide font-sans cursor-pointer">
                        
                        <span className="select-none">Hi, {currentUser.username}</span>
                        <motion.div
                            className='flex justify-center items-center'
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 },
                            }}
                        >
                            <UpOutlined />
                        </motion.div>

                         {/* 下拉框 */}
                        {isOpen &&
                        <motion.div
                            className="w-auto h-auto absolute top-full mt-2 -left-12 px-5 py-2 rounded-[10px] bg-white text-dark select-none shadow-product"
                            variants={dropDown.containerVariants}
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <NavLink to="/user-profile/saleProduct">
                                <motion.button
                                    className={itemStyle}
                                    whileTap={{ scale: 0.95 }}
                                    variants={dropDown.itemVariants}
                                >
                                    <UserOutlined />
                                    My Space
                                </motion.button>
                            </NavLink>
                            
                            <motion.button
                                className={itemStyle}
                                whileTap={{ scale: 0.95 }}
                                variants={dropDown.itemVariants}
                                onClick={toggleCart}
                            >
                                <ShoppingCartOutlined />
                                <span>Shopping cart</span>
                            </motion.button>

                            <NavLink to= "/user-profile/collection">
                                <motion.button
                                    className={itemStyle}
                                    whileTap={{ scale: 0.95 }}
                                    variants={dropDown.itemVariants}
                                >
                                    <HeartOutlined />
                                    My collection
                                </motion.button>
                            </NavLink>
                            
                            
                            <div className="text-gray-200"><hr/></div>
                            <motion.button
                                className={itemStyle}
                                whileTap={{ scale: 0.95 }}
                                variants={dropDown.itemVariants}
                                onClick={handleSignOut}
                            >
                                <IoIosLogOut />
                                Logout
                            </motion.button>

                        </motion.div>
                        }
                    </div>
                    <div className="text-2xl">
                        <LuBellRing />
                    </div>
                </>
                :
                <CheckoutTest />
            }
            
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
            >
            <NavLink to="/about" className="px-4 py-3 rounded-md text-white bg-primary hover:border-transparent  transition duration-150">Post My ArtWork</NavLink>
            </motion.div>
        </nav>
    )

}

export default NavigationBar;