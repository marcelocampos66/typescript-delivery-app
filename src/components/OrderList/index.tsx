import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import OrderCard from '../OrderCard';
import Helpers from '../../helpers/Helpers';
import Styled from './S.OrderList';

const OrderList: React.FC = () => {
  const { userData, sales } = useContext(AppContext);
  return (
    <Styled.DivFlex>
      <Styled.Section>
        {
          sales.map((sale: ISale) => (
            <OrderCard
              key={ sale.id }
              sale={ Helpers.mountProp(userData!.role, sale) }
            />
          ))
        }
      </Styled.Section>
    </Styled.DivFlex>
  );
}

export default OrderList;
