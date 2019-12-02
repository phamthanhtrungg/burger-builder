import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import BurgerContainer from './components/BurgerContainer/BurgerContainer';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <Layout>
      <Route path="/" exact component={BurgerContainer} />
      <Route path="/check-out" component={CheckOut} />
    </Layout>
  );
}

export default App;
