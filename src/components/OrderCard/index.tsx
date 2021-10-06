import React from 'react';
import Helpers from '../../helpers/Helpers';
import Styled from './S.OrderCard';

interface Props {
  sale: {
    role: string;
    id: number;
    total_price: string;
    delivery_address: string;
    delivery_number: string;
    sale_date: string;
    status: string;
    user: IUserId;
    seller: IUserId;
  }
}

const OrderCard: React.FC<Props> = ({ sale }) => {
  const {
    role,
    id,
    total_price: price,
    delivery_address: adress,
    delivery_number: addressNumber,
    sale_date: date,
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
