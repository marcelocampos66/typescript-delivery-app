import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Styled from './S.ProductsTable';

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
    <Styled.Table>
      <thead>
        <Styled.Tr>
          <Styled.Th>Item</Styled.Th>
          <Styled.Th>Description</Styled.Th>
          <Styled.Th>Quantity</Styled.Th>
          <Styled.Th>Unit Price</Styled.Th>
          <Styled.Th>Sub-total</Styled.Th>
          { showRemove && (<Styled.Th>Remove</Styled.Th>) }
        </Styled.Tr>
      </thead>
      <Styled.Tbody>
        {
          cart.map((item, index) => {
            const subTotal = item.quantity * parseFloat(item.price)
            return (
              <Styled.Tr key={ item.id }>
                <Styled.Td>{index + 1}</Styled.Td>
                <Styled.Td>{item.name}</Styled.Td>
                <Styled.Td>{item.quantity}</Styled.Td>
                <Styled.Td>
                  { Helpers.formatPrice(item.price) }
                </Styled.Td>
                <Styled.Td>
                  { Helpers.formatPrice(subTotal.toString()) }
                </Styled.Td>
                {
                  showRemove && (<Styled.Td>
                    <Styled.Button
                      type="button"
                      onClick={ () => handleClick(item.id) }
                    >
                      Remove
                    </Styled.Button>
                  </Styled.Td>)
                }
              </Styled.Tr>
            )
          })
        }
      </Styled.Tbody>
    </Styled.Table>
  );
}

export default Table;
