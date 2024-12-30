import React from 'react'
import classes from './ProductList.module.css'

const ProductList = ({ products }) => {
  return (
    <div className={classes.productlist}>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Expiry Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{new Date(product.expiryDate).toLocaleDateString('en-GB')}</td>
              <td>
                {product.description.length > 15 ? `${product.description.substring(0, 15)}...` : product.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
