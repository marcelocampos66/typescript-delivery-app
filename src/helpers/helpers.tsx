const formatPrice = (value: string) => {
  return parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formatPrice,
};
