import React, { useState } from 'react'
import classes from './ProductForm.module.css'
import ErrorModal from '../ErrorModal'

const ProductForm = ({ onAddProduct }) => {
  const [formValues, setFormValues] = useState({
    productName: '',
    productPrice: '',
    productQuantity: '',
    expiryDate: '',
    description: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { productName, productPrice, productQuantity, expiryDate, description } = formValues
    const newErrors = {}

    const textRegex = /^[A-Za-z\s]+$/
    if (!productName) {
      newErrors.productName = 'Product Name is required.'
    } else if (productName.length <= 3) {
      newErrors.productName = 'Product Name must be greater than 3 characters.'
    } else if (!textRegex.test(productName)) {
      newErrors.productName = 'Product Name must contain only letters and spaces.'
    }

    if (!productPrice) {
      newErrors.productPrice = 'Product Price is required.'
    } else if (isNaN(productPrice)) {
      newErrors.productPrice = 'Product Price must be a number.'
    }

    if (!productQuantity) {
      newErrors.productQuantity = 'Product Quantity is required.'
    } else if (!Number.isInteger(Number(productQuantity))) {
      newErrors.productQuantity = 'Product Quantity must be an integer.'
    }

    if (!expiryDate) {
      newErrors.expiryDate = 'Expiry Date is required.'
    } else if (new Date(expiryDate).getFullYear() > 2026) {
      newErrors.expiryDate = 'Expiry Date must be before 2026.'
    }

    if (!description) {
      newErrors.description = 'Description is required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onAddProduct({
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity, 10),
      expiryDate: expiryDate,
      description: description
    })
    setFormValues({
      productName: '',
      productPrice: '',
      productQuantity: '',
      expiryDate: '',
      description: ''
    })
    setErrors({})
  }

  const closeModal = () => {
    setErrors({})
  }

  return (
    <div className={classes.formContainer}>
      {Object.keys(errors).length > 0 && <ErrorModal message={errors} onClose={closeModal} />}
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
            type="number"
            name="productPrice"
            className={classes.formInput}
            value={formValues.productPrice}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Product Quantity</label>
          <input
            type="number"
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