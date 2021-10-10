import React from 'react';
import Sidebar from './Sidebar';

function Header()  {
    
    if(!sessionStorage.getItem('auth-token')){
        return(
            <>
            </>
        );

    } else{
        return(
            <Sidebar />
        );
    }
}

export default Header;