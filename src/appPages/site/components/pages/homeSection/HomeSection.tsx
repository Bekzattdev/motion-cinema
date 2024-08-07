"use client";
import { useMovieQuery } from "@/redux/api/movie";
import scss from "./HomeSection.module.scss";
import { log } from "console";
import { IoStar } from "react-icons/io5";

const HomeSection = () => {
  const { data } = useMovieQuery();
  console.log("HomeSEction", data);

  return (
    <section>
      <div className="container">
        <div className={scss.homeCinema}>
          <h1>Лучшие Фильмы</h1>
          {data?.map((item, index) => (
            <div key={index} className={scss.homeBlock}>
              <img src={item.poster} alt="img" className={scss.homeImg} />
              <div className={scss.homeText}>
                <h2>{item.title}</h2>
                <div className={scss.date}>
                  <h3>
                    {item.slug},{item.country}
                  </h3>
                  <div className={scss.cinemaStar}>
                    <a className="" style={{
                      color: item.star >= 1 ? 'yellow' : 'gray'
                    }}>
                      <IoStar />
                    </a>
                    <a className="" style={{
                      color: item.star >= 2 ? 'yellow' : 'gray'
                    }}>
                      <IoStar />
                    </a>
                    <a className="" style={{
                      color: item.star >= 3 ? 'yellow' : 'gray'
                    }}>
                      <IoStar />
                    </a>
                    <a className="" style={{
                      color: item.star >= 4 ? 'yellow' : 'gray'
                    }}>
                      <IoStar />
                    </a>
                    <a className="" style={{
                      color: item.star >= 5 ? 'yellow' : 'gray'
                    }}>
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
    </section>
  );
};

export default HomeSection;
