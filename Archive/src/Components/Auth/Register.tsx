//react
import React, { useState } from 'react';

//redux
import { useSelector,useDispatch } from "react-redux";

//react-router-dom
import { useNavigate } from 'react-router-dom';

//motion
import { motion } from "framer-motion";

//antd
import { Space, Divider, message } from 'antd';

//icons
import { ImGoogle } from 'react-icons/im';

//style
import { pageSetting,inputSetting } from '../../style';

//redux

// define the props for the component
type RegisterFormProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
//type for the user information
import { RootState } from '../../Redux/store';

const RegisterForm: React.FC<RegisterFormProps> = ({setIsLogin}) => {

    //hook
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //redux
    const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
    });
    
    const [errorMess, setErrorMessage] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userInfo);
    }

    console.log(isLoggedIn,user)
    return(
        <div className='w-full h-full flex items-center'>
            {/* form */}
            <form onSubmit={onSubmit} className='flex-1 h-full flex flex-col justify-center items-center gap-12'>
                <h1 className='text-center text-2xl font-bold'>Join us!</h1>
                <Space direction='vertical' size='large'>
                    <div>
                        <label className='tracking-wider text-sm'>
                            Login Email&nbsp;
                            <span className='text-accent'>*</span>
                        </label>
                        <input 
                            name='email'
                            type='email' 
                            className={`${inputSetting.input} w-full text-sm`}
                            onChange={onChange}
                            placeholder='Enter your email'
                        />
                        {errorMess.email && <p className='text-red-500'>{errorMess.email}</p>}
                    </div>

                    <div>
                        <label className='tracking-wider text-sm'>
                            Password&nbsp;
                            <span className='text-accent'>*</span>
                        </label>
                        <input 
                            name='password'
                            type='password' 
                            className={`${inputSetting.input} h-12 w-full text-sm`}
                            onChange={onChange}
                        />
                        {errorMess.password && <p className='text-red-500'>{errorMess.password}</p>}
                    </div>

                    <div>
                        <label className='tracking-wider text-sm'>
                            Confirm Password&nbsp;
                            <span className='text-accent'>*</span>
                        </label>
                        <input 
                            name='confirmPassword'
                            type='password' 
                            className={`${inputSetting.input} h-12 w-full text-sm`}
                            onChange={onChange}
                        />
                        {errorMess.confirmPassword && <p className='text-red-500'>{errorMess.confirmPassword}</p>}
                    </div>

                    <div>
                        <label className='tracking-wider text-sm'>
                            Username
                        </label>
                        <input 
                            name='username'
                            type='text' 
                            className={`${inputSetting.input} h-12 w-full text-sm`}
                            onChange={onChange}
                        />
                        {errorMess.username && <p className='text-red-500'>{errorMess.confirmPassword}</p>}
                    </div>
                    
                    <p className='text-sm'>
                        Already have account? <span className='text-[#E4405F] cursor-pointer underline' onClick={() => {setIsLogin(true)}}>Login</span>
                    </p>

                    {/* submit button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type='submit'
                        className="w-full h-auto border border-1 rounded-md p-2 text-center"
                    >Sign up</motion.button>

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

            <div className='sm:flex hidden w-1/2 h-full flex-col justify-around shadow-product bg-signUp bg-center bg-cover text-white'></div>
        </div>
    );
}

export default RegisterForm;