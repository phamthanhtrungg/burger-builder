import React from 'react'
import PropTypes from 'prop-types';

import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={classes.navItem}>
            <a className={props.active?classes.active:null} href="/">{props.children}</a>
        </li>
    )
}
NavItem.propTypes={
    active:PropTypes.bool
}
export default NavItem
