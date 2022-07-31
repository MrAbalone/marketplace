import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";
function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
      <Slider/>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/sale">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            ></img>
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
          <Link to="/category/rent">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            ></img>
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
