import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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
    let routes = <Switch>
      <Route path="/" exact component={BurgerContainer} />
      <Route path="/auth" exact component={Auth} />
      <Redirect to="/" />
    </Switch>
    if (this.props.isAuthenticated) {
      routes = <Switch>
        <Route path="/" exact component={BurgerContainer} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/check-out" component={CheckOut} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/logout" exact component={Logout} />
        <Redirect to="/" />
      </Switch>
    }
    return (
      <Layout>
        {routes}
      </Layout >
    );
  }

}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(Actions.checkAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
