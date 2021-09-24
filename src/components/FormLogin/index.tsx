import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';
import { DEFAULT_STATE } from '../../context/AppContext';

const FormLogin: React.FC = () => {
  const [disable, setDisable] = useState(true);
  const { loginData, setLoginData, setErrorMessage } = useContext(AppContext);
  const history = useHistory();

  const disableButton = () => {
    const verify = Helpers.verifyLoginCredentials(loginData);
    setDisable(verify);
  }

  useEffect(() => {
    disableButton();
  }, [loginData]);

  const handleChange: onChange = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    const result = await Api.login(loginData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      setErrorMessage('');
      localStorage.setItem('user', JSON.stringify(result));
      const path = Helpers.getPathToRedirect(result.role);
      setLoginData(DEFAULT_STATE.loginData);
      history.push(path);
    }
  };
  
  return (
    <section>
      <label>
        Login:
        <input
          type="text"
          name="email"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          placeholder="email@appdelivery.com.br"
          value={ loginData.email }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          placeholder="************"
          value={ loginData.password }
        />
      </label>
      <button
        type="button"
        disabled={ disable }
        onClick={ () => handleClick() }
      >
        Login
      </button>
      <Link to="/register">
        <button
          type="button"
          onClick={ () => {} }
        >
          Register
        </button>
      </Link>
    </section>
  );
}

export default FormLogin;
