import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import DropDown from '../DropDown';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';
import Styled from './S.CheckoutForm';

const initialState = {
  address: '',
  addressNumber: '',
  sellerId: ''
};

const CheckoutForm: React.FC = () => {
  const [saleInfo, setSaleInfo] = useState(initialState);
  const [disable, setDisable] = useState(true);
  const { cart, sellers, userData } = useContext(AppContext);
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
    const saleData = Helpers.mountSaleData(saleInfo, userData!.id, cart);
    const saleId = await Api.registerOrder(saleData, cart, userData!.token);
    localStorage.setItem('cart', JSON.stringify([]));
    setSaleInfo(initialState);
    history.push(`/customer/orders/${saleId}`);
  };
  
  return (
    <Styled.Section>
      <DropDown
        name="sellerId"
        options={ sellers as Array<ISeller> }
        onChange={
          (e: React.ChangeEvent<HTMLSelectElement>) => handleDropDown(e)
        }
        labelText="Select Seller"
        value={ saleInfo.sellerId }
      />
      <Styled.Label>
        Adress
        <Styled.Input
          type="text"
          name="address"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          value={ saleInfo.address }
          placeholder="Street of apples, Appleland"
        />
      </Styled.Label>
      <Styled.Label>
      Adress Number
        <Styled.Input
          type="text"
          name="addressNumber"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          value={ saleInfo.addressNumber }
          placeholder="123"
        />
      </Styled.Label>
      <Styled.Button
        type="button"
        onClick={ () => handleClick() }
        disabled={ disable }
      >
        Finish Order
      </Styled.Button>
    </Styled.Section>
  );
}

export default CheckoutForm;
