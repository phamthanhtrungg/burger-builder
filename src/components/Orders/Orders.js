import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Order from './Order/Order';
import axios from '../../axios-instance';
import withError from '../withErrorHandler/withErrorHandler';
import Spinner from '../UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('orders.json')
            .then(res => {
                let orders = [];
                for (let key in res.data) {
                    orders.push({ ...res.data[key].ingredients, id: key });
                }
                this.setState({ loading: false, orders: orders })
            })
            .catch(err => {
                this.setState({ loading: false })
            })

    }
    render() {
        let orders = <Spinner />
        if (!this.state.loading) {
            orders = this.state.orders.map((value) => {
                return <Order ingredients={value} key={value.id}/>
            });
        }
        return (
            <div>
                {orders}
            </div>
        );
    }

}

Orders.propTypes = {

}

export default withError(Orders, axios);
