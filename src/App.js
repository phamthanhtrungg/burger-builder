import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './redux/actions/index';

import Layout from './components/layout/layout';
import BurgerContainer from './components/BurgerContainer/BurgerContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import Auth from './components/Authentication/Auth';
import Logout from './components/Authentication/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onAuthCheck();
  }
  render() {
    return (
      <Layout>
        <Route path="/" exact component={BurgerContainer} />
        <Route path="/check-out" component={CheckOut} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/logout" exact component={Logout} />
      </Layout >
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(Actions.checkAuthState())
  }
}

export default connect(null, mapDispatchToProps)(App);
