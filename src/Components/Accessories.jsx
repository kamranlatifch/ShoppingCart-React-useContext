import React from "react";
import { accessoriesData } from "./JASON";
import ShoppingCard from "./ShoppingCard";
function Accessories() {
  return (
    <div className="row">
      {accessoriesData.map((item) => (
        <div className="col-md-4">
          <ShoppingCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default Accessories;
