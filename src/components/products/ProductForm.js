import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../redux/productSlice';
import classes from './ProductForm.module.css';

const ProductForm = ({ existingProduct, onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    expiryDate: '',
    description: '',
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct(product));
    }
    onAddProduct(product);
    setProduct({
      name: '',
      price: '',
      quantity: '',
      expiryDate: '',
      description: '',
    });
  };

  return (
    <div className={classes.formContainer}>
      <h2>{product.id ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Name</label>
          <input
            type="text"
            name="name"
            className={classes.formInput}
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Price</label>
          <input
            type="number"
            name="price"
            className={classes.formInput}
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Quantity</label>
          <input
            type="number"
            name="quantity"
            className={classes.formInput}
            value={product.quantity}
            onChange={handleChange}
            placeholder="Quantity"
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            className={classes.formInput}
            value={product.expiryDate}
            onChange={handleChange}
            placeholder="Expiry Date"
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Description</label>
          <textarea
            name="description"
            className={classes.formInput}
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <button type="submit" className={classes.submitButton}>{product.id ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;