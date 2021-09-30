import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/NavBar';
import CardList from '../components/CardList';
import CartButton from '../components/CartButton';
import AppContext from '../context/AppContext';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { setProducts, setUserData, setTheme } = useContext(AppContext);
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

  const getProducts = async (token: string) => {
    const data = await Api.getAllProducts(token);
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    const data = getUserData();
    getProducts(data!.token);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Navbar />
      <CartButton />
      <CardList />
    </Container>
  );
};

export default Products;
