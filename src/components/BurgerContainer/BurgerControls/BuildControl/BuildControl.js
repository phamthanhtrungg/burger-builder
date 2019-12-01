import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css';

const BuildControl = props => {
    return (
        <div className={classes.container}>
            <div className={classes.label}>{props.type}</div>
            <button className={classes.less} disabled>LESS</button>
            <button className={classes.more}>MORE</button>
        </div>
    )
}

BuildControl.propTypes = {
    type: PropTypes.string.isRequired
}

export default BuildControl
