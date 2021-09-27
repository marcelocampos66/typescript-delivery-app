import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../components/NavBar';
import FormNewUser from '../components/FormNewUser';
import UsersTable from '../components/UsersTable';
import Helpers from '../helpers/Helpers';
import Api from '../services/Api';

const AdminPanel: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser>();
  const { usersList, setUsersList } = useContext(AppContext);
  const history = useHistory();

  const getUserInfo = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    return data;
  }

  const getAllUsers = async () => {
    const user = getUserInfo();
    setUserData(user);
    const users = await Api.getAllUsers(user!.token);
    setUsersList(users);
    setLoading(false);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <NavBar role={ userData!.role } name={ userData!.name } />
      <FormNewUser />
      <UsersTable users={ usersList } />
    </main>
  );
}

export default AdminPanel;
