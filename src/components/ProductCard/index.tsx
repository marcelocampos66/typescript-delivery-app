import React from 'react';
import Helpers from '../../helpers/Helpers';
import Styled from './S.ProductCard';

interface Props {
  product: IProduct;
  handleClick: onClick;
}

const Card: React.FC<Props> = ({ product, handleClick }) => {
  const {
    id,
    name,
    price,
    url_image: image,
  } = product;

  const getQuantity = () => {
    const content = localStorage.getItem('cart');
    if (content) {
      const data = JSON.parse(content) as Array<ICartItem> | [];
      const product = data.find((product) => product.id === id);
      return product?.quantity;
    }
  }

  return (
    <Styled.Div>
      <Styled.DivImgContainer>
      <Styled.Price>
        { Helpers.formatPrice(price) }
      </Styled.Price>
      <Styled.Img
        src={ image }
        alt={ name }
        // style={{ width: '100px', height: '100px' }}
      />
      </Styled.DivImgContainer>
      <Styled.DivCardFooter>
        <Styled.DivNameContainer>
          <p>{ name }</p>
        </Styled.DivNameContainer>
        <Styled.DivButtonInputContainer>
          <Styled.LButton
            onClick={
              (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)
            }
            name="decrement"
            value={ id }
          >
            -
          </Styled.LButton>
          <Styled.Input
            type="text"
            value={ getQuantity() === undefined ? 0 : getQuantity() }
          />
          <Styled.RButton
            onClick={
              (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)
            }
            name="increment"
            value={ id }
          >
            +
          </Styled.RButton>
        </Styled.DivButtonInputContainer>
      </Styled.DivCardFooter>
    </Styled.Div>
  );
}

export default Card;
