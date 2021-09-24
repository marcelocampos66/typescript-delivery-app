import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Navbar from '../components/NavBar';
import ProductsTable from '../components/Table';
import CheckoutForm from '../components/CheckoutForm';
import Helpers from '../helpers/Helpers';
import Api from '../services/Api';

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser | null>();
  const [sellers , setSellers] = useState([]);
  const { cart, setCart } = useContext(AppContext);
  const history = useHistory();

  const getUserAndSellers = async () => {
    const userInfo = Helpers.getDataFromStorage();
    if (!userInfo) {
      history.push('/login');
    }
    setUserData(userInfo);
    const sellersInfo = await Api.getAllSellers(userInfo!.token);
    setSellers(sellersInfo);
  }

  const getShoppingCart = () => {
    const shoppingCart = Helpers.getCartFromStorage();
    setCart(shoppingCart);
  }

  useEffect(() => {
    getUserAndSellers();
    getShoppingCart();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <Navbar
        role={ userData!.role }
        name={ userData!.name }
      />
      <section>
        <ProductsTable products={ cart } remove={ true } />
        <p>{
          `Total: ${
            Helpers.formatPrice(Helpers.getCartTotalPrice(cart).toString())
          }`
        }</p>
      </section>
      <CheckoutForm
        sellers={ sellers }
        user={ userData! }
      />
    </main>
  );
}

export default Checkout;
