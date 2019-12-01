import React from 'react'
import PropTypes from 'prop-types';
import classes from './Button.module.css';

export const Button = (props) => {
    let modifiedClasses = [classes.container, classes.success].join(' ');

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired
}