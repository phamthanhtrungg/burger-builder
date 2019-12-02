import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={classes.navItem}>
            <NavLink
                exact
                to={props.href}
                activeClassName={classes.active}
            >{props.children}</NavLink>
        </li>
    )
}
NavItem.propTypes = {
    href: PropTypes.string.isRequired
}
export default NavItem
