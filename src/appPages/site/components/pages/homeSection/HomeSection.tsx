"use client";
import { useMovieQuery } from "@/redux/api/movie";
import scss from "./HomeSection.module.scss";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const HomeSection = () => {
  const { data } = useMovieQuery();
  return (
    <section>
      <div className="container">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
