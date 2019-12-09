import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as Actions from '../../../redux/actions/index';

class Logout extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.onLogout();
    }
    render() {
        return (
            <Redirect to="/" />
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(Actions.authLogOut())
    }
}
export default connect(null, mapDispatchToProps)(Logout);
