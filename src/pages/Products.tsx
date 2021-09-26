import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/NavBar';
import CardList from '../components/CardList';
import CartButton from '../components/CartButton';
import Helpers from '../helpers/Helpers';

const Products: React.FC = () => {
  const [userData, setUserData] = useState<IUser | null>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getUserData = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
  }

  useEffect(() => {
    getUserData();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <Navbar
        role={ userData!.role }
        name={ userData!.name }
      />
      <CartButton />
      <CardList token={ userData!.token } />
    </main>
  );
};

export default Products;
