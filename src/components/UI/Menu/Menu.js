import React from 'react'
import PropTypes from 'prop-types';

import classes from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={classes.container} onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
Menu.propTypes = {
    click: PropTypes.func.isRequired
}
export default Menu
