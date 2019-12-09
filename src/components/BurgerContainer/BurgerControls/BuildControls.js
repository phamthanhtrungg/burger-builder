import React from 'react';
import PropTypes from 'prop-types';

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
    let totalPrice = 0;
    for (let key in props.ingredients) {
        totalPrice += props.ingredients[key].price * props.ingredients[key].amount;
    }
    return (
        <div className={classes.container}>
            <span>Total: <strong>{totalPrice}</strong></span>
            {buildcontrols}
            <button
                className={classes.orderButton}
                disabled={totalPrice === 0}
                onClick={props.toggleOnOrderHandler}
            >{props.isAuth?'ORDER NOW':'SIGN UP TO ORDER NOW'}</button>
        </div >
    )
}
BuildControls.propTypes = {
    ingredients: PropTypes.object.isRequired,
    addIngredientsHandler: PropTypes.func.isRequired,
    removeIngredientsHandler: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired,
    toggleOnOrderHandler: PropTypes.func.isRequired
}
export default BuildControls;