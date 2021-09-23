import React from 'react';
import { Link } from 'react-router-dom';
import Helpers from '../helpers/Helpers';
 
interface Props {
  sale: {
    role: string;
    id: number;
    userId: number;
    sellerId: number;
    totalPrice: string;
    deliveryAddress: string;
    deliveryNumber: string;
    saleDate: string;
    status: string;
  }
}

const OrderCard: React.FC<Props> = ({ sale }) => {
  const {
    role,
    id,
    totalPrice: price,
    deliveryAddress: adress,
    deliveryNumber: addressNumber,
    saleDate: date,
    status,
  } = sale;

  const statusDiv = () => (
    <div>
      <p>
        { status }
      </p>
    </div>
  );

  const addressDiv = () => (
    <p>
      {`${adress}, ${addressNumber}`}
    </p>
  );

  const dataValueDiv = () => (
    <div>
      <p>
        { Helpers.formatDate(date) }
      </p>
      <p>
        { Helpers.formatPrice(price) }
      </p>
    </div>
  );

  return (
    <Link to={ `/${role}/orders/${id}` }>
      <div>
        <div>
          <div>
            <p>
              { `Pedido: ${Helpers.formatOrderNumber(id)}` }
            </p>
          </div>
          <div>
            <div>
              { statusDiv() }
              { dataValueDiv() }
            </div>
            { role === 'seller' && addressDiv() }
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
