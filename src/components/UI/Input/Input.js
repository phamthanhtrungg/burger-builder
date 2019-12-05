import React from 'react'
import PropTypes from 'prop-types'

import classes from './Input.module.css';

const Input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input onChange={props.inputOnChange}
                className={classes.inputElement}
                {...props.elementConfig}
                value={props.value} />
            break;
        case 'textarea':
            inputElement = <textarea onChange={props.inputOnChange}
                className={classes.inputElement}
                {...props.elementConfig}
                value={props.value} />
            break;
        case 'select':
            inputElement = <select className={classes.inputElement} onChange={props.inputOnChange}>
                {props.elementConfig.options.map(key => {
                    return <option key={key.value} value={key.value}>{key.displayName}</option>
                })}
            </select>
            break;
        default:
            inputElement = <input onChange={props.inputOnChange}
                className={classes.inputElement}
                {...props.elementConfig}
                value={props.value} />
            break;
    }
    return (
        <div className={classes.container}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

Input.propTypes = {
    inputtype: PropTypes.string.isRequired,
    inputOnChange: PropTypes.func.isRequired
}

export default Input
