import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  role: role;
  name: string;
}

const Navbar: React.FC<Props> = ({ role, name }) => {
  const history = useHistory();

  const fieldsByRole = {
    customer: {
      text: 'MEUS PEDIDOS',
      link: '/customer/orders',
    },
    seller: {
      text: 'PEDIDOS',
      link: '/seller/orders',
    },
    administrator: {
      text: 'GERENCIAR USUÁRIOS',
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
    <nav>
      <div>
        {
          role === 'customer' && (
            <Link to="/customer/products">
              <button>
                PRODUTOS
              </button>
            </Link>
          )
        }
        <Link to={ fieldsByRole[role].link }>
          <button>
            { fieldsByRole[role].text }
          </button>
        </Link>
      </div>
      <div >
        <div>
          {
            role === 'administrator'
              ? 'DeliveryApp Admin'
              : name
          }
        </div>
        <button
          onClick={ () => logout() }
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
