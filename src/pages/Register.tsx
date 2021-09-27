import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Container from '../components/ContainerCenter';
import FormNewUser from '../components/FormNewUser';
import ErrorMessage from '../components/ErrorMessage';

const Register: React.FC = () => {
  const { errorMessage } = useContext(AppContext);

  return (
    <Container>
      <FormNewUser />
      { errorMessage && <ErrorMessage /> }
    </Container>
  );
}

export default Register;
