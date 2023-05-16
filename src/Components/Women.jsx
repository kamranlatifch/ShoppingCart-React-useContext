import React from "react";
import { womenData } from "./JASON";
import ShoppingCard from "./ShoppingCard";
function Women() {
  return (
    <div>
      <div className="row">
        {womenData.map((item) => (
          <div className="col-md-4">
            <ShoppingCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;
