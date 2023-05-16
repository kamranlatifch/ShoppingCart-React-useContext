import React, { useContext } from "react";
import { Cart } from "../App";
import ShoppingCard from "./ShoppingCard";
import ProceedCard from "./ProceedCard";

function CartList() {
  const { cartItems } = useContext(Cart);
  return (
    <div>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4">
            <ProceedCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartList;
