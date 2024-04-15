//react
import React, { useState } from 'react';

//motion
import { motion } from "framer-motion";

//component
import RegisterForm from "./Register";
import LoginForm from "./Login";


const Auth: React.FC = () => {

    const [ isLogin, setIsLogin ] = useState<boolean>(true);

    return(
        <div className='relative w-full h-[800px] lg:w-[640px] xl:w-[800px] 2xl:w-[1200px] border-0  md:border md:border-1'>
            {
            isLogin && 
                <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full h-full shadow-signTable'
                >
                <LoginForm setIsLogin={setIsLogin}/>
                </motion.div>
            }
            {
            !isLogin &&
                <motion.div
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                exit={{  opacity: 0 }}
                className='w-full h-full shadow-signTable'
                >
                <RegisterForm setIsLogin={setIsLogin} />
                </motion.div>
            }
        </div>
    );
}

export default Auth;