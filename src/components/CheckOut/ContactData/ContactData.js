import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './ContactData.module.css';
import axios from '../../../axios-instance';
import Spinner from '../../UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        isSending: false
    }
    componentDidMount() {
        console.log(this.state);
    }
    submitOrderHandler = (e) => {
        e.preventDefault();
        this.setState({ isSending: true })
        const order = {
            name: 'Phạm Thành Trung',
            address: {
                country: 'Việt nam',
                province: 'Đồng Nai'
            },
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice
        }
        axios.post('orders.json', order)
            .then(res => {
                this.setState({ isSending: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ isSending: false });
                this.props.history.push('/');
            })
      
    }
    render() {
        let form = <Spinner />
        if (!this.state.isSending) {
            form = (
                <div>
                    <h4>Your Concact Data</h4>
                    <form onSubmit={this.submitOrderHandler}>
                        <input type="text" placeholder="something" />
                        <input type="text" placeholder="something" />
                        <input type="text" placeholder="something" />
                        <input type="text" placeholder="something" />
                        <input type="text" placeholder="something" />
                        <button type="submit">submit</button>
                    </form>
                </div>
            );
        }
        return (
            <div className={classes.container}>
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
