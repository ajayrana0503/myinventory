import React, { useState } from 'react'
import classes from './ProductForm.module.css'

const ProductForm = () => {
  // State variables to hold form input values
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [description, setDescription] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({
      productName,
      productPrice,
      productQuantity,
      expiryDate,
      description
    })
  }

  return (
    <div className={classes.formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Name</label>
          <input
            type="text"
            className={classes.formInput}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Price</label>
          <input
            type="text"
            className={classes.formInput}
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Quantity</label>
          <input
            type="text"
            className={classes.formInput}
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Expiry Date</label>
          <input
            type="date"
            className={classes.formInput}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Description</label>
          <textarea
            className={classes.formInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className={classes.submitButton}>Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm