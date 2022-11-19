import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TerrainIcon from "@mui/icons-material/Terrain";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import TourIcon from "@mui/icons-material/Tour";
import FestivalIcon from "@mui/icons-material/Festival";
import CallIcon from "@mui/icons-material/Call";
import "./Navbar.scss";
const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setNavBtn(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logoContainer">
          <img
            src="https://www.euttaranchal.com/icms/_imgs/eua-logo-sm.png"
            alt="euttraaranchal"
          />
        </div>

        <div className="navLinksContainer">
          <ul className="navLinks">
            <li>
              <Link to="/">
                <TerrainIcon className="menuIcons" />
                Uttarakhand
              </Link>
            </li>
            <li>
              <Link to="/">
                <FavoriteIcon className="menuIcons" />
                Matrimony
              </Link>
            </li>
            <li>
              <Link to="/">
                <HolidayVillageIcon className="menuIcons" />
                Villages
              </Link>
            </li>
            <li>
              <Link to="/">
                <ShoppingBagIcon className="menuIcons" />
                Pahadi Shop
              </Link>
            </li>
            <li>
              <Link to="/">
                <MenuBookIcon className="menuIcons" />
                Education
              </Link>
            </li>
            <li>
              <Link to="/">
                <WorkHistoryIcon className="menuIcons" />
                Gov Jobs
              </Link>
            </li>
            <li>
              <Link to="/">
                <TourIcon className="menuIcons" />
                Tourism
              </Link>
            </li>
            <li>
              <Link to="/">
                <FestivalIcon className="menuIcons" />
                Culture
              </Link>
            </li>
            <li>
              <Link to="/">
                <CallIcon className="menuIcons" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="menuIconContainer">
          <MenuIcon
            onClick={() => setNavBtn((prevState) => !prevState)}
            className="menuIcon"
          />
        </div>
      </div>
      {navBtn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="motionDiv"
        >
          <ul className="menuLinks">
            <li className="navlink">
              <Link to="/">
                <TerrainIcon className="menuIcons" /> Uttarakhand
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <FavoriteIcon className="menuIcons" /> Matrimony
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <HolidayVillageIcon className="menuIcons" />
                Villages
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <ShoppingBagIcon className="menuIcons" />
                Pahadi Shop
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                {" "}
                <MenuBookIcon className="menuIcons" />
                Education
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <WorkHistoryIcon className="menuIcons" />
                Gov Jobs
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <TourIcon className="menuIcons" />
                Tourism
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <FestivalIcon className="menuIcons" />
                Culture
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <CallIcon className="menuIcons" />
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
