import React, { useState } from 'react'
import styles from './ProductForm.module.css'

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
    <div className={styles.formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Product Name</label>
          <input
            type="text"
            className={styles.formInput}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Product Price</label>
          <input
            type="text"
            className={styles.formInput}
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Product Quantity</label>
          <input
            type="text"
            className={styles.formInput}
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Expiry Date</label>
          <input
            type="date"
            className={styles.formInput}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Description</label>
          <textarea
            className={styles.formInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm