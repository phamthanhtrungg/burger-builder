import React from 'react'
import PropTypes from 'prop-types'

import Burger from '../../BurgerContainer/Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckOutSummary = props => {
    return (
        <div>

            <Burger ingredients={props.ingredients} />
            <div style={{ margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'space-around' }}>
                <Button btnType="danger" click={props.cancelHandler}>CANCEL</Button>
                <Button btnType="success"
                    click={props.continueHandler}
                >CONTINUE</Button>
            </div>
        </div>
    )
}

CheckOutSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    continueHandler: PropTypes.func.isRequired
}

export default CheckOutSummary
