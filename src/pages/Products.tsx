import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/NavBar';
import CardList from '../components/CardList';
import CartButton from '../components/CartButton';
// import AppContext from '../context/AppContext';

const Products: React.FC = () => {
  const [userData, setUserData] = useState<IUser | null>();
  const [loading, setLoading] = useState(true);

  const getDataFromStorage = () => {
    const content = localStorage.getItem('user');
    if (content) {
      const data = JSON.parse(content) as IUser;
      setUserData(data);
    }
  }

  useEffect(() => {
    getDataFromStorage();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  
  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Navbar
        role={ userData.role }
        name={ userData.name }
      />
      <CartButton />
      <CardList />
    </div>
  );
};

export default Products;
