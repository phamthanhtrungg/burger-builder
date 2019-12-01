import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    const buildcontrols = Object.keys(props.ingredients)
        .map(igKey => {
            return <BuildControl
                key={igKey}
                type={igKey}
                addIngredientsHandler={() => props.addIngredientsHandler(igKey)}
                removeIngredientsHandler={() => props.removeIngredientsHandler(igKey)}
                disabledInfo={props.disabledInfo[igKey]}
            />
        });
    return (
        <div className={classes.container}>
            {buildcontrols}
            <Button>ORDER NOW</Button>
        </div>
    )
}
BuildControls.propTypes = {
    ingredients: PropTypes.object.isRequired,
    addIngredientsHandler: PropTypes.func.isRequired,
    removeIngredientsHandler: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired
}
export default BuildControls;