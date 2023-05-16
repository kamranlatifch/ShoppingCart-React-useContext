import React from "react";
import { menData } from "./JASON";
import ShoppingCard from "./ShoppingCard";

function Men() {
  return (
    <div>
      <div className="row">
        {menData.map((item) => (
          <div className="col-md-4">
            <ShoppingCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
