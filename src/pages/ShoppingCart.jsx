import React from 'react';
import CartItem from '../components/CartItem';
import { getItems } from '../services/saveItems';

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: [],
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    this.setState({ cartItems: getItems() });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length === 0
        && <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>}
        {cartItems.length > 0
        && cartItems.map((cartItem) => (
          <CartItem
            key={ cartItem.id }
            cartItem={ cartItem }
          />))}
      </div>
    );
  }
}
