class Helpers {

  public formatPrice(value: string) {
    return parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  public getDataFromStorage() {
    const content = localStorage.getItem('user');
    if (content) {
      const data = JSON.parse(content) as IUser;
      return data;
    }
    return;
  }

  public getCartFromStorage() {
    const content = localStorage.getItem('cart');
    if (content) {
      const data = JSON.parse(content) as Array<ICartItem> | [];
      return data;
    }
    return [];
  }

  public mountCartItem(product: IProduct) {
    return ({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    });
  }

  public getCartTotalPrice(cart: Array<ICartItem>) {
    if (cart.length === 0) {
      return 0;
    }
    const total = cart.reduce((total, product) => {
      const subTotal = parseFloat(product.price) * product.quantity;
      return total + subTotal;
    }, 0);
    return parseFloat(total.toFixed(2));
  }

  public uppercaseFirstLetter([initial, ...rest]: string) {
    return [initial.toUpperCase(), ...rest].join("");
  }

  public mountProp (role: string, sale: ISale) {
    return  ({
      role,
      ...sale,
    });
  }

  public formatOrderNumber(number: number) {
    const MAX_LENGTH = 4;
    const string = number.toString();
    return '0'.repeat(MAX_LENGTH - string.length) + number;
  };

  public formatDate(date: string) {
    return new Date(date).toLocaleString('pt-BR');
  }

  public verifyNewUserCredentials(newUser: INewUser) {
    const { name, email, password, role } = newUser;
    const minPasswordLength = 6;
    const minNameLength = 4;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (name.length < minNameLength
      || !emailRegex.test(email)
      || password.length < minPasswordLength
      || !role ) {
      return true;
    }
    return false;
  };

  public verifyLoginCredentials(loginData: IUserCredentials) {
    const { email, password } = loginData;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (!emailRegex.test(email)) {
      return true;
    }
    if (password.length < minPasswordLength) {
      return true;
    }
    return false;
  };

  public verifySaleData(saleInfo: ISaleInfo, cartLength: number) {
    const { address, addressNumber, sellerId } = saleInfo;
    if (!address || !addressNumber || !sellerId || cartLength === 0) {
      return true;
    }
    return false;
  };

  public formatProducts(products: Array<IProductWithQty>) {
    const result = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.salesProducts.quantity,
    }));
    return result;
  }

  public getPathToRedirect(role: role) {
    const userRedirect: IUserRedirect = {
      customer: '/customer/products',
      seller: '/seller/orders',
      administrator: '/admin/manage',
    };
    return userRedirect[role];
  }

  public mountSaleData(
    saleInfo: ISaleInfo,
    userId: number,
    cart: Array<ICartItem>
  ) {
    return ({
      ...saleInfo,
      sellerId: Number(saleInfo.sellerId),
      userId,
      totalCart: this.getCartTotalPrice(cart),
    })
  };
  
}

export default new Helpers();
