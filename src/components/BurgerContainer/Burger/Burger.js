import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...new Array(props.ingredients[igKey])]
                .map((_, index) => {
                    return <BurgerIngredient key={igKey + index} type={igKey} />
                });
        }).reduce((total, current) => {
            return total.concat(current)
        }, []);
    if (ingredients.length === 0) {
        ingredients = <h2>Let add ingredients!!!</h2>
    }
    return (
        <div className={classes.container}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}
export default Burger;