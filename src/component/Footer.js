import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family Owned Mediteraneran Resturant, Focused on
            traditional recipes served with a modern twist....
          </p>
        </div>
        <div>
          <h3>important links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Aboute</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">order online</a></li>
            <li><a href="/">login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/>Jeddah, ksa</li>
            <li>Phone: <br/>+966 56 300 6803</li>
            <li>Email: <br/>ibra8imit07@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3>important links</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">X</a></li>
            <li><a href="/">Instigram</a></li>
          </ul>
        </div>

      </section>
    </footer>
  );
};
export default Footer;
