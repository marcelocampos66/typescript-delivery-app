import React, { useState } from 'react';
import AppContext from './AppContext';
import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(DEFAULT_STATE.loading);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_STATE.errorMessage);
  const [products, setProducts] = useState<Array<IProduct> | []>(DEFAULT_STATE.products);
  const [cart, setCart] = useState<Array<ICartItem> | []>(DEFAULT_STATE.cart);
  const [newUser, setNewUser] = useState<INewUser>(DEFAULT_STATE.newUser);
  const [usersList, setUsersList] = useState<Array<IUserId> | []>(DEFAULT_STATE.usersList);
  const [loginData, setLoginData] = useState<IUserCredentials>(DEFAULT_STATE.loginData);
  const [userData, setUserData] = useState<IUser | undefined>(DEFAULT_STATE.userData);
  const [sellers, setSellers] = useState<Array<ISeller> | []>(DEFAULT_STATE.sellers);
  const [sales, setSales] = useState<Array<ISale> | []>(DEFAULT_STATE.sales);
  const [sale, setSale] = useState<ISaleById | undefined>(DEFAULT_STATE.sale);

  const contextValue = {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    products,
    setProducts,
    cart,
    setCart,
    newUser,
    setNewUser,
    usersList,
    setUsersList,
    loginData,
    setLoginData,
    userData,
    setUserData,
    sellers,
    setSellers,
    sales,
    setSales,
    sale,
    setSale,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
