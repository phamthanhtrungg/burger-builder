import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import BurgerContainer from './components/BurgerContainer/BurgerContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import Auth from './components/Authentication/Auth';

function App() {
  return (
    <Layout>
      <Route path="/" exact component={BurgerContainer} />
      <Route path="/check-out" component={CheckOut} />
      <Route path="/orders" exact component={Orders}/>
      <Route path="/auth" exact component={Auth}/>
    </Layout>
      );
    }
    
    export default App;
