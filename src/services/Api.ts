class Api {
  private url: string;
  private content: string;

  constructor() {
    this.url = 'http://localhost:3001';
    this.content = 'application/json';
  }

  public login(user: IUserCredentials) {
    const endpoint = `${this.url}/users/login`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify({ ...user }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public registerUser(newUser: INewUser) {
    const endpoint = `${this.url}/users/register`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify({ ...newUser }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }

  public getAllProducts(token: string) {
    const endpoint = `${this.url}/customer/products`;
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': this.content,
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public getAllSellers(token: string) {
    const endpoint = `${this.url}/sellers`;
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': this.content,
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public registerOrder(
    orderData: IOrderData, listItens: Array<ICartItem>, token: string,
  ) {
    const endpoint = `${this.url}/customer/checkout`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
        authorization: token,
      },
      body: JSON.stringify({ orderData, listItens }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

}

export default new Api();
