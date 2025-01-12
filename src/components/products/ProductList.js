import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/productSlice';
import classes from './ProductList.module.css';

const ProductList = ({ onEditProduct, onDeleteProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products || []); // Ensure products is an array
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    onDeleteProduct(productId);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className={classes.productlist}>
      <h2>Product List</h2>
      {productStatus === 'loading' && <div>Loading...</div>}
      {productStatus === 'failed' && <div>{error}</div>}
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{new Date(product.expiryDate).toLocaleDateString('en-GB')}</td>
                  <td>
                    {product.description && product.description.length > 15
                      ? `${product.description.substring(0, 15)}...`
                      : product.description}
                  </td>
                  <td>
                    <button onClick={() => onEditProduct(product)}>Edit</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No products found</td>
              </tr>
            )}
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
  );
};

export default ProductList;
