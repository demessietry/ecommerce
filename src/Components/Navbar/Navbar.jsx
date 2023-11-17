import React, { useContext } from "react";
import "./Navbar.css"

import logo from "../Assets/logo.png"
import cart_icon  from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {

    const {getTotalCartItems,  SetMenufunction, menu } = useContext(ShopContext)

    return(
        <div className="navbar">
            <div className="nav-logo" onClick={()=> {SetMenufunction("shop")}}>
            <Link style={{textDecoration: "none"}} to='/' className="nav-logo"><img src={logo} alt="" /> <p>SHOPPER</p></Link>
                
            </div>
            <ul className="nav-menu">
                <li onClick={()=> {SetMenufunction("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link> {menu === "shop" && <hr /> }</li>
                <li onClick={()=> {SetMenufunction("mens")}}><Link style={{textDecoration: "none"}} to='/mens'>Men</Link> {menu === "mens" && <hr /> }</li>
                <li onClick={()=> {SetMenufunction("womens")}}><Link style={{textDecoration: "none"}} to='/womens'>Women</Link> {menu === "womens" && <hr /> }</li>
                <li onClick={()=> {SetMenufunction("kids")}}><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link> {menu === "kids" && <hr /> }</li>
                <li onClick={()=> {SetMenufunction("traditionals")}}><Link style={{textDecoration: "none"}} to='/traditionals'>Traditional</Link> {menu === "traditionals" && <hr /> }</li>
            </ul>
            <div className="nav-login-cart">
            <Link to='/login' onClick={()=> {SetMenufunction("")}}><button>Login</button></Link>
            <Link to='/cart' onClick={()=> {SetMenufunction("")}}><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar