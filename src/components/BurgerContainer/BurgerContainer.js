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
    render() {
        let burger = <Spinner />
        if (this.state.ingredients) {
            burger = <Burger ingredients={this.state.ingredients} />;
        }
        return (
            <Wrapper>
                {burger}
                <BuildControls />
            </Wrapper>
        )
    }
}

export default withErrorHandler(BurgerContainer, axios);