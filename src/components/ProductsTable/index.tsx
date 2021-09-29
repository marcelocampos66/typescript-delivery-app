import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';

const Table: React.FC = () => {
  const [showRemove, setShowRemove] = useState(false);
  const { cart, setCart } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/customer/checkout') {
      setShowRemove(true);
    }
  }, []);

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
          { showRemove && (<th>Remove</th>) }
        </tr>
      </thead>
      <tbody>
        {
          cart.map((item, index) => {
            const subTotal = item.quantity * parseFloat(item.price)
            return (
              <tr key={ item.id }>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  { Helpers.formatPrice(item.price) }
                </td>
                <td>
                  { Helpers.formatPrice(subTotal.toString()) }
                </td>
                {
                  showRemove && (<td>
                    <button
                      type="button"
                      onClick={ () => handleClick(item.id) }
                    >
                      Remove
                    </button>
                  </td>)
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
