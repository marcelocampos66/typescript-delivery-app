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
      subTotal: parseFloat(product.price),
      unitPrice: parseFloat(product.price),
    });
  }

  public getCartTotalPrice(cart: Array<ICartItem>) {
    if (cart.length === 0) {
      return 0;
    }
    const total = cart.reduce((total, product) => {
      return total + product.subTotal;
    }, 0);
    return parseFloat(total.toFixed(2));
  }

}

export default new Helpers();
