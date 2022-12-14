import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import CheckoutProducts from './pages/CheckoutProducts';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCart } />
        <Route
          exact
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route exact path="/checkout-products" component={ CheckoutProducts } />
      </BrowserRouter>
    );
  }
}

export default App;
