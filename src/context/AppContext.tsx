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
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
