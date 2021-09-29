import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import OrderCard from '../OrderCard';
import Helpers from '../../helpers/Helpers';

const OrderList: React.FC = () => {
  const { userData, sales } = useContext(AppContext);
  return (
    <section>
      {
        sales.map((sale: ISale) => (
          <OrderCard
            key={ sale.id }
            sale={ Helpers.mountProp(userData!.role, sale) }
          />
        ))
      }
    </section>
  );
}

export default OrderList;
