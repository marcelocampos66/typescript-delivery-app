interface IAppContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface IUser {
  email: string;
  id: number;
  name: string;
  role: string;
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

type onChange = (e: React.ChangeEvent<HTMLInputElement>) => void

interface IStorage extends Storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
