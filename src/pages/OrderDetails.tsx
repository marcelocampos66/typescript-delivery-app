import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from "socket.io-client";
import NavBar from '../components/NavBar';
import OrderManager from '../components/OrderManager';
import ProductsTable from '../components/ProductsTable';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';

const socket = io('http://localhost:3002/');

interface Props {
  match: { params: { id: string; } };
}

const OrderDetails: React.FC<Props> = ({ match: { params: { id } } }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser>();
  const [sale, setSale] = useState<ISaleById>();
  const [products, setProducts] = useState<Array<ICartItem>>();
  const history = useHistory();

  const getUserInfo = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
  }

  const getSaleInfo = async (id: string) => {
    const data = await Api.getSaleById(Number(id));
    const formatedProducts = Helpers.formatProducts(data.products)
    setSale(data);
    setProducts(formatedProducts);
    setLoading(false);
  }

  useEffect(() => {
    getUserInfo();
    getSaleInfo(id);
  }, []);

  if (loading) return <p>Loading...</p>;

  const handleClick = async (status: string) => {
    await Api.changeOrderStatus(sale!.id, status);
    getSaleInfo(id);
    socket.emit(`updatefrom${userData!.role}`, { id, status });
  };

  socket.on(`update${userData!.role}`, () => {
    getSaleInfo(id);
  });

  return (
    <main>
      <NavBar role={ userData!.role } name={ userData!.name } />
      <OrderManager
        sale={ sale! }
        role={ userData!.role }
        onClick={ handleClick }
      />
      <ProductsTable  products={ products! } remove={ false } />
      <p>
        {
          `Total: ${Helpers.formatPrice(
            Helpers.getCartTotalPrice(products!).toString(),
          )}`
        }
      </p>
    </main>
  )
}

export default OrderDetails;
