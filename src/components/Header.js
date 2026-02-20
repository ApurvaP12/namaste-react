

import { useState, useContext } from "react";
import { Link } from "react-router";
import AppLogo from  "../../Images/app-logo.png";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";
import UserContext from "../utils/userContext.js";


const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState("Login");
    const onlineStatus = useOnlineStatus();

    //Subscribing the store using a Selector
    // Using this hook useSlector - we can acces to our store

    const cartItems = useSelector((store)=> store.cart.items);
    console.log("cartItems",cartItems)

    // Context example

    const {loggedInUser} = useContext(UserContext);
    console.log("UserContext",loggedInUser);

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
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li><Link to="/cart">Cart- ({cartItems.length} items)</Link></li>
                    </ul>
                </div>
                <div className="user-name font-bold">{loggedInUser}</div>
                <div className="login-container">
                        <button className="login-btn p-1 border-2 bg-gray-100 rounded-lg cursor-pointer" onClick={()=> {
                            loginBtnText === "Login" ? setLoginBtnText("Logout") : setLoginBtnText("Login")
                        }}>{loginBtnText}</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header;