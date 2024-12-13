import { useState, useEffect } from "react";
import { LOGO } from "../Utils/Constants";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    useEffect(() => {
        console.log("useEffect is called")
    }, [btnName]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-button" onClick={() => {
                        btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;