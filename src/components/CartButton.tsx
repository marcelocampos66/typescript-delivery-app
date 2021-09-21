import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import helpers from '../helpers/helpers';

const CartButton: React.FC = () => {
  const [totalCart, setTotalCart] = useState('R$ 0,00');
  const { cart } = useContext(AppContext);

  const totalCartPrice = (cart: Array<ICartItem>) => {
    if (cart.length === 0) {
      setTotalCart(helpers.formatPrice('0'));
      return;
    }
    const total = cart.reduce((total, product) => {
      return total + product.subTotal;
    }, 0);
    setTotalCart(helpers.formatPrice(total.toString()));
  };

  useEffect(() => {
    totalCartPrice(cart);
  }, [cart]);

  return (
    <div>
      <button
        type="button"
      >
        { totalCart }
      </button>
    </div>
  );
}

export default CartButton;
