import React, { useContext } from 'react';
import { io } from "socket.io-client";
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Api from '../../services/Api';
import Styled from './S.OrderManager';

const socket = io('http://localhost:3002/');

const OrderManager: React.FC = () => {
  const { userData, sale, setSale } = useContext(AppContext);
  const rawDate = Helpers.formatDate(sale!.sale_date);

  const handleClick = async (status: string) => {
    await Api.changeOrderStatus(sale!.id, status);
    const data = await Api.getSaleById(sale!.id, userData!.token);
    setSale(data);
    socket.emit(`updatefrom${userData!.role}`);
  };

  const renderSeller = () => (
    <Styled.DivBox>
      <p>{ `Seller: ${ sale!.seller.name }` }</p>
    </Styled.DivBox>
  );

  const renderCustomerButtons = () => (
    <Styled.DivBox>
      <Styled.Button
        type="button"
        disabled={ sale!.status !== 'Out for delivery' }
        onClick={ () => handleClick('Delivered') }
      >
        Delivered
      </Styled.Button>
    </Styled.DivBox>
  )

  const renderSellerButtons = () => (
    <Styled.DivBox>
      <Styled.Button
        type="button"
        disabled={ sale!.status !== 'Pending' }
        onClick={ () => handleClick('Preparing') }
      >
        Preparing Order
      </Styled.Button>
      <Styled.Button
        type="button"
        disabled={ sale!.status !== 'Preparing' }
        onClick={ () => handleClick('Out for delivery') }
      >
        Out for delivery
      </Styled.Button>
    </Styled.DivBox>
  )

  return (
    <Styled.Section>
      <Styled.DivBox>
        <p>{ `PEDIDO: ${Helpers.formatOrderNumber(sale!.id)}` }</p>
      </Styled.DivBox>
      { userData!.role === 'customer' && renderSeller() }
      <Styled.DivBox>
        <p>{ rawDate.split(' ')[0] }</p>
      </Styled.DivBox>
      <Styled.DivBox>
        <p>{ `Status: ${sale!.status}` }</p>
      </Styled.DivBox>
      { userData!.role === 'customer' && renderCustomerButtons() }
      { userData!.role === 'seller' && renderSellerButtons() }
    </Styled.Section>
  );
}

export default OrderManager;
