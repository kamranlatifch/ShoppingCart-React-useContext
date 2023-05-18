import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../App";
function Header() {
  let { totalCount, netTotal } = useContext(Cart);
  return (
    <>
      <div className="col-md-12 header bg-danger d-flex justify-content-around">
        <div className="logo">
          <Link to="/">Logo </Link>
        </div>
        <div className="cart-logo ">
          <Link to="/cartList">
            <h5>netTotal= {netTotal}</h5>
            <h5>cart{totalCount}</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
