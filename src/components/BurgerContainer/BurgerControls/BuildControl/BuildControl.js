import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const BuildControl = props => {
    return (
        <div className={classes.container}>
            <div className={classes.label}>{props.type}</div>
            <button className={classes.less} onClick={props.removeIngredientsHandler} disabled={props.disabledInfo}>LESS</button>
            <button className={classes.more} onClick={props.addIngredientsHandler}>MORE</button>
        </div>
    )
}

BuildControl.propTypes = {
    type: PropTypes.string.isRequired,
    addIngredientsHandler: PropTypes.func.isRequired,
    removeIngredientsHandler: PropTypes.func.isRequired,
    disabledInfo: PropTypes.bool.isRequired
}

export default BuildControl
