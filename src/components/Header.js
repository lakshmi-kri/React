import { useState } from "react";
import { LOGO } from "../Utils/Constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={() => { btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;