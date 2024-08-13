"use client";
import { useMovieQuery } from "@/redux/api/movie";
<<<<<<< HEAD
=======
import scss from "./HomeSection.module.scss";
>>>>>>> 3519c62d87e8b06dc7bc8705f5e30e9903c86d1b
import { IoStar } from "react-icons/io5";
import scss from "./HomeSection.module.scss";
import Link from "next/link";
import { useState } from "react";

const HomeSection = () => {
  const { data } = useMovieQuery();
<<<<<<< HEAD
  console.log("HomeSEction", data);
  
=======
  console.log("HomeSection", data);
>>>>>>> 3519c62d87e8b06dc7bc8705f5e30e9903c86d1b

  return (
    <section>
      <div className="container">
<<<<<<< HEAD
        <div className={scss.homeCinema}>
          <div className={scss.filter}>
          <h1>Лучшие Фильмы</h1>
          <select>
            <option value="">Filter</option>
            <option value="popular">Popular</option>
            <option value="unpopular">Unpopular</option>
          </select>
          </div>
          <div className={scss.allHomeBlock}>
          {data?.map((item, index) => (
            <div key={index} className={scss.homeBlock}>
              <Link href={`/movie/info/${item._id}`}>
                <img src={item.poster} alt="img" className={scss.homeImg} />
              </Link>
              <div className={scss.homeText}>
                <h2>{item.title}</h2>
                <div className={scss.date}>
                  <h3>
                    {item.slug},{item.country}
                  </h3>
                  <div className={scss.cinemaStar}>
                    <a
                      className=""
                      style={{
                        color: item.star >= 1 ? "yellow" : "gray",
                      }}
                    >
                      <IoStar />
                    </a>
                    <a
                      className=""
                      style={{
                        color: item.star >= 2 ? "yellow" : "gray",
                      }}
                    >
                      <IoStar />
                    </a>
                    <a
                      className=""
                      style={{
                        color: item.star >= 3 ? "yellow" : "gray",
                      }}
                    >
                      <IoStar />
                    </a>
                    <a
                      className=""
                      style={{
                        color: item.star >= 4 ? "yellow" : "gray",
                      }}
                    >
                      <IoStar />
                    </a>
                    <a
                      className=""
                      style={{
                        color: item.star >= 5 ? "yellow" : "gray",
                      }}
                    >
                      <IoStar />
                    </a>
                    <h4>{item.star}.0</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
=======
        <div className={scss.mainSection}>
          <h1>Лучшие Фильмы</h1>
          <div className={scss.homeCinema}>
            {data?.map((item, index) => (
              <div key={index} className={scss.homeBlock}>
                <Link href={`/movie/${item.id}`}>
                  <img src={item.poster} alt="img" className={scss.homeImg} />
                </Link>
                <div className={scss.homeText}>
                  <h2>{item.title}</h2>
                  <div className={scss.date}>
                    <h3>
                      {item.slug},{item.country}
                    </h3>
                    <div className={scss.cinemaStar}>
                      <a
                        className=""
                        style={{
                          color: item.star >= 1 ? "yellow" : "gray",
                        }}
                      >
                        <IoStar />
                      </a>
                      <a
                        className=""
                        style={{
                          color: item.star >= 2 ? "yellow" : "gray",
                        }}
                      >
                        <IoStar />
                      </a>
                      <a
                        className=""
                        style={{
                          color: item.star >= 3 ? "yellow" : "gray",
                        }}
                      >
                        <IoStar />
                      </a>
                      <a
                        className=""
                        style={{
                          color: item.star >= 4 ? "yellow" : "gray",
                        }}
                      >
                        <IoStar />
                      </a>
                      <a
                        className=""
                        style={{
                          color: item.star >= 5 ? "yellow" : "gray",
                        }}
                      >
                        <IoStar />
                      </a>
                      <h4>{item.star}.0</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> 3519c62d87e8b06dc7bc8705f5e30e9903c86d1b
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
