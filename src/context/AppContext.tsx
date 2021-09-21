import { createContext } from 'react';

export const DEFAULT_STATE = {
  loading: false,
  setLoading: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
