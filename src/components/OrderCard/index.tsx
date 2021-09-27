import React from 'react';
// import { Link } from 'react-router-dom';
import Helpers from '../../helpers/Helpers';
import Styled from './S.OrderCard';
 
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
    <div>
      <p>
        {`${adress}, ${addressNumber}`}
      </p>
    </div>
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
    <Styled.Link to={ `/${role}/orders/${id}` }>
      <Styled.DivCard>
        <div>
          <div>
            <p>
              { `Pedido: ${Helpers.formatOrderNumber(id)}` }
            </p>
          </div>
          <div>
            { statusDiv() }
            { dataValueDiv() }
          </div>
        </div>
        { role === 'seller' && addressDiv() }
      </Styled.DivCard>
    </Styled.Link>
  );
};

export default OrderCard;
