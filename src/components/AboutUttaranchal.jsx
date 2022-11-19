import React from "react";
import "./AboutUttaranchal.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const AboutUttaranchal = () => {
  return (
    <div className="AboutUttaranchal">
      <div className="AboutUttaranchal1">
        <img src="https://www.euttaranchal.com/_imgs/nanda.webp" alt="img" />
        <p>
          Seeded in 2003 , eUttaranchal is an endeavor to promote culture ,
          tourism and ethnic products of Uttarakhand . Our motto is "Marketing
          Uttarakhand worldwide" and making it globally know. we are also one of
          the most followed pages of Uttarkhand on social media.
          <br />
          Learn more about our <span>product and services.</span>
        </p>
      </div>
      <div className="btnContainer">
        <button className="facebookBtn">
          <FacebookIcon /> <span>Facebook -6.25 lakh Likes</span>
        </button>
        <button className="instagramBtn">
          <InstagramIcon />
          <span>Instagram - 90 K followers</span>
        </button>
        <button className="twitterBtn">
          <TwitterIcon /> <span>Twitter - 11 K followers</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUttaranchal;
