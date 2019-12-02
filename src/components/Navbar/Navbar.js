import React from 'react'
import PropTypes from 'prop-types'

import classes from './Navbar.module.css'
import { Logo } from '../UI/Logo/Logo';
import NavItems from './NavItems/NavItems';
import Menu from '../UI/Menu/Menu';


const Navbar = props => {
    return (
        <div className={classes.container}>
            <Menu click={props.openSideDrawerHandler} />
            <Logo />
            <nav style={{ height: '100%' }}>
                <NavItems />
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    openSideDrawerHandler: PropTypes.func.isRequired
}

export default Navbar
