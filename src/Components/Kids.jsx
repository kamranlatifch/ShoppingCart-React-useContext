import React from "react";
import { kidsData } from "./JASON";
import ShoppingCard from "./ShoppingCard";
function Kids() {
  return (
    <div>
      <div className="row">
        {kidsData.map((item) => (
          <div className="col-md-4">
            <ShoppingCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
