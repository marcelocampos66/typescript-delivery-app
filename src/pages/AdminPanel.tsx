import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Helpers from '../helpers/Helpers';

const AdminPanel: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUser>();
  const history = useHistory();

  const getUserInfo = () => {
    const data = Helpers.getDataFromStorage();
    if (!data) {
      history.push('/login');
    }
    setUserData(data);
    setLoading(false);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <NavBar role={ userData!.role } name={ userData!.name } />
      ADMIN!
    </main>
  );
}

export default AdminPanel;
