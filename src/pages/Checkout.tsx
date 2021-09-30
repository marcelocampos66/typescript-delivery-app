import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Container from '../components/Container';
import Navbar from '../components/NavBar';
import ProductsTable from '../components/ProductsTable';
import CheckoutForm from '../components/CheckoutForm';
import CartTotal from '../components/CartTotal';
import Helpers from '../helpers/Helpers';
import Api from '../services/Api';

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { setCart, setUserData, setSellers, setTheme } = useContext(AppContext);
  const history = useHistory();

  const getUserData = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
    setTheme(data!.theme);
    return data;
  }

  const getSellers = async (token: string) => {
    const sellersInfo = await Api.getAllSellers(token);
    setSellers(sellersInfo);
  }

  const getShoppingCart = () => {
    const shoppingCart = Helpers.getCartFromStorage();
    setCart(shoppingCart);
  }

  useEffect(() => {
    const data = getUserData()
    getShoppingCart();
    getSellers(data!.token);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Navbar />
      <ProductsTable />
      <CartTotal />
      <CheckoutForm />
    </Container>
  );
}

export default Checkout;
