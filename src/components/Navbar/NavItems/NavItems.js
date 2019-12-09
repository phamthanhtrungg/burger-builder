import React from 'react'

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
    return (
        <ul className={classes.container}>
            <NavItem href="/">Burger Builder</NavItem>
            <NavItem href="/orders">Orders</NavItem>
            {props.isAuth
                ? <NavItem href="/logout">Log Out</NavItem>
                : <NavItem href="/auth">Authentication</NavItem>}
        </ul>
    )
}

export default NavItems
