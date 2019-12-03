import React from 'react'
import PropTypes from 'prop-types'

import styles from './Order.module.css';

const Order = props => {
    let ingredients = [];
    let totalPrice = 0;
    for (let key in props.ingredients) {
        if (key === 'id')
            continue;
        ingredients.push({
            name: key,
            amount: props.ingredients[key].amount,
            price: props.ingredients[key].price
        });
        totalPrice += props.ingredients[key].price * props.ingredients[key].amount;
    }
    const ouputIngredients = ingredients.map((key) => {
        return <span key={key.name}>{key.name} ({key.amount})</span>
    });
    return (
        <div className={styles.container}>
            <p>Ingredients: {ouputIngredients}</p>
            <p>Totalprice: <strong>{totalPrice}$</strong></p>
        </div>
    )
}

Order.propTypes = {
    ingredients: PropTypes.object.isRequired,
}

export default Order
