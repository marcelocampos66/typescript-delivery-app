import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';

interface Props {
  users: Array<IUserId>;
}

const UsersTable: React.FC<Props> = ({ users }) => {
  const { setUsersList } = useContext(AppContext);

  const handleClick = async (id: number) => {
    const adminData = Helpers.getDataFromStorage() as IUser;
    await Api.removeUserById(id);
    const newList = await Api.getAllUsers(adminData.token);
    setUsersList(newList);
  }

  const userTypes = {
    customer: 'Client',
    seller: 'Seller',
    administrator: 'Administrator',
  };

  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => (
            <tr key={ index }>
              <td>
                {index + 1}
              </td>
              <td>
                {user.name}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {userTypes[user.role]}
              </td>
              <td>
                <button
                  type="button"
                  value={ user.id }
                  disabled={ user.role === 'administrator' }
                  onClick={ () => handleClick(user.id) }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default UsersTable;
