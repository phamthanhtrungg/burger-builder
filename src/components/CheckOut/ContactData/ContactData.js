import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';
import { connect } from 'react-redux';

import classes from './ContactData.module.css';
import axios from '../../../axios-instance';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                    name: 'name'
                },
                value: '',
                validation: { required: true, min: 3 },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail',
                    name: 'email'
                },
                value: '',
                validation: { required: true, min: 3 },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your phone',
                    name: 'phone'
                },
                value: '',
                validation: { required: true, pattern: /^0[0-9]{9}$/ },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country',
                    name: 'country'
                },
                value: '',
                validation: { required: true, min: 3 },
                valid: false,
                touched: false
            },
            deliveryMethods: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayName: 'Fastest' }, { value: 'cheapest', displayName: 'Cheapest' }],
                    name: 'deliveryMethods'
                },
                value: '',
                validation: { required: true },
                valid: false,
                touched: false
            }
        },
        isSending: false
    }

    //#region  Input Handlers
    validationHandler = (value, rules) => {
        let valid = true;
        if (rules.required) {
            valid = value.length > 0 && valid;
        }
        if (rules.pattern) {
            var regex = new RegExp(rules.pattern);
            valid = regex.test(value) && valid;
        }
        if (rules.min) {
            valid = value.length >= rules.min && valid;
        }
        if (rules.max) {
            valid = value.length <= rules.max && valid;
        }
        return valid;
    }

    inputOnChangeHandler = (e) => {
        const orderForm = _.clone(this.state.orderForm);
        orderForm[e.target.name].value = e.target.value;
        orderForm[e.target.name].touched = true;
        orderForm[e.target.name].valid = this.validationHandler(e.target.value, orderForm[e.target.name].validation);
        this.setState({ orderForm: orderForm });
    }

    //#endregion
    //#region submit order
    submitOrderHandler = (e) => {
        e.preventDefault();
        this.setState({ isSending: true });
        let orderData = {
            ingredients: this.props.ingredients,
            uid: this.props.uid
        };
        for (let key in this.state.orderForm) {
            orderData[key] = this.state.orderForm[key].value;
        }
        axios.post('orders.json?auth=' + this.props.token, orderData)
            .then(res => {
                this.setState({ isSending: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ isSending: false });
                this.props.history.push('/');
            })
    }
    //#endregion
    render() {
        let formElements = [];
        let btnDisabled = false;
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
            btnDisabled = this.state.orderForm[key].valid
        }
        let form = <Spinner />
        if (!this.state.isSending) {
            form = (
                <form onSubmit={this.submitOrderHandler}>
                    {formElements.map(fE => {
                        return <Input
                            key={fE.id}
                            elementType={fE.config.elementType}
                            elementConfig={fE.config.elementConfig}
                            value={fE.config.value}
                            inputOnChange={this.inputOnChangeHandler}
                            invalid={!fE.config.valid}
                            focused={fE.config.touched} />
                    })}
                    <Button disabled={!btnDisabled} type="submit">submit</Button>
                </form>
            );
        }
        return (
            <div className={classes.container}>
                <h2>Your Contact Data</h2>
                {form}
            </div>
        );
    }

}

ContactData.propTypes = {
    ingredients: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients.ingredients,
        token: state.auth.token,
        uid: state.auth.uid
    }
}
export default connect(mapStateToProps)(ContactData);
