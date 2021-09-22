import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../services/Api';
import TextInput from '../components/TextInput';
import inscricao from '../images/inscricao.png';

const Register: React.FC = () => {
  const [newUserData, setNewUserData] = useState({
    name: '', email: '', password: '', role: 'customer',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const verifyNewUserCredentials = () => {
    const { name, email, password } = newUserData;
    const minNameLength = 4;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (name.length < minNameLength) {
      setDisableButton(true);
      return;
    }
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

  useEffect(() => {
    verifyNewUserCredentials();
  }, [newUserData]);

  const handleChange: onChange = ({ target: { name, value } }) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  const history = useHistory();

  const handleClick = async () => {
    const result = await Api.registerUser(newUserData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(result));
      history.push('/customer/products');
    }
  };

  const cleanFields = () => {
    setErrorMessage(null);
    setNewUserData({ name: '', email: '', password: '', role: 'customer' });
  };

  const errorDivMessage = (
    <div className="message-error">
      <p>{ errorMessage }</p>
      <button
        type="button"
        onClick={ cleanFields }
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
        <TextInput
          type="text"
          name="name"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Nome"
          placeholderText="Full name"
        />
        <TextInput
          type="text"
          name="email"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="E-mail"
          placeholderText="E-mail"
        />
        <TextInput
          type="password"
          name="password"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
          labelText="Password"
          placeholderText="Password"
        />
        {errorMessage && errorDivMessage}
        <button
          type="button"
          onClick={ () => handleClick() }
          disabled={ disableButton }
        >
          Register
        </button>
      </section>
    </main>
  );
}

export default Register;
