import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import FormLogin from '../components/FormLogin';
import logoDelivery from '../images/DeliveryFast.png';
import Helpers from '../helpers/Helpers';

const Login: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);
  const history = useHistory();

  const verifyIfAlreadyLogged = () => {
    const content = localStorage.getItem('user');
    if (content) {
      const userData = JSON.parse(content) as IUser;
      const path = Helpers.getPathToRedirect(userData.role);
      history.push(path);
    }
  };

  useEffect(() => {
    verifyIfAlreadyLogged();
  }, []);

  const errorDivMessage = () => (
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
    <main>
      <img
        src={ logoDelivery }
        alt="delivery"
        style={{ width: '250px', height: '200px' }}
      />
      <section>
        <h1>Bem vindo(a)!</h1>
        <FormLogin />
        { errorMessage && errorDivMessage() }
      </section>
    </main>
  );
}

export default Login;
