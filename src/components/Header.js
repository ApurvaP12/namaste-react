

import { useState } from "react";
import AppLogo from  "../../Images/app-logo.png";


const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState("Login");
    return(
        <div className="header-container">
            <div className="header-right-area">
                <div className="logo-wrapper">
                    <img alt="app-logo" src= {AppLogo}/>
                </div>
            </div>
            
            <div className="header-right-area">
                <div className="navlinks-wrapper">
                    <ul>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Profile</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div className="login-container">
                        <button className="login-btn" onClick={()=> {
                            loginBtnText === "Login" ? setLoginBtnText("Logout") : setLoginBtnText("Login")
                        }}>{loginBtnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Header;