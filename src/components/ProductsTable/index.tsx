import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';

interface Props {
  products: Array<ICartItem> | [];
  remove: boolean;
}

const Table: React.FC<Props> = ({ products, remove }) => {
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
          { remove && (<th>Remove</th>) }
        </tr>
      </thead>
      <tbody>
        {
          products.map((item, index) => {
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
                  remove && (<td>
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
