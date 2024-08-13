"use client";
import React, { useState } from "react";
import scss from "./Header.module.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.headerText}>
          <h1>
            MotionCinema
            <span>
              {" "}
              <BiSolidCameraMovie />
            </span>{" "}
          </h1>
          <div className={scss.headerAbout}>
            <h2>
              <Link href={"/"}>Home</Link>
            </h2>
            <h2>Top Rated</h2>
            <h2>Popular</h2>
          </div>
          <div className={scss.headerClient}>
            <input
              type="text"
              placeholder="Search Cinema..."
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Link href={`/movie/search/${inputSearch}`}>
              <IoMdSearch />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
