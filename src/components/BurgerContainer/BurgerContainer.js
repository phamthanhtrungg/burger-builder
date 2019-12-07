import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ingredientsAction from '../../redux/action/action';

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
        error: null,
        ordering: false,
        totalPrice: 0
    }
    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(res => {
        //         this.setState({ ingredients: res.data });
        //     })
        //     .catch(err => {
        //         this.setState({ error: err.message });
        //     });
    }
    //#region Add and Remove ingredients
    addIngredientsHandler = (type) => {
        this.props.addIngredients(type);
        let updatedIngredients = { ...this.props.ingredients };
        let price = this.state.totalPrice + updatedIngredients[type].price;
        this.setState({ totalPrice: price });

    }
    removeIngredientsHandler = (type) => {
        const updatedCount = this.props.ingredients[type].amount;
        if (updatedCount <= 0) {
            return;
        }
        this.props.removeIngredients(type);
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
    continuePurchaseHandler = () => {
        this.props.history.push({
            pathname: '/check-out',
        });
    }
    //#endregion
    render() {
        let burger = <Spinner />
        if (this.props.ingredients) {
            let disabledInfo = { ...this.props.ingredients };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key].amount <= 0;
            }
            burger = (
                <Wrapper>
                    <Modal show={this.state.ordering}
                        toggleOffOrderModalHandler={this.toggleOffOrderModalHandler}>
                        <OrderSummary
                            ingredients={this.props.ingredients}
                            toggleOffOrderModalHandler={this.toggleOffOrderModalHandler}
                            continuePurchaseHandler={this.continuePurchaseHandler}
                        />
                    </Modal>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredients={this.props.ingredients}
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
const mapStateToProps = (state) => {
    return { ingredients: state.ingredients.ingredients }
}
const mapDispatchToProps = dispatch => {
    return {
        addIngredients: (igType) => dispatch(ingredientsAction.addIngredient(igType)),
        removeIngredients: (igType) => dispatch(ingredientsAction.removeIngredient(igType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(BurgerContainer, axios))); 