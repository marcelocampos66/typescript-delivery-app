import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Helpers from '../helpers/Helpers';

interface Props {
  cart: Array<ICartItem> | [];
}

const CartTable: React.FC<Props> = ({ cart }) => {
  const { setCart } = useContext(AppContext);

  const handleClick = (id: number) => {
    const shoppingCart = Helpers.getCartFromStorage();
    const newCart = shoppingCart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Sub-total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={ item.id }>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              { Helpers.formatPrice(item.unitPrice.toString()) }
            </td>
            <td>
              { Helpers.formatPrice(item.subTotal.toString()) }
            </td>
            <td>
              <button
                type="button"
                onClick={ () => handleClick(item.id) }
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
