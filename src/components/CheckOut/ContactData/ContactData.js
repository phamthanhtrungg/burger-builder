import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';

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
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail',
                    name: 'email'
                },
                value: ''
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your phone',
                    name: 'phone'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country',
                    name: 'country'
                },
                value: ''
            },
            deliveryMethods: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayName: 'Fastest' }, { value: 'cheapest', displayName: 'Cheapest' }],
                    name: 'deliveryMethods'
                },
                value: ''
            }
        },
        isSending: false
    }
    componentDidMount() {
        console.log(this.state);
    }
    //#region  onChange for input handler
    inputOnChangeHandler = (e) => {
        const orderForm = _.clone(this.state.orderForm);
        orderForm[e.target.name].value = e.target.value;
        this.setState({ orderForm: orderForm });
    }
    //#endregion
    //#region submit order
    submitOrderHandler = (e) => {
        e.preventDefault();
        this.setState({ isSending: true })
        const orderForm=_.clone(this.state.orderForm);
        const order = {
            name: 'Phạm Thành Trung',
            address: {
                country: 'Việt nam',
                province: 'Đồng Nai'
            },
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice
        }
        // axios.post('orders.json', order)
        //     .then(res => {
        //         this.setState({ isSending: false });
        //         this.props.history.push('/');
        //     })
        //     .catch(err => {
        //         this.setState({ isSending: false });
        //         this.props.history.push('/');
        //     })
    }
    //#endregion
    render() {
        let formElements = [];
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
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
                            inputOnChange={this.inputOnChangeHandler} />
                    })}
                    <Button type="submit">submit</Button>
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
    totalPrice: PropTypes.number.isRequired
}

export default ContactData
