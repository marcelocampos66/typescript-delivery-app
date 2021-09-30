import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Api from '../../services/Api';
import Helpers from '../../helpers/Helpers';
import Styled from './S.UsersTable';

const UsersTable: React.FC = () => {
  const { usersList, setUsersList } = useContext(AppContext);

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
    <Styled.Table>
      <thead>
        <Styled.Tr>
          <Styled.Th>Item</Styled.Th>
          <Styled.Th>Nome</Styled.Th>
          <Styled.Th>E-mail</Styled.Th>
          <Styled.Th>Tipo</Styled.Th>
          <Styled.Th>Excluir</Styled.Th>
        </Styled.Tr>
      </thead>
      <Styled.Tbody>
        {
          usersList.map((user, index) => (
            <Styled.Tr key={ index }>
              <Styled.Td>
                {index + 1}
              </Styled.Td>
              <Styled.Td>
                {user.name}
              </Styled.Td>
              <Styled.Td>
                {user.email}
              </Styled.Td>
              <Styled.Td>
                {userTypes[user.role]}
              </Styled.Td>
              <Styled.Td>
                <Styled.Button
                  type="button"
                  value={ user.id }
                  disabled={ user.role === 'administrator' }
                  onClick={ () => handleClick(user.id) }
                >
                  Delete
                </Styled.Button>
              </Styled.Td>
            </Styled.Tr>
          ))
        }
      </Styled.Tbody>
    </Styled.Table>
  );
}

export default UsersTable;
