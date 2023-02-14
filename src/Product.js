import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContextApi";

function Product() {
  const [products, setProducts] = useState([]);

  const {setLogged}=useContext(AuthenticationContext)


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);



  return (
    <>
    <button onClick={(()=>{
      
      setLogged(false)

      localStorage.clear()
    })}>Logout</button>

    <h1>Add Product</h1>
    
    <ul>
      {products.map((item)=>(
      <li style={{margin:'10px',
                  height:'150px',
                  width:'150px'
                  }}>
        {item.brand}
        {item.title}
        {item.description}
        {item.category}
        {item.price}
        {item.discountPercentage}
        {item.rating}
        {item.stock}
        {item.titlthumbnail}
        {item.titlimages}
      </li>))}
    </ul>
    </>
  );
}

export default Product;
