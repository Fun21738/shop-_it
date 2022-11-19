import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/ProductSlice";
import Navbar from "../Navbar/Navbar";

function Product() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products.products);

  console.log('from firebase',data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="product--data">
        <h3>test</h3>
       {data?.map(product =>(
        <div className="product--card">
          <div className="imaage">
            <img src={product.image} alt="image" />
          </div>
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
          <p>{product.price}</p>
          <p>{product.discountRate}</p>
          <button>add products</button>
        </div>
          
          
        </div>
       ))}
      </div>
    </div>
  );
}

export default Product;
