import React from "react";

const ProductItem = (props) => {
    const {item} = props ;
    return (
        <div>
        <h3>Product Name : {item.name}</h3>
        <h3>Price : {item.price}</h3>
        <h3>Description : {item.description}</h3>
        </div>
    )
}

export default ProductItem;