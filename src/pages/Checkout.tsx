import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Navbar from '../components/NavBar';
import Helpers from '../helpers/Helpers';
import Api from '../services/Api';
import DropDown from '../components/DropDown';
import CartTable from '../components/CartTable';
import TextInput from '../components/TextInput';

const initialState = {
  address: '',
  addressNumber: '',
  sellerId: ''
};

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser | null>();
  const [sellers , setSellers] = useState([]);
  const [saleInfo, setSaleInfo] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
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

  const verifySaleData = () => {
    const { address, addressNumber, sellerId } = saleInfo;
    if (!address || !addressNumber || !sellerId) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  };

  const mountSaleData = () => ({
    ...saleInfo,
    sellerId: Number(saleInfo.sellerId),
    userId: userData?.id as number,
    totalCart: Helpers.getCartTotalPrice(cart),
  });

  useEffect(() => {
    verifySaleData();
  }, [saleInfo])

  useEffect(() => {
    getUserAndSellers();
    getShoppingCart();
    setLoading(false);
  }, []);

  const handleDropDown: onChangeDropDown = ({ target: { value, name } }) => {
    setSaleInfo({ ...saleInfo, [name]: value });
  };

  const handleChange: onChange = ({ target: { value, name } }) => {
    setSaleInfo({ ...saleInfo, [name]: value });
  };

  const handleClick = async () => {
    const saleData = mountSaleData();
    const saleId = await Api.registerOrder(saleData, cart, userData?.token as string);
    localStorage.setItem('cart', JSON.stringify([]));
    history.push(`/customer/orders/${saleId}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <Navbar
        role={ userData!.role }
        name={ userData!.name }
      />
      <section>
        <CartTable cart={ cart } />
        <p>{
          `Total: ${
            Helpers.formatPrice(Helpers.getCartTotalPrice(cart).toString())
          }`
        }</p>
      </section>
      <section>
        <DropDown
          name="sellerId"
          options={ sellers as Array<ISeller> }
          onChange={
            (e: React.ChangeEvent<HTMLSelectElement>) => handleDropDown(e)
          }
          labelText="Select Seller"
        />
        <TextInput
          type="text"
          name="address"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Adress"
          placeholderText="Street of apples, Appleland"
        />
        <TextInput
          type="text"
          name="addressNumber"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Adress Number"
          placeholderText="123"
        />
        <button
          type="button"
          onClick={ () => handleClick() }
          disabled={ disabled }
        >
          Finish Order
        </button>
      </section>
    </main>
  );
}

export default Checkout;
