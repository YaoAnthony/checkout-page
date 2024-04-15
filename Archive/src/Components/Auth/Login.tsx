//react
import React, { useState } from 'react';

//redux
import { useDispatch } from "react-redux";
import { setUser,setToken } from '../../Features/auth/authSlice';
import { useLoginMutation } from '../../Features/auth/authApi';
//TODO: import login mutation from authApi

//react-router-dom
import { useNavigate, useLocation } from 'react-router-dom';

//antd
import { Space, Divider, message } from 'antd';

//motion
import { motion } from "framer-motion";

//icons
import { ImGoogle } from 'react-icons/im';

//style
import { pageSetting, inputSetting } from '../../style';
import { setUserProfile } from '../../Features/profile/profileSlice';

// define the props for the component
type LoginFormProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm: React.FC<LoginFormProps> = ({setIsLogin}) => {

    //hook
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [login] = useLoginMutation();

    let from = location.state?.from?.pathname || "/";

    //user information save here
    const [ loginInfo, setLoginInfo ] = useState({
        email: '',
        password: ''
    });

    //error message
    const [ errorMess, setErrorMess ] = useState<String>("");

    //Handle the input change
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    };

    //Handle the form submit
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await login(loginInfo).unwrap();
            if(userData){
                dispatch(setUser(userData.userProfile.user));
                dispatch(setToken({
                    accessToken:userData.token,
                    refreshToken:'',
                    expiresIn: 5000
                }));
                dispatch(setUserProfile(userData.userProfile));
                message.success('Login successfully!');
                navigate(from, { replace: true });
            }else{
                message.error('Login failed');
                setErrorMess('Login failed');
            }
        } catch (err) {
            // 处理登录失败的情况
            console.error("Login failed:", err);
        }
    };

    return(
        <div className='w-full h-full flex items-center'>
            {/* background */}
            <div className='sm:flex hidden flex-1 h-full flex-col justify-around shadow-product bg-signIn bg-cover text-white'></div>
        
            {/* form */}
            <form onSubmit={onSubmit} className='flex-1 h-full flex flex-col justify-center items-center gap-12'>
                <h1 className='text-center text-2xl font-bold'>Welcome Back !</h1>
                <Space direction='vertical' size='large'>
                    <div>
                        <label className='tracking-wider text-sm'>Email</label>
                        <input 
                            name='email'
                            type='email' 
                            className={`${inputSetting.input} w-full text-sm`}
                            onChange={onChange}
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div>
                        <label className='tracking-wider text-sm'>Password</label>
                        <input 
                            name='password'
                            type='password' 
                            className={`${inputSetting.input} h-12 w-full text-sm`}
                            onChange={onChange}
                            required
                        />
                    </div>
                    {errorMess && <p className='text-red-500'>{errorMess}</p>}
                    <p className='text-sm'>
                        Don't have account? <span className='text-[#E4405F] cursor-pointer underline' onClick={() => {setIsLogin(false)}}>Join us</span>
                    </p>

                    {/* submit button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type='submit'
                        className="w-full h-auto border border-1 rounded-md p-2 text-center"
                    >Log In</motion.button>

                    <Divider plain>Or</Divider>
                    <div className='flex justify-center'>
                        <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className='w-5 text-xl text-[#E4405F] cursor-pointer'
                        >
                        <ImGoogle />
                        </motion.div>
                    </div>
                </Space>
            </form>

        </div>
    );
}

export default LoginForm;