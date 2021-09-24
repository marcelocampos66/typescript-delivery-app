import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import FormNewUser from '../components/FormNewUser';
import inscricao from '../images/inscricao.png';

const Register: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  const errorDivMessage = () => (
    <div className="message-error">
      <p>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage('') }
      >
        X
      </button>
    </div>
  );

  return (
    <main>
      <img
        src={ inscricao }
        alt="delivery"
        style={{ width: '250px', height: '200px' }}
      />
      <section>
        <h1>Register</h1>
        <FormNewUser select={ false } />
        { errorMessage && errorDivMessage() }
      </section>
    </main>
  );
}

export default Register;
