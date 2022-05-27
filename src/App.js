import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route
            exact
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
