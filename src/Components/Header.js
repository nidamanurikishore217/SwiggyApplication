import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                    <li><Link to="./About" style={{ textDecoration: 'none' }}>About Us</Link></li>
                    <li><Link to="./contact" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    <li><Link to="./Grocery" style={{ textDecoration: 'none' }}>Grocery Store</Link></li>
                    <button style={{ width: '100px', margin: 5 }} onClick={() => {
                        btnName === "Login" ? setBtnName('LogOut') : setBtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;