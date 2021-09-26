import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Styled from './S.NavBar';

interface Props {
  role: role;
  name: string;
}

const Navbar: React.FC<Props> = ({ role, name }) => {
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


  useEffect(() => {
    if (!localStorage.getItem('user')) {
      history.push('/login');
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <Styled.Navbar>
      <Styled.DivOptions>
        {
          role === 'customer' && (
            <Styled.Link to="/customer/products">
              <Styled.Button>
                PRODUCTS
              </Styled.Button>
            </Styled.Link>
          )
        }
        <Styled.Link to={ fieldsByRole[role].link }>
          <Styled.Button>
            { fieldsByRole[role].text }
          </Styled.Button>
        </Styled.Link>
      </Styled.DivOptions>
      <Styled.DivLogout>
        <Styled.DivName>
          {
            role === 'administrator'
              ? 'DeliveryApp Admin'
              : name
          }
        </Styled.DivName>
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
