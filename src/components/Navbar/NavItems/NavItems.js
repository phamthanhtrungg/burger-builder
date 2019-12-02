import React from 'react'

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = () => {
    return (
        <ul className={classes.container}>
            <NavItem  href="/">Burger Builder</NavItem>
            <NavItem href="/check-out">Check Out</NavItem>
        </ul>
    )
}

export default NavItems
