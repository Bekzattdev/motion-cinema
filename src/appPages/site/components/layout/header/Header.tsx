import React from "react";
import scss from "./Header.module.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";


const Header = () => {
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.headerText}>
          <h1>MotionCinema<span> <BiSolidCameraMovie /></span> </h1>
          <div className={scss.headerAbout}>
            <h2>Home</h2>
            <h2>Top Rated</h2>
            <h2>Popular</h2>
          </div>
          <div className={scss.headerClient}>
            <input type="text" placeholder="Search Cinema..." />
            <a className=""><IoMdSearch /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
