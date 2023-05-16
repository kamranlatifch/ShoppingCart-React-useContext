import React from "react";
import { useContext } from "react";
import { Cart } from "../App";
function ShoppingCard(props) {
  let { addToCart } = useContext(Cart);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="card-footer">
          <p>{props.title}</p>
          <div className="d-flex justify-content-around">
            <p>
              <s>{props.oldPrice}</s>
            </p>
            <p>{props.discountedPrice}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => addToCart(props)}>
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default ShoppingCard;
