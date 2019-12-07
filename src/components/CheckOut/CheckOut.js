import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ContactData from './ContactData/ContactData';
import CheckOutSummary from './CheckOutSummary/CheckOutSummary';

class CheckOut extends Component {
    state = {
        totalPrice: 0
    }
    UNSAFE_componentWillMount() {
        let totalPrice = 0;
        for (let key in this.props.ingredients) {
            totalPrice += this.props.ingredients[key].amount * this.props.ingredients[key].price;
        }
        this.setState({ totalPrice: totalPrice });
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
                <CheckOutSummary ingredients={this.props.ingredients    }
                    cancelHandler={this.cancelHandler}
                    continueHandler={this.continueHandler} />
                <Route path={'/check-out/contact-data'}
                    render={(props) => <ContactData
                        ingredients={this.props.ingredients }
                        totalPrice={this.state.totalPrice}
                        {...props} />}
                />
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients.ingredients
    }
}

export default connect(mapStateToProps)(withRouter(CheckOut));
