import React, { useState } from 'react';
import AppContext from './AppContext';
import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(DEFAULT_STATE.loading);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_STATE.errorMessage);
  const [products, setProducts] = useState<Array<IProduct> | []>(DEFAULT_STATE.products);
  const [cart, setCart] = useState<Array<ICartItem> | []>(DEFAULT_STATE.cart);

  const contextValue = {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    products,
    setProducts,
    cart,
    setCart,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
