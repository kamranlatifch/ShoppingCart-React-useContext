import React from "react";
import men from "./images/men.jpg";
import women from "./images/women.avif";
import kids from "./images/kids.webp";
import accessories from "./images/accessories.jpg";
import shoes from "./images/shoes.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-page ">
        <div className="row">
          <div className="col-md-6 my-2">
            <Link to="/men">
              <img src={men} alt="men" className="w-100 h-80" />
            </Link>
          </div>
          <div className="col-md-6 my-2">
            <Link to="/women">
              <img src={women} alt="women" className="w-100 h-80" />
            </Link>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12">
            <Link to="/kids">
              <img src={kids} alt="" className="w-100" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/accessories">
              <img src={accessories} alt="men" className="w-100 h-75" />
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/shoes">
              <img src={shoes} alt="men" className="w-100 h-75" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
