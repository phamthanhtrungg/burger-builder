import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

export default function BuildControls() {
    return (
        <div className={classes.container}>
            <BuildControl type="salad" />
            <BuildControl type="meat" />
            <BuildControl type="cheese" />
            <BuildControl type="tomato" />
        </div>
    )
}
