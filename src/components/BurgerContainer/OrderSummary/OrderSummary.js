import React from 'react'
import classes from './OrderSummary.module.css';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredienItems = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey].amount}</span></li>
        });
    let totalPrice = 0;
    for (let key in props.ingredients) {
        totalPrice += props.ingredients[key].price * props.ingredients[key].amount;
    }
    return (
        <div className={classes.container}>
            <h2>Your order</h2>
            <p>The delicious hamburger with following ingredients:</p>
            <ul>
                {ingredienItems}
            </ul>
            <p><strong>Total: {totalPrice}</strong></p>
            <Button btnType="danger" click={props.toggleOffOrderModalHandler}>CANCEL</Button>
            <Button btnType="success" click={props.continuePurchaseHandler}>CONTINUE</Button>
        </div>
    )
}
OrderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    toggleOffOrderModalHandler: PropTypes.func.isRequired,
    continuePurchaseHandler: PropTypes.func.isRequired,
}
export default OrderSummary
