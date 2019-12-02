import React, { Component } from 'react';

import Wrapper from '../wrapper/wrapper';
import Burger from './Burger/Burger';
import axios from '../../axios-instance';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import Spinner from '../UI/Spinner/Spinner';
import BuildControls from './BurgerControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from './OrderSummary/OrderSummary';

class BurgerContainer extends Component {
    state = {
        ingredients: null,
        error: null,
        ordering: false
    }
    componentDidMount() {
        axios.get('/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
    }
    //#region Add and Remove ingredients
    addIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type].amount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type].amount = updatedCount;
        this.setState({ ingredients: updatedIngredients });
    }
    removeIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type].amount;
        if (updatedCount <= 0) {
            return;
        }
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type].amount = updatedCount - 1;
        this.setState({ ingredients: updatedIngredients });
    }
    //#endregion
    //#region Show modal when hitting OrderNow button
    toggleOnOrderModalHandler = () => {
        this.setState({ ordering: true });
    }
    toggleOffOrderModalHandler = () => {
        this.setState({ ordering: false });
    }
    //#endregion
    //#region Continue purchase
    continuePurchaseHandler=()=>{
        alert('Clicked continue');
    }
    //#endregion
    render() {
        let burger = <Spinner />
        if (this.state.ingredients) {
            let disabledInfo = { ...this.state.ingredients };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key].amount <= 0;
            }
            burger = (
                <Wrapper>
                    <Modal show={this.state.ordering}
                        toggleOffOrderModalHandler={this.toggleOffOrderModalHandler}>
                        <OrderSummary
                            ingredients={this.state.ingredients}
                            toggleOffOrderModalHandler={this.toggleOffOrderModalHandler}
                            continuePurchaseHandler={this.continuePurchaseHandler}
                        />
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredients={this.state.ingredients}
                        removeIngredientsHandler={this.removeIngredientsHandler}
                        addIngredientsHandler={this.addIngredientsHandler}
                        disabledInfo={disabledInfo}
                        toggleOnOrderHandler={this.toggleOnOrderModalHandler} />
                </Wrapper>
            )
        }
        return (
            <Wrapper>
                {burger}
            </Wrapper>
        )
    }
}

export default withErrorHandler(BurgerContainer, axios);