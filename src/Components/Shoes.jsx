import React from "react";
import { shoeData } from "./JASON";
import ShoppingCard from "./ShoppingCard";
function Shoes() {
  return (
    <div className="row">
      {shoeData.map((item) => (
        <div className="col-md-4">
          <ShoppingCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default Shoes;
