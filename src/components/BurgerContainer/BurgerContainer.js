import React, { Component } from 'react';

import Wrapper from '../wrapper/wrapper';
import Burger from './Burger/Burger';
import axios from '../../axios-instance';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import Spinner from '../UI/Spinner/Spinner';
import BuildControls from './BurgerControls/BuildControls';

class BurgerContainer extends Component {
    state = {
        ingredients: null,
        error: null
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
        const updatedCount = this.state.ingredients[type] + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
    }
    removeIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type];
        if (updatedCount <= 0) {
            return;
        }
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount - 1;
        this.setState({ ingredients: updatedIngredients });
    }
    render() {
        let burger = <Spinner />
        if (this.state.ingredients) {
            let disabledInfo = { ...this.state.ingredients };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
            burger = (
                <Wrapper>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredients={this.state.ingredients}
                        removeIngredientsHandler={this.removeIngredientsHandler}
                        addIngredientsHandler={this.addIngredientsHandler}
                        disabledInfo={disabledInfo} />
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