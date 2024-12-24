import React from 'react'
import classes from './Dashbord.module.css'
import ProductForm from './products/ProductForm'
import ProductList from './products/ProductList'

const Dashboard = () => {
  return (
    <div className={`${classes.dashboard}`}>
      <ProductForm />
      <ProductList />
    </div>
  )
}

export default Dashboard
