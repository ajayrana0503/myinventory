import React from 'react'
import classes from './Dashbord.module.css'
import ProductForm from './products/ProductForm'
import ProductList from './products/ProductList'

const Dashboard = ({ onLogout }) => {
  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.header}>
        <div className={classes.left}>
          <h2>Inventory</h2>
        </div>
        <div className={classes.right}>
          <button onClick={onLogout} className={classes.logoutButton}>Logout</button>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.dashboardContent}>
        <div className={classes.formContainer}>
          <ProductForm />
        </div>
        <div className={classes.listContainer}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard
