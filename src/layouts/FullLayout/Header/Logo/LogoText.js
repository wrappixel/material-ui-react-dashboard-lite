import React from 'react';
import logotxt from "../../../../assets/images/logo-light-text.png";
const LogoText = (props) => {
    return ( 
        <img
            alt="Logo"
            src={logotxt}
            {...props}
        />
    );
}
 
export default LogoText;