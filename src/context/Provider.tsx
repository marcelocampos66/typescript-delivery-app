import React, { useState } from 'react';
import AppContext from './AppContext';
import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(DEFAULT_STATE.loading);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_STATE.errorMessage);

  const contextValue = {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
