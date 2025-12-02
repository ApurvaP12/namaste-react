

import { useState } from "react";
import { Link } from "react-router";
import AppLogo from  "../../Images/app-logo.png";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState("Login");
    const onlineStatus = useOnlineStatus();

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
                        <li>Online Status: {onlineStatus ? "✅" : "🔴" }</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About US</Link></li>
                        <li><Link to="/contact">Contact US</Link></li>
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