import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Api from '../../services/Api';
import { DEFAULT_STATE } from '../../context/AppContext';
import { inputs, roles } from './inputs';
import Styled from '../FormNewUser/S.FormNewUser';

const FormNewUser: React.FC = () => {
  const [disable, setDisable] = useState(true);
  const [select, setSelect] = useState(false);
  const {
    newUser,
    setNewUser,
    setUsersList,
    setErrorMessage,
  } = useContext(AppContext);
  const history = useHistory();
  console.log(history);

  const disableButton = () => {
    const verify = Helpers.verifyNewUserCredentials(newUser);
    setDisable(verify);
  }

  const renderSelect = () => {
    if (history.location.pathname === '/register') {
      return setSelect(false);
    }
    setSelect(true);
  }

  useEffect(() => {
    renderSelect();
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
    <Styled.Section direction={ select }>
      {
        inputs.map(({ name, type, placeholder }) => (
          <Styled.Label htmlFor={name}>
            {`${Helpers.uppercaseFirstLetter(name)}:`}
            <Styled.Input
              type={type}
              name={name}
              value={ newUser[name] }
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
              id={name}
              placeholder={placeholder}
            />
          </Styled.Label>
        ))
      }
      { select && (
        <Styled.Label>
          Role:
          <Styled.Select
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
          </Styled.Select>
        </Styled.Label>
      ) }
      <Styled.Button
          direction={ select }
          type="button"
          disabled={ disable }
          onClick={ () => handleClick() }
        >
          Register
        </Styled.Button>
    </Styled.Section>
  );
}

export default FormNewUser;
