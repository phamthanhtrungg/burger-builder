import React from 'react'
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    return (props.show ? <div className={classes.container} onClick={props.click}></div > : null)

}
Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    click: PropTypes.func.isRequired
}
export default Backdrop
