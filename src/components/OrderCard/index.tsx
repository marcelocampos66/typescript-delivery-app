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
    <Styled.DivStatus>
      <Styled.PStatus status={status}>
        { status }
      </Styled.PStatus>
    </Styled.DivStatus>
  );

  const addressDiv = () => (
    <Styled.DivAddress>
      <p>
        {`${adress}, ${addressNumber}`}
      </p>
    </Styled.DivAddress>
  );

  const dataValueDiv = () => (
    <Styled.DivDatePrice>
      <Styled.P>
        { Helpers.formatDate(date).split(' ')[0] }
      </Styled.P>
      <Styled.P>
        { Helpers.formatPrice(price) }
      </Styled.P>
    </Styled.DivDatePrice>
  );

  return (
    <Styled.Link to={ `/${role}/orders/${id}` }>
      <Styled.DivCard>
        <Styled.DivOrderNumber>
          <p>Pedido</p>
          <p>
            { Helpers.formatOrderNumber(id) }
          </p>
        </Styled.DivOrderNumber>
        <Styled.DivContainer>
          <Styled.DivInfo>
            { statusDiv() }
            { dataValueDiv() }
          </Styled.DivInfo>
          { role === 'seller' && addressDiv() }
        </Styled.DivContainer>
      </Styled.DivCard>
    </Styled.Link>
  );
};

export default OrderCard;
