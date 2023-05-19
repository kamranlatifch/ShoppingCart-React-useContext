import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../App";
import { useState } from "react";
function Header() {
  let { totalCount, netTotal } = useContext(Cart);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="col-md-12 header bg-danger d-flex justify-content-around">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="cart-logo">
          <Link to="/cartList">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
              stroke={isHovered ? "blue" : "currentColor"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <path d="M2 3h2l2.6 10.4c.2.7.9 1.2 1.6 1.2h10c.8 0 1.4-.5 1.6-1.2L20 7H6" />
              <circle cx="10" cy="21" r="2" />
              <circle cx="17" cy="21" r="2" />
              <text
                x="12"
                y="14"
                fontSize="8"
                fontWeight="lighter"
                textAnchor="middle"
                style={{ color: "white", fontWeight: "normal" }}
              >
                {totalCount}
              </text>
            </svg>
          </Link>
          <h5>netTotal= {netTotal}</h5>
        </div>
      </div>
    </>
  );
}

export default Header;
