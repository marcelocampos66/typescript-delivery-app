import React, { useContext } from 'react';
import { io } from "socket.io-client";
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Api from '../../services/Api';

const socket = io('http://localhost:3002/');

const OrderManager: React.FC = () => {
  const { userData, sale, setSale } = useContext(AppContext);
  const rawDate = Helpers.formatDate(sale!.saleDate);

  const handleClick = async (status: string) => {
    await Api.changeOrderStatus(sale!.id, status);
    const data = await Api.getSaleById(sale!.id, userData!.token);
    setSale(data);
    socket.emit(`updatefrom${userData!.role}`);
  };

  const renderSeller = () => (
    <p>{ `Seller: ${ sale!.seller.name }` }</p>
  );

  const renderCustomerButtons = () => (
    <div>
      <button
        type="button"
        disabled={ sale!.status !== 'Out for delivery' }
        onClick={ () => handleClick('Delivered') }
      >
        Delivered
      </button>
    </div>
  )

  const renderSellerButtons = () => (
    <div>
      <button
        type="button"
        disabled={ sale!.status !== 'Pending' }
        onClick={ () => handleClick('Preparing') }
      >
        Preparing Order
      </button>
      <button
        type="button"
        disabled={ sale!.status !== 'Preparing' }
        onClick={ () => handleClick('Out for delivery') }
      >
        Out for delivery
      </button>
    </div>
  )

  return (
    <section>
      <p>{ `PEDIDO: ${Helpers.formatOrderNumber(sale!.id)}` }</p>
      { userData!.role === 'customer' && renderSeller() }
      <p>{ rawDate.split(' ')[0] }</p>
      <div>
        <p>{ sale!.status }</p>
      </div>
      { userData!.role === 'customer' && renderCustomerButtons() }
      { userData!.role === 'seller' && renderSellerButtons() }
    </section>
  );
}

export default OrderManager;
