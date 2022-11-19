import React from "react";
import "./DiscoverSection.scss";
import { Link } from "react-router-dom";
const DiscoverSection = () => {
  return (
    <div className="discoverSection">
      <div className="discoverSection1">
        <img src="https://www.euttaranchal.com/_imgs/discover.webp" alt="💑" />
        <div className="discoverSectionText">
          <h1>Discover Uttarakhand</h1>
          <div className="linkSection">
            <ul className="linkSection1">
              <li>
                <Link to="/">Pre Schools in Uttarakhand</Link>
              </li>
              <li>
                <Link to="/"> Schools in Uttarakhand</Link>
              </li>
              <li>
                <Link to="/">Colleges in Uttarakhand</Link>
              </li>
              <li>
                <Link to="/">Cultures</Link>
              </li>
            </ul>
            <ul className="linkSection2">
              <li>
                <Link to="/">River in Uttarakhand</Link>
              </li>
              <li>
                <Link to="/">Nation Parks</Link>
              </li>
              <li>
                <Link to="/">Glaciers in Uttarakhand</Link>
              </li>
              <li>
                <Link to="/">Peaks & Mountains</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
