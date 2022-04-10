import React from "react";
import './header.css'
import Logo from "./Logo.jpg"

const Header=()=>{
    return(
        <header className='header'>
        <a href="#"><img src={Logo} alt='logo'/></a>
      </header>
    )
}
export default Header;