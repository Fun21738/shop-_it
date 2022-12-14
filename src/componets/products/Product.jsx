import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/CartSlice";
import { fetchData } from "../../redux/slice/ProductSlice";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

function Product() {
  const dispatch = useDispatch();

  const handleAddCart = (product) =>{
    // console.log('working')
    console.log(product)
    dispatch (addToCart(product));
  };

  const data = useSelector((state) => state.products.products);

  console.log("from firebase", data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="product--data">
        {/* <h3>items</h3> */}
        {data?.map((product) => (
          <div className="product--card">
            <div className="imaage">
              <img src={product.image} alt="ima" />
            </div>
            <div className="doc">
              <h3>{product.title}</h3>
              <p>{product.body}</p>
              <p>{product.price}</p>
              <p>{product.discountRate}</p>
              <button onClick={()=>handleAddCart(product)}>add products</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
