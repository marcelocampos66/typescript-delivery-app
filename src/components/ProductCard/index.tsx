import React from 'react';
import Helpers from '../../helpers/Helpers';

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
    <div>
      <p>
        { Helpers.formatPrice(price) }
      </p>
      <img
        src={ image }
        alt={ name }
        style={{ width: '100px', height: '100px' }}
      />
      <p>{ name }</p>
      <div>
        <button
          onClick={
            (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)
          }
          name="decrement"
          value={ id }
        >
          -
        </button>
        <input
          type="text"
          value={ getQuantity() === undefined ? 0 : getQuantity() }
        />
        <button
          onClick={
            (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)
          }
          name="increment"
          value={ id }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
