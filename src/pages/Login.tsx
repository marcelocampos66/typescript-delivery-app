import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import logoDelivery from '../images/DeliveryFast.png';
import api from '../services/api';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  const verifyLoginCredentials = () => {
    const { email, password } = loginData;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < minPasswordLength) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  const userRedirect: IUserRedirect = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  const getPathToRedirect = (role: string) => {
    if (role === 'customer') {
      return userRedirect.customer;
    }
    if (role === 'seller') {
      return userRedirect.seller;
    }
    if (role === 'administrator') {
      return userRedirect.administrator;
    }
  } 

  
  const history = useHistory();

  const verifyIfAlreadyLogged = () => {
    const content = localStorage.getItem('user');
    if (content) {
      const userData = JSON.parse(content) as IUser;
      const path = getPathToRedirect(userData.role);
      console.log(path)
      // history.push(path);
    }
  };

  useEffect(() => {
    verifyIfAlreadyLogged();
  });

  useEffect(() => {
    verifyLoginCredentials();
  }, [loginData]);

  const handleChange: onChange = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    const result = await api.loginUser(loginData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      setErrorMessage('');
      localStorage.setItem('user', JSON.stringify(result));
      const path = getPathToRedirect(result.role) as string;
      history.push(path);
    }
  };

  const errorDivMessage = (
    <div>
      <p>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage('') }
      >
        Sair
      </button>
    </div>
  );

  return (
    <main className="content-login-register">
      <img
        src={ logoDelivery }
        alt="Um homem de mascara andando de moto, levando bebidas"
        style={{ width: '250px', height: '200px' }}
      />

      <section className="fundo-login-register">
        <h1 className="title-login-register">Bem vindo(a)!</h1>
        <TextInput
          type="text"
          name="email"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Login"
          placeholderText="email@appdelivery.com.br"
        />
        <TextInput
          type="password"
          name="password"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Senha"
          placeholderText="************"
        />
        {errorMessage && errorDivMessage}
        <LargeButton
          buttonText="LOGIN"
          isDisabled={ disableButton }
          onClick={ () => handleClick() }
        />
        <Link to="/register">
          <LargeButton
            buttonText="Ainda não tenho conta"
            isDisabled={ false }
            onClick={ () => {} }
          />
        </Link>
      </section>
    </main>
  );
}

export default Login;
