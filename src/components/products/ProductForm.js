import React, { useState } from 'react'
import classes from './ProductForm.module.css'

const ProductForm = () => {
  const [formValues, setFormValues] = useState({
    productName: '',
    productPrice: '',
    productQuantity: '',
    expiryDate: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log(formValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <div className={classes.formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Name</label>
          <input
            type="text"
            name="productName"
            className={classes.formInput}
            value={formValues.productName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Price</label>
          <input
            type="text"
            name="productPrice"
            className={classes.formInput}
            value={formValues.productPrice}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Quantity</label>
          <input
            type="text"
            name="productQuantity"
            className={classes.formInput}
            value={formValues.productQuantity}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            className={classes.formInput}
            value={formValues.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Description</label>
          <textarea
            name="description"
            className={classes.formInput}
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={classes.submitButton}>Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm