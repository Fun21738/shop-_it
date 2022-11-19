import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
// import { Link } from 'react-router-dom'
import {addProduct}  from "../../redux/slice/ProductSlice"
import { useDispatch } from "react-redux"; 
import "./additems.css"
export default function AddItems() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState();                           
    const [discountRate, setDiscountRate] = useState("");
  
    const [addRequestStatus, setAddRequestStatus] = useState("idle");
  
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onDescriptionChanged = (e) => setDescription(e.target.value);
    const onPriceChanged = (e) => setPrice(e.target.value);
    const onDiscountChanged = (e) => setDiscountRate(e.target.value);
    const onImageChanged = (e) => setImage(e.target.value);
  
    const canSave =
      [title, description, price, image, discountRate].every(Boolean) &&
      addRequestStatus === "idle";
  
    const onSaveProductClicked = () => {
      if (canSave) {
        try {
          setAddRequestStatus("pending");
          dispatch(
            addProduct({
              title,
              price,
              image,
              discountRate,
              body: description,
            })
          ).unwrap();
  
          setTitle("");
          setDescription("");
          setImage("");
          setPrice("");
          setDiscountRate("");
        } catch (err) {
          console.error("Failed to save the product", err);
        } finally {
          setAddRequestStatus("idle");
        }
      }
    };
    return (
      <div>
        <Navbar/>
 <div className='fom'>

      <section className="form-control">
        <form>
          <h3>Add a New Product</h3>
          <input
            type="text"
            id="productTitle"
            name="productTitle"
            value={title}
            onChange={onTitleChanged}
            placeholder="Product name"
          />
          <textarea
            id="productDesription"
            name="productDesription"
            value={description}
            onChange={onDescriptionChanged}
            placeholder="Description"
          />
          <input
            type="url"
            id="productImage"
            name="productImage"
            value={image}
            onChange={onImageChanged}
            placeholder="Product Image"
          />
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={price}
            onChange={onPriceChanged}
            placeholder=" Price In KShs"
          />
          <input
            type="text"
            id="productDiscountrate"
            name="productDiscountRate"
            value={discountRate}
            onChange={onDiscountChanged}
            placeholder="Discount Rate"
          />
          <button
            type="button"
            onClick={onSaveProductClicked}
            disabled={!canSave}
            className="add-btn"
          >
            Save Product
          </button>
        </form>
      </section>
      
    </div>  
    </div>
    );
//  const
//   return (
//     <div className='logins'>
//          <input type="text" placeholder='Username' />
//         <input type="text" placeholder='describe' />
//         <input type="number" placeholder='price'/>
//         {/* <input ref={image} type="file" name="image" /> */}
//         <input type="number" placeholder='discount_rate'/>
//         <button><Link to="/products">Add</Link></button>
//     </div>
//   )
}

