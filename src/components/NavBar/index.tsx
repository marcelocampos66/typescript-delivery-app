import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import SwitchButton from '../SwitchButton';
import Styled from './S.NavBar';

const Navbar: React.FC = () => {
  const { userData }= useContext(AppContext);
  const history = useHistory();

  const fieldsByRole = {
    customer: {
      text: 'MY ORDERS',
      link: '/customer/orders',
    },
    seller: {
      text: 'ORDERS',
      link: '/seller/orders',
    },
    administrator: {
      text: 'USER MANAGEMENT',
      link: '/admin/manage',
    },
  };

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  }

  if (!userData) return (<p>Loading...</p>);

  return (
    <Styled.Navbar>
      <Styled.DivOptions>
        {
          userData!.role === 'customer' && (
            <Styled.Link to="/customer/products">
              <Styled.Button>
                PRODUCTS
              </Styled.Button>
            </Styled.Link>
          )
        }
        <Styled.Link to={ fieldsByRole[userData!.role].link }>
          <Styled.Button>
            { fieldsByRole[userData!.role].text }
          </Styled.Button>
        </Styled.Link>
      </Styled.DivOptions>
      <Styled.DivLogout>
        <Styled.DivName>
          {
            userData!.role === 'administrator'
              ? 'DeliveryApp Admin'
              : userData!.name
          }
        </Styled.DivName>
        <SwitchButton />
        <Styled.Button
          onClick={ () => logout() }
        >
          LOGOUT
        </Styled.Button>
      </Styled.DivLogout>
    </Styled.Navbar>
  );
};

export default Navbar;
