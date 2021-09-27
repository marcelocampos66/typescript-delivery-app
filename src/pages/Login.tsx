import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Container from '../components/ContainerCenter';
import FormLogin from '../components/FormLogin';
import ErrorMessage from '../components/ErrorMessage';
import Helpers from '../helpers/Helpers';

const Login: React.FC = () => {
  const { errorMessage } = useContext(AppContext);
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

  return (
    <Container>
      <FormLogin />
      { errorMessage && <ErrorMessage /> }
    </Container>
  );
}

export default Login;
