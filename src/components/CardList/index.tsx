import React, { useEffect, useContext } from 'react';
import Card from '../ProductCard';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Styled from './S.CardList';

const CardList: React.FC = () => {
  const { products, cart, setCart } = useContext(AppContext);

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const shoppingCart = Helpers.getCartFromStorage();
    setCart(shoppingCart);
  }, []);

  const addOnCart = (productId: number) => {
    const currentProduct = products
        .find(({ id }) => id === productId) as unknown as IProduct;
    const newCartItem = Helpers.mountCartItem(currentProduct);
    setCart((prev) => {
      const newCart = [...prev, newCartItem];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const incrementOnCart = (productId: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      const updateProduct = newCart.find((product) => product.id === productId) as ICartItem;
      const { quantity } = updateProduct;
      const newQuantity = quantity + 1
      updateProduct.quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(newCart));
      return [...newCart];
    });
  };

  const decrementOnCart = (productId: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      const updateProduct = newCart.find((product) => product.id === productId) as ICartItem;
      const { quantity } = updateProduct;
      if (quantity === 1) {
        const newArr = newCart.filter((product) => product.id !== productId)
        localStorage.setItem('cart', JSON.stringify(newArr));
        return [...newArr];
      }
      const newQuantity = quantity - 1
      updateProduct.quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(newCart));
      return [...newCart];
    });
  };

  const handleClick: onClick = ({ currentTarget: { name, value } }) => {
    const productId = Number(value);
    const isOnCart = cart.some((product: ICartItem) => product.id === productId);
    if (name === 'increment' && !isOnCart) {
      addOnCart(productId);
    }
    if (name === 'increment' && isOnCart) {
      incrementOnCart(productId);
    }
    if (name === 'decrement' && isOnCart) {
      decrementOnCart(productId);
    }
  }

  return (
    <Styled.Section>
      {
        products.map((product) => (
          <Card
            key={ product.id }
            product={ product }
            handleClick={ handleClick }
          />
        ))
      }
    </Styled.Section>
  );
}

export default CardList;
