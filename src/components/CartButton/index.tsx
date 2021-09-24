import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';

const CartButton: React.FC = () => {
  const [totalCart, setTotalCart] = useState('R$ 0,00');
  const { cart } = useContext(AppContext);
  const history = useHistory();

  const totalCartPrice = (cart: Array<ICartItem>) => {
    const value = Helpers.getCartTotalPrice(cart);
    setTotalCart(Helpers.formatPrice(value.toString()));
  };

  const redirectToCheckout = () => {
    history.push('/customer/checkout')
  }
  
  useEffect(() => {
    totalCartPrice(cart);
  }, [cart]);

  return (
    <div>
      <button
        type="button"
        onClick={ () => redirectToCheckout() }
      >
        { totalCart }
      </button>
    </div>
  );
}

export default CartButton;
