interface IAppContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  products: Array<IProduct> | [];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cart: Array<ICartItem> | [];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

interface IUser {
  email: string;
  id: number;
  name: string;
  role: role;
  token: string;
}

interface INewUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface IUserCredentials {
  email: string;
  password: string;
}

interface IUserRedirect {
  customer: string;
  seller: string;
  administrator: string;
}

interface IProduct {
  id: number;
  name: string;
  price: string;
  url_image: string;
}

interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  subTotal: number;
  unitPrice: number;
}

interface ISeller {
  id: number;
  name: string;
}

interface IOrderData {
  address: string;
  addressNumber: string;
  sellerId: number;
  totalCart: number;
  userId: number;
}

type onChange = (e: React.ChangeEvent<HTMLInputElement>) => void

type onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

type onChangeDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => void

type role = 'customer' | 'seller' | 'administrator'

interface IStorage extends Storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
