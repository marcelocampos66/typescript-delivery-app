import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Styled from './S.CartTotal';

const CartTotal: React.FC = () => {
  const { cart } = useContext(AppContext);
  
  return (
    <Styled.Div>
      <Styled.P>
        {
          `Total: ${Helpers.formatPrice(
            Helpers.getCartTotalPrice(cart).toString(),
          )}`
        }
      </Styled.P>
    </Styled.Div>
  );
}

export default CartTotal;
