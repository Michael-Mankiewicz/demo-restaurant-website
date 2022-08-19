import React, { Component, useState } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from '../Button'
import '../Button.css'
import { Link, NavLink, useMatch,useResolvedPath } from "react-router-dom";

const Navbar = (props) => {

    let [isClicked,setIsClicked] = useState(false);

    const handleClick = ()=>{
        setIsClicked(!isClicked);
    }

        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <Link to={'/'}>
                        Villa Pizza
                    </Link>
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className = {isClicked ? "fas fa-times" : 'fas fa-bars'}></i>
                </div>
                <div className="nav-buttons">
                    <ul className = {isClicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index)=>{
                            return (
                            // <CustomLink to = {item.url} index = {index} cName = {item.cName}>
                                //   {item.title}
                            // </CustomLink>
                                <li key={index}>
                                    <NavLink className = {item.cName} to={item.url} onClick = {handleClick}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <NavLink className = {'btn--medium btn--primary btn main-button'} to={"/order-now"}>Order Now</NavLink>
                </div>
            </nav>
        )
}

/*function CustomLink({to, children, props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return (
        <li key = {props.index}>
            <Link className = {(path === to ? "active" : "") + props.cName} to = {props.to}>
                {children}
            </Link>
        </li>
    )
}*/
export default Navbar