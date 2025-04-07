
import AppLogo from  "../../Images/app-logo.png";
const Header = () => {
    return(
        <div className="header-container">
            <div className="logo-wrapper">
                <img alt="app-logo" src= {AppLogo}/>
            </div>
            <div className="navlinks-wrapper">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;