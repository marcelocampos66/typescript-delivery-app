import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import DropDown from '../DropDown';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';

const initialState = {
  address: '',
  addressNumber: '',
  sellerId: ''
};

interface Props {
  sellers: Array<ISeller>;
  user: IUser;
}

const CheckoutForm: React.FC<Props> = ({ sellers, user }) => {
  const [saleInfo, setSaleInfo] = useState(initialState);
  const [disable, setDisable] = useState(true);
  const { cart } = useContext(AppContext);
  const history = useHistory();

  const disableButton = () => {
    const verify = Helpers.verifySaleData(saleInfo, cart.length);
    setDisable(verify);
  }

  useEffect(() => {
    disableButton();
  }, [saleInfo, cart])

  const handleDropDown: onChangeDropDown = ({ target: { value, name } }) => {
    setSaleInfo({ ...saleInfo, [name]: value });
  };

  const handleChange: onChange = ({ target: { value, name } }) => {
    setSaleInfo({ ...saleInfo, [name]: value });
  };

  const handleClick = async () => {
    const saleData = Helpers.mountSaleData(saleInfo, user.id, cart);
    const saleId = await Api.registerOrder(saleData, cart, user.token);
    localStorage.setItem('cart', JSON.stringify([]));
    setSaleInfo(initialState);
    history.push(`/customer/orders/${saleId}`);
  };
  
  return (
    <section>
      <DropDown
        name="sellerId"
        options={ sellers as Array<ISeller> }
        onChange={
          (e: React.ChangeEvent<HTMLSelectElement>) => handleDropDown(e)
        }
        labelText="Select Seller"
        value={ saleInfo.sellerId }
      />
      <label>
        Adress
        <input
          type="text"
          name="address"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          value={ saleInfo.address }
          placeholder="Street of apples, Appleland"
        />
      </label>
      <label>
      Adress Number
        <input
          type="text"
          name="addressNumber"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          value={ saleInfo.addressNumber }
          placeholder="123"
        />
      </label>
      <button
        type="button"
        onClick={ () => handleClick() }
        disabled={ disable }
      >
        Finish Order
      </button>
    </section>
  );
}

export default CheckoutForm;
