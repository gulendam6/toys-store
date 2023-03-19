import React from 'react';
import './product-card.css';
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {

  const { title, imgUrl, price } = props.item;
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      // id,
      title,
      // image01,
      price
    }))
  }

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
          <span><i class="ri-star-s-fill"></i></span>
        </div>

        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard