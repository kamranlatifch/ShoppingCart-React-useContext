import React, { useContext } from "react";
import { Cart } from "../App";
function ProceedCard(props) {
  const { subtractQuantity, addQuantity, removeFromCart } = useContext(Cart);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="card-footer">
          <p>{props.name}</p>
          <div className="d-flex">
            <p>{props.price} X </p>
            <p> {props.quantity} = </p>
            <h4> Total: {props.currentTotal}</h4>
          </div>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-primary"
              onClick={() => addQuantity(props)}
            >
              Add More
            </button>
            <button
              className="btn btn-primary"
              onClick={() => subtractQuantity(props)}
            >
              Add Less
            </button>
          </div>
          <button
            className="btn btn-primary my-2 form-control"
            onClick={() => removeFromCart(props)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProceedCard;
