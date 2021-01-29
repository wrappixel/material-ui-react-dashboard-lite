import React from 'react';
import logoicn from '../../../../assets/images/logo-light-icon.png'
const LogoIcon = (props) => {
    return ( 
        <img
            alt="Logo"
            src={logoicn}
            {...props}
        />
    );
}
 
export default LogoIcon;