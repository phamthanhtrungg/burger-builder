import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import ContactData from './ContactData/ContactData';
import CheckOutSummary from './CheckOutSummary/CheckOutSummary';

class CheckOut extends Component {
    state = {
        ingredients: {
            salad: {
                amount: 1,
                price: 0.5
            },
            cheese: {
                amount: 1,
                price: 0.5
            },
            meat: {
                amount: 1,
                price: 0.5
            },
            tomato: {
                amount: 1,
                price: 0.5
            },
        },
        totalPrice: 0
    }
    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = { ...this.state.ingredients };
        for (const [key, value] of query.entries()) {
            if (key !== 'price') {
                ingredients[key].amount = +value;
            }
            else {
                this.setState({ totalPrice: value });
            }
        }
        this.setState({ ingredients: ingredients });
    }
    //#region Cancel and Continue Handler of Check Out 
    cancelHandler = () => {
        this.props.history.goBack();
    }
    continueHandler = () => {
        this.props.history.replace('/check-out/contact-data');
    }
    render() {
        return (
            <div style={{ alignItems: 'center', overflow: 'auto' }}>
                <CheckOutSummary ingredients={this.state.ingredients}
                    cancelHandler={this.cancelHandler}
                    continueHandler={this.continueHandler} />
                <Route path={'/check-out/contact-data'}
                    render={(props) => <ContactData 
                        ingredients={this.state.ingredients} 
                        totalPrice={this.state.totalPrice} 
                        {...props} />}
                />
            </div>
        )
    }

}

CheckOut.propTypes = {

}

export default withRouter(CheckOut);
