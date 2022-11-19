import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerCol1">
        <div className="aboutUs">
          <h1>About Us</h1>
          {["About Us", "Careers", "Contact Us"].map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="connectWithUs">
          <h1> Connect with us</h1>
          {["Instagram", "Facebook", "Twitter", "Contact Us"].map((item) => (
            <li>{item}</li>
          ))}
          <span>
            eUttaranchal 120 , Indira Nagar <br />, Dehradun , Uttarakhand{" "}
            <br /> -248006
          </span>
        </div>
      </div>
      <div className="footerCol2">
        <div className="ourNetwork">
          <h1>Our Network</h1>
          {[
            "Uttarakhand Govt Jobs",
            "Uttarakhand Tour",
            "Packages",
            "Char Dham Yatra",
            "Uttarakhand Store",
            "Matrimonial",

            "Uttarakhand Stories",
          ].map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="policies">
          <h1>Policies</h1>
          {[
            "Terms of service",
            "Cancellation & Refund",
            "Privacy Policy",
            "Disclaimer",
          ].map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
