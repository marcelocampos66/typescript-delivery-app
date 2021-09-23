import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from "socket.io-client";
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';

const socket = io('http://localhost:3002/');

const Orders: React.FC= () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser>();
  const [sales, setSales] = useState([]);
  const history = useHistory();

  const setInitialInfos = async () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
    const salesData = await Api.getAllSales(data!.token);
    if (salesData.error
      && salesData.error.message === 'Expired or invalid token') {
      setLoading(false);
      history.push('/login');
    }
    setSales(salesData);
    setLoading(false);
  };

  useEffect(() => {
    setInitialInfos();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  socket.on(`update${Helpers.formatRole(userData!.role)}`, () => {
    setInitialInfos();
  });

  return (
    <main>
      <NavBar role={ userData!.role } name={ userData!.name } />
      <section>
        {
          sales.map((sale: ISale) => (
            <OrderCard
              key={ sale.id }
              sale={ Helpers.mountProp(userData!.role, sale) }
            />
          ))
        }
      </section>
    </main>
  );
}

export default Orders;
