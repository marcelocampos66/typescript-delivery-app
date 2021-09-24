import React from 'react';
import Helpers from '../../helpers/Helpers';

interface Props {
  sale: ISaleById;
  role: string;
  onClick: (status: string) => Promise<void>
}

const OrderManager: React.FC<Props> = ({ sale, role, onClick }) => {
  const rawDate = Helpers.formatDate(sale.saleDate);

  const renderSeller = () => (
    <p>{ `Seller: ${ sale.seller.name }` }</p>
  );

  const renderCustomerButtons = () => (
    <div>
      <button
        type="button"
        disabled={ sale.status !== 'Out for delivery' }
        onClick={ () => onClick('Delivered') }
      >
        Delivered
      </button>
    </div>
  )

  const renderSellerButtons = () => (
    <div>
      <button
        type="button"
        disabled={ sale.status !== 'Pending' }
        onClick={ () => onClick('Preparing') }
      >
        Preparing Order
      </button>
      <button
        type="button"
        disabled={ sale.status !== 'Preparing' }
        onClick={ () => onClick('Out for delivery') }
      >
        Out for delivery
      </button>
    </div>
  )

  return (
    <section>
      <p>{ `PEDIDO: ${Helpers.formatOrderNumber(sale.id)}` }</p>
      { role === 'customer' && renderSeller() }
      <p>{ rawDate.split(' ')[0] }</p>
      <div>
        <p>{ sale.status }</p>
      </div>
      { role === 'customer' && renderCustomerButtons() }
      { role === 'seller' && renderSellerButtons() }
    </section>
  );
}

export default OrderManager;
