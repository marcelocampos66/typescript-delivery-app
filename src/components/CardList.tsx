import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import Card from '../components/Card';
import AppContext from '../context/AppContext';

const CardList: React.FC = () => {
  const { products, setProducts, cart, setCart } = useContext(AppContext);
  const history = useHistory();

  const getToken = () => {
    const content = localStorage.getItem('user');
    if (content) {
      const user = JSON.parse(content) as IUser;
      return user.token;
    }
    history.push('/login');
  }

  const getDataFromStorage = () => {
    const content = localStorage.getItem('cart');
    if (content) {
      const data = JSON.parse(content) as Array<ICartItem> | [];
      return data;
    }
    return [];
  }

  const getProducts = async (token: string) => {
    const data = await api.getAllProducts(token);
    setProducts(data);
  }

  const mountCartItem = (product: IProduct) => ({
    id: product.id,
    name: product.name,
    quantity: 1,
    subTotal: parseFloat(product.price),
    unitPrice: parseFloat(product.price),
  });

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const cart = getDataFromStorage();
    setCart(cart);
    const token = getToken() as string;
    getProducts(token);
  }, []);

  const addOnCart = (productId: number) => {
    const currentProduct = products
        .find(({ id }) => id === productId) as unknown as IProduct;
    const newCartItem = mountCartItem(currentProduct);
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
      const { quantity, unitPrice } = updateProduct;
      const newQuantity = quantity + 1
      updateProduct.quantity = newQuantity;
      updateProduct.subTotal = newQuantity * unitPrice;
      localStorage.setItem('cart', JSON.stringify(newCart));
      return [...newCart];
    });
  };

  const decrementOnCart = (productId: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      const updateProduct = newCart.find((product) => product.id === productId) as ICartItem;
      const { quantity, unitPrice } = updateProduct;
      if (quantity === 1) {
        const newArr = newCart.filter((product) => product.id !== productId)
        localStorage.setItem('cart', JSON.stringify(newArr));
        return [...newArr];
      }
      const newQuantity = quantity - 1
      updateProduct.quantity = newQuantity;
      updateProduct.subTotal = newQuantity * unitPrice;
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
    <section>
      {
        products.map((product) => (
          <Card
            product={ product }
            handleClick={ handleClick }
          />
        ))
      }
    </section>
  );
}

export default CardList;
