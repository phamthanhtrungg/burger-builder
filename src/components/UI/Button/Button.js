import React from 'react'
import classes from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    let btnClass = [classes.button, classes.success].join(' ');
    if (props.btnType === "danger") {
        btnClass = [classes.button, classes.danger].join(' ')
    }
    return (
        <button className={btnClass} onClick={props.click}>
            {props.children}
        </button>
    )
}
Button.propsTypes = {
    btnType: PropTypes.string.isRequired,
    click:PropTypes.func.isRequired
}
export default Button;