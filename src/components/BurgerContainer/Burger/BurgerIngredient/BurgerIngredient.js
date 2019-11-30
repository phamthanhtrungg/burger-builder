import React from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    var ingredient = null;
    switch (props.type) {
        case 'bread-top':
            ingredient = (<div className={classes.breadTop}>
                <div className={classes.seed1}></div>
                <div className={classes.seed2}></div>
            </div>)
            break;
        case 'bread-bottom':
            ingredient = <div className={classes.breadBottom}></div>
            break;
        case 'meat':
            ingredient = <div className={classes.meat}></div>
            break;
        case 'salad':
            ingredient = <div className={classes.salad}></div>
            break;
        case 'tomato':
            ingredient = <div className={classes.tomato}></div>
            break;
        case 'cheese':
            ingredient = <div className={classes.cheese}></div>
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient;