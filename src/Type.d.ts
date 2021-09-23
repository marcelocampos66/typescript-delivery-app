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

interface ISale {
  id: number;
  userId: number;
  sellerId: number;
  totalPrice: string;
  deliveryAddress: string;
  deliveryNumber: string;
  saleDate: string;
  status: string;
  products: Array<IProduct>;
}

interface IUserId {
  email: string;
  id: number;
  name: string;
  role: string;
}

interface ISeller {
  email: string;
  id: number;
  name: string;
  role: string;
}

interface ISaleById {
  deliveryAddress: string;
  deliveryNumber: string;
  id: number;
  products: Array<IProductWithQty>;
  saleDate: string;
  sellerId: number;
  status: string;
  totalPrice: string;
  userId: number;
  user: IUserId;
  seller: ISeller;
}

interface IProductWithQty {
  id: number;
  name: string;
  price: string;
  url_image: string;
  salesProducts: { quantity: number; };
}

type onChange = (e: React.ChangeEvent<HTMLInputElement>) => void

type onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

type onChangeDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => void

type role = 'customer' | 'seller' | 'administrator'
