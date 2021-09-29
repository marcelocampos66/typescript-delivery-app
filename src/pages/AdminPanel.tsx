import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import FormNewUser from '../components/FormNewUser';
import UsersTable from '../components/UsersTable';
import Api from '../services/Api';
import Helpers from '../helpers/Helpers';

const AdminPanel: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { setUsersList, setUserData } = useContext(AppContext);
  const history = useHistory();

  const getUserData = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
    return data;
  }

  const getAllUsers = async (token: string) => {
    const users = await Api.getAllUsers(token);
    setUsersList(users);
    setLoading(false);
  }

  useEffect(() => {
    const data = getUserData();
    getAllUsers(data!.token);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <NavBar />
      <FormNewUser />
      <UsersTable />
    </Container>
  );
}

export default AdminPanel;
