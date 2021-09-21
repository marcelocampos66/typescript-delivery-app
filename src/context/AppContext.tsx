import { createContext } from 'react';

export const DEFAULT_STATE = {
  loading: false,
  setLoading: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
