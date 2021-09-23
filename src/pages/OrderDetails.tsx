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
  const [products, setProducts] = useState<Array<IProductWithQty>>();
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
    setSale(data);
    setProducts(data.products)
    setLoading(false);
  }

  useEffect(() => {
    getUserInfo();
    getSaleInfo(id);
  }, []);

  if (loading) return <p>Loading...</p>;

  const sumTotal = (products: Array<IProductWithQty>) => {
    const result = products.reduce((total: number, product) => {
      const subTotal = product.salesProducts.quantity * parseFloat(product.price);
      return total + subTotal;
    }, 0)
    return result.toString();
  }

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
      <ProductsTable products={ products as Array<IProductWithQty> }/>
      <p>{ `Total: ${Helpers.formatPrice(sumTotal(products!))}` }</p>
    </main>
  )
}

export default OrderDetails;
