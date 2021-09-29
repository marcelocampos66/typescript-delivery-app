import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';

const CartTotal: React.FC = () => {
  const { cart } = useContext(AppContext);
  
  return (
    <div>
      <p>
        {
          `Total: ${Helpers.formatPrice(
            Helpers.getCartTotalPrice(cart).toString(),
          )}`
        }
      </p>
    </div>
  );
}

export default CartTotal;
