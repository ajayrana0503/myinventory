import React from 'react'
import ProductItem from './ProductItem'


const items = [
    { name: "Pen", price: "10", description: "Gel Pen" },
    { name: "Box", price: "100", description: "Tiffin Box" },
    { name: "Bottle", price: "100", description: "Good Quality" }
  ]

const ProductList = () => {
  return (
    <div>
      {items.map((item) => (
        <ProductItem item={item}/>
      ))}
    </div>
  )
}

export default ProductList
