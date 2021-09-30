import { createContext } from 'react';

const newUserInitialState = {
  name: '',
  email: '',
  password: '',
  role: 'customer',
};

const loginInitialState = {
  email: '',
  password: '',
};

export const DEFAULT_STATE = {
  loading: false,
  setLoading: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
  newUser: newUserInitialState,
  setNewUser: () => {},
  usersList: [],
  setUsersList: () => {},
  loginData: loginInitialState,
  setLoginData: () => {},
  userData: undefined,
  setUserData: () => {},
  sellers: [],
  setSellers: () => {},
  sales: [],
  setSales: () => {},
  sale: undefined,
  setSale: () => {},
  theme: true,
  setTheme: () => {},
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
