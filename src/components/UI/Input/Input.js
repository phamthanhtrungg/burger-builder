import React from 'react'
import PropTypes from 'prop-types'

import classes from './Input.module.css';

const Input = props => {
    let inputElement = null;
    let classWithError = [classes.inputElement].join(' ');
    if (props.invalid && props.focused)
        classWithError = [classes.inputElement, classes.error].join(' ');
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                onChange={props.inputOnChange}
                className={classWithError}
                {...props.elementConfig}
                value={props.value} />
            break;
        case 'textarea':
            inputElement = <textarea
                onChange={props.inputOnChange}
                className={classWithError}
                {...props.elementConfig}
                value={props.value} />
            break;
        case 'select':
            inputElement = <select
                className={classWithError}
                onChange={props.inputOnChange}
                {...props.elementConfig}
                defaultValue={props.elementConfig.options[0].value}
            >
                {props.elementConfig.options.map(key => {
                    return <option key={key.value} value={key.value}>{key.displayName}</option>
                })}
            </select>
            break;
        default:
            inputElement = <input onChange={props.inputOnChange}
                className={classWithError}
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
    inputOnChange: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    focused: PropTypes.bool.isRequired,
    elementType: PropTypes.string.isRequired,
    elementConfig: PropTypes.object.isRequired
}

export default Input
