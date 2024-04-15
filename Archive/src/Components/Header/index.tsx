
//react
import React from 'react';

//component
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';


const Header : React.FC = () => {
    return(
        <>
            <HeaderDesktop />
            <HeaderMobile />
        </>
    )
}

export default Header;