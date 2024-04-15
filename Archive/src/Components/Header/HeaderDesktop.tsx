
//react
import React,{ useState,useEffect } from 'react';
import { NavLink,useNavigate, useLocation } from 'react-router-dom';

//component
import NavigationBar from './NavigationBar';

//style
import { pageSetting } from '../../style';
import style from './style.module.css';



const HeaderDesktop : React.FC = () => {

    // GET the current path
    const location = useLocation(); //get the path
    const path = location.pathname;
    const [ currentPath, setCurrentPath ] = useState(path); //set the active path
    const [ bgColor, setBgColor ] = useState('bg-none text-white'); //set the background color

    const handleScroll = () => {
        // 如果页面的垂直滚动偏移量大于0，即页面不在最顶部
        if (window.scrollY > 500) {
          setBgColor('bg-white text-dark'); // 设置背景色为白色
        } else {
          setBgColor('bg-none text-white'); // 否则设置为透明
        }
    };

    useEffect(() => {
        // 组件挂载时添加滚动事件监听
        window.addEventListener('scroll', handleScroll);
        setCurrentPath(path);
        // 组件卸载时移除滚动事件监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [path]);

    const LOGO = () => (
        <NavLink 
            to="/"
            className="flex items-center">
            {/* <img src="/path-to-your-logo.png" alt="Logo" class="h-8 w-8 mr-2"> <!-- Logo 图片 --> */}
            <span className="font-bold text-2xl">Polaris Go</span>
        </NavLink>
    )

    const RenderContentBasedOnLocation = () => {
        switch (currentPath) {
            case '/':
                return (
                    <div className={`${bgColor} ${pageSetting.padding} md:bg-none py-7 flex w-full items-center justify-between duration-500`}>
                        <LOGO />
                        <NavigationBar />
                    </div>
                )
            case '/auth':
                // 登录页面的 Header 内容 
                return (
                    <div className={`${pageSetting.padding} md:bg-none py-7 flex w-full items-center justify-between duration-500`}>
                        <LOGO />
                    </div>
                )
            case '/user-profile':
                return <div>主页面特定内容</div>;
            default:
                return (
                    <div className={`${style.glassmorphism} ${pageSetting.padding} md:bg-none py-7 flex w-full items-center justify-between duration-500`}>
                        <LOGO />
                        <NavigationBar />
                    </div>
                )
        }
    };

    return(
        <header className={`z-50 fixed top-0 left-0 w-full hidden md:flex `} >
            <RenderContentBasedOnLocation />
        </header>
    )
}

export default HeaderDesktop;