import React from 'react'

const ProductList = () => {
    const data = {
        "products": [
            {
                "id": 1,
                "name": "Wireless Bluetooth Headphones",
                "price": 59.99,
                "quantity":20,
                "description": "Wireless Bluetooth Headphones.",
                "expiryDate":"2025-05-12"
            },
            {
                "id": 2,
                "name": "Smart Fitness Watch",
                "price": 89.99,
                "quantity":20,
                "description": "Smart Fitness Watch.",
                "expiryDate":"2025-05-12"
 
            },
            {
                "id": 3,
                "name": "Portable Charger",
                "price": 29.99,
                "quantity":20,
                "description": "Portable Charger.",
                "expiryDate":"2025-05-12"
 
            },
            {
                "id": 4,
                "name": "4K Ultra HD Smart TV",
                "price": 499.99,
                "quantity":20,
                "description": "4K Ultra HD Smart TV.",
                "expiryDate":"2025-05-12"
 
            },
            {
                "id": 5,
                "name": "Gaming Mouse",
                "price": 39.99,
                "quantity":20,
                "description": "High precision gaming mouse.",
                "expiryDate":"2025-05-12"
 
            }
        ]
    };
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Expiry Date</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
        {data.products.map(product => (
                   
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.description}</td>
                        <td>{product.expiryDate}</td>
                     
                    </tr>
                ))}
           
 
        </tbody>
      </table>
     
    </div>
  )
}
 
export default ProductList
