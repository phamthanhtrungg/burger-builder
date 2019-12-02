import React from 'react'

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = () => {
    return (
        <ul className={classes.container}>
            <NavItem active={true}>Burger Builder</NavItem>
            <NavItem >Check Out</NavItem>
        </ul>
    )
}

export default NavItems
