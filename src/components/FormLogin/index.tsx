import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';
import { DEFAULT_STATE } from '../../context/AppContext';
import Styled from '../FormLogin/S.FormLogin';
import logo from '../../images/kingofdelivery.png';

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
    <Styled.Section>
      <Styled.Div>
        <Styled.Img
          src={ logo }
          alt="logo"
        />
      </Styled.Div>
      <Styled.Line />
      <Styled.Div>
        <Styled.Label>
          Login:
          <Styled.Input
            type="text"
            name="email"
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
            placeholder="email@appdelivery.com.br"
            value={ loginData.email }
          />
        </Styled.Label>
        <Styled.Label>
          Password:
          <Styled.Input
            type="password"
            name="password"
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
            placeholder="************"
            value={ loginData.password }
          />
        </Styled.Label>
        <Styled.DivButtons>
          <Styled.Button
            type="button"
            disabled={ disable }
            onClick={ () => handleClick() }
          >
            Login
          </Styled.Button>
          <Styled.Link to="/register">
            <Styled.ButtonRegister
              type="button"
              onClick={ () => {} }
            >
              Register
            </Styled.ButtonRegister>
          </Styled.Link>
        </Styled.DivButtons>
      </Styled.Div>
    </Styled.Section>
  );
}

export default FormLogin;
