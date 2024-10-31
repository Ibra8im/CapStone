import React from "react";
// import { Link } from "react-router-dom";
import imageBanner from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* text */}
        <div className="banner">
          <h2>Littel Leamon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family Owned Mediteraneran Resturant, Focused on
            traditional recipes served with a modern twist....
          </p>
          {/* <Link to="/booking"> */}
            <button aria-label="on Click">Reserve table</button>{" "}
          {/* </Link> */}
        </div>
        {/* image */}
        <div className="banner-img">
          <img src={imageBanner} alt=""/>
        </div>
      </section>
    </header>
  );
};

export default Header;
