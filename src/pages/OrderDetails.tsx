import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from "socket.io-client";
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import OrderManager from '../components/OrderManager';
import ProductsTable from '../components/ProductsTable';
import CartTotal from '../components/CartTotal';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';
import AppContext from '../context/AppContext';

const socket = io('http://localhost:3002/');

interface Props {
  match: { params: { id: string; } };
}

const OrderDetails: React.FC<Props> = ({ match: { params: { id } } }) => {
  const [loading, setLoading] = useState(true);
  const { userData, setUserData, setCart, setSale } = useContext(AppContext);
  const history = useHistory();

  const getUserData = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
    return data;
  }

  const getSaleInfo = async (id: string, token: string) => {
    const data = await Api.getSaleById(Number(id), token);
    const formatedProducts = Helpers.formatProducts(data.products)
    setSale(data);
    setCart(formatedProducts);
    setLoading(false);
  }

  useEffect(() => {
    const data = getUserData();
    getSaleInfo(id, data!.token);
  }, []);

  if (loading) return <p>Loading...</p>;

  socket.on(`update${userData!.role}`, () => {
    getSaleInfo(id, userData!.token);
  });

  return (
    <Container>
      <NavBar />
      <OrderManager />
      <ProductsTable />
      <CartTotal />
    </Container>
  )
}

export default OrderDetails;
