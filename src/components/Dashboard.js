import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import classes from './Dashbord.module.css';
import ProductForm from './products/ProductForm';
import ProductList from './products/ProductList';

const Dashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 59.99,
      quantity: 20,
      description: "Wireless Bluetooth Headphones.",
      expiryDate: "2025-05-12"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89.99,
      quantity: 20,
      description: "Smart Fitness Watch.",
      expiryDate: "2025-05-12"
    },
    {
      id: 3,
      name: "Portable Charger",
      price: 29.99,
      quantity: 20,
      description: "Portable Charger.",
      expiryDate: "2025-05-12"
    },
    {
      id: 4,
      name: "4K Ultra HD Smart TV",
      price: 499.99,
      quantity: 20,
      description: "4K Ultra HD Smart TV.",
      expiryDate: "2025-05-12"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 39.99,
      quantity: 20,
      description: "High precision gaming mouse.",
      expiryDate: "2025-05-12"
    }
  ]);
  const [editingProduct, setEditingProduct] = useState(null);
  const dispatch = useDispatch();

  const handleAddProduct = (newProduct) => {
    if (editingProduct) {
      setProducts(products.map(product => product.id === editingProduct.id ? newProduct : product));
      setEditingProduct(null);
    } else {
      const nextId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { ...newProduct, id: nextId }]);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.header}>
        <div className={classes.left}>
          <h2>Inventory</h2>
        </div>
        <div className={classes.right}>
          <Link to="/login" className={classes.logoutButton} onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.dashboardContent}>
        <div className={classes.formContainer}>
          <ProductForm existingProduct={editingProduct} onAddProduct={handleAddProduct} />
        </div>
        <div className={classes.listContainer}>
          <ProductList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
