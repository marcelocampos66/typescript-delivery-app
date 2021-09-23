import React from 'react';
import Helpers from '../helpers/Helpers';

interface Props {
  products: Array<IProductWithQty>;
}

const ProductsTable: React.FC<Props> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((item, index) => {
            const total = item.salesProducts.quantity * parseFloat(item.price);
            return (
              <tr key={ item.id }>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.salesProducts.quantity}</td>
                <td>
                  { Helpers.formatPrice(item.price) }
                </td>
                <td>
                  { Helpers.formatPrice(total.toString()) }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default ProductsTable;
