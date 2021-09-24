import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Api from '../../services/Api';
import { DEFAULT_STATE } from '../../context/AppContext';
import { inputs, roles } from './inputs';

interface Props {
  select: boolean;
}

const FormNewUser: React.FC<Props> = ({ select }) => {
  const [disable, setDisable] = useState(true);
  const {
    newUser,
    setNewUser,
    setUsersList,
    setErrorMessage,
  } = useContext(AppContext);
  const history = useHistory();

  const disableButton = () => {
    const verify = Helpers.verifyNewUserCredentials(newUser);
    setDisable(verify);
  }

  useEffect(() => {
    disableButton();
  }, [newUser]);

  const handleChange: onChange = ({ target: { value, name }}) => {
    setNewUser({ ...newUser, [name]: value });
  }

  const handleDropDown: onChangeDropDown = ({ target: { value, name } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleClick = async () => {
    const adminData = Helpers.getDataFromStorage() as IUser;
    const result = await Api.registerUser(newUser);
    if (result.error) {
      setErrorMessage(result.error.message);
      return;
    }
    if (history.location.pathname === '/register') {
      localStorage.setItem('user', JSON.stringify(result));
      setNewUser(DEFAULT_STATE.newUser);
      history.push('/customer/products');
      return;
    }
    const newList = await Api.getAllUsers(adminData.token);
    setUsersList(newList);
    setNewUser(DEFAULT_STATE.newUser);
  }

  return (
    <section>
      {
        inputs.map(({ name, type, placeholder }) => (
          <label htmlFor={name}>
            {`${Helpers.uppercaseFirstLetter(name)}:`}
            <input
              type={type}
              name={name}
              value={ newUser[name] }
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
              id={name}
              placeholder={placeholder}
            />
          </label>
        ))
      }
      { select && (
        <label>
          Role:
          <select
            name="role"
            onChange={
              (e: React.ChangeEvent<HTMLSelectElement>) => handleDropDown(e)
            }
          >
            <option value="">Select Role</option>
            {
              roles.map((role) => (
                <option value={ role }>
                  { role }
                </option>
              ))
            }
          </select>
        </label>
      ) }
      <button
        type="button"
        disabled={ disable }
        onClick={ () => handleClick() }
      >
        Register
      </button>
    </section>
  );
}

export default FormNewUser;
