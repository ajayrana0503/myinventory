import React, { useState } from 'react'
import classes from './ProductList.module.css'

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(5)
  const [searchQuery, setSearchQuery] = useState('')

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className={classes.productlist}>
      <h2>Product List</h2>
      <div className={classes.controlsContainer}>
        <div className={classes.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={classes.searchInput}
          />
        </div>
        <div className={classes.filterContainer}>
          <label htmlFor="productsPerPage">Show</label>
          <select
            id="productsPerPage"
            value={productsPerPage}
            onChange={handleProductsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <span>products per page</span>
        </div>
      </div>
      <div className={classes.tableContainer}>
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
            {currentProducts.map(product => (
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
      <div className={classes.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? classes.active : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductList
