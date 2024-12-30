import React, { useState } from 'react'
import classes from './ProductForm.module.css'

const ProductForm = ({ onAddProduct }) => {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const price = parseFloat(formValues.productPrice)
    const quantity = parseInt(formValues.productQuantity, 10)

    if (isNaN(price) || isNaN(quantity)) {
      alert('Please enter valid numbers for price and quantity.')
      return
    }

    onAddProduct({
      id: Date.now(),
      name: formValues.productName,
      price: price,
      quantity: quantity,
      expiryDate: formValues.expiryDate,
      description: formValues.description
    })
    setFormValues({
      productName: '',
      productPrice: '',
      productQuantity: '',
      expiryDate: '',
      description: ''
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