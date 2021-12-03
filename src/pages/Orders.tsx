import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from "socket.io-client";
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import OrderList from '../components/OrderList';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';
import AppContext from '../context/AppContext';

const socket = io('http://localhost:3001/');

const Orders: React.FC= () => {
  const [loading, setLoading] = useState(true);
  const { userData, setUserData, setSales, setTheme } = useContext(AppContext);
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

  const getSales = async (token: string) => {
    const salesData = await Api.getAllSales(token);
    if (salesData.error
      && salesData.error.message === 'Expired or invalid token') {
      setLoading(false);
      history.push('/login');
    }
    setSales(salesData);
    setLoading(false);
  };

  useEffect(() => {
    const data = getUserData();
    getSales(data!.token);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  socket.on(`update${userData!.role}`, () => {
    getSales(userData!.token);
  });

  return (
    <Container>
      <NavBar />
      <OrderList />
    </Container>
  );
}

export default Orders;
