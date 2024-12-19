import { useState, useEffect } from "react";
import { LOGO } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";



const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("useEffect is called")
    }, [btnName]);
    return (
        <div className="flex justify-between bg-green-100">
            <div className="logo-container">
                <img className="w-24" src={LOGO} />
            </div>
            <div className="flex items-center">
                <ul className="flex px-5">
                    <li className="px-3">OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery Shopping</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="px-3 text-lg " onClick={() => {
                        btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;