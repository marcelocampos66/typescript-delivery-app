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
    const endpoint = `${this.url}/users`;
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
    const endpoint = `${this.url}/products`;
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
    const endpoint = `${this.url}/users/sellers`;
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
    console.log({ orderData, listItens });
    const endpoint = `${this.url}/sales`;
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

  public getAllSales(token: string) {
    const endpoint = `${this.url}/sales`;
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

  public getSaleById(id: number, token: string) {
    const endpoint = `${this.url}/sales/${id}`;
    return fetch(endpoint, {
      headers: {
        'Content-Type': this.content,
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public getSaleItems(id: number) {
    const endpoint = `${this.url}/sales/items/${id}`;
    return fetch(endpoint, {
      headers: {
        'Content-Type': this.content,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public changeOrderStatus(id: number, status: string) {
    const endpoint = `${this.url}/sales/${id}`;
    return fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': this.content,
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public getAllUsers(token: string) {
    const endpoint = `${this.url}/users`;
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

  public removeUserById(id: number) {
    const endpoint = `${this.url}/users/${id}`;
    return fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': this.content,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

  public registerUserWithAdmin(newUser: INewUser, token: string) {
    const endpoint = `${this.url}/admin/register`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': this.content,
        authorization: token,
      },
      body: JSON.stringify({ ...newUser }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  };

}

export default new Api();
