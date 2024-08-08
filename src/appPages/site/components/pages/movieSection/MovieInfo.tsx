"use client";
import { useGetOneMovieQuery, useMovieQuery } from "@/redux/api/movie";
import React, { useEffect } from "react";
import scss from "./MovieInfo.module.scss";
import { IoStar } from "react-icons/io5";
import Header from "../../layout/header/Header";

const MovieInfo: React.FC = () => {
  const { data, isLoading } = useMovieQuery();
  const { data: oneMovie } = useGetOneMovieQuery(1);
  console.log(oneMovie,"fdg");
  

  useEffect(() => {
    if (data) {
      console.log("Данные получены:", data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  } else if (!data) {
    return <p>Нет данных для отображения</p>;
  }

  return (
    <>
      <Header />
      <div className={scss.movie}>
        <div className={scss.movieBg}>
          <div className="container">
            {data.map((item,index) => (
              <div className={scss.movieHome} key={index}>
                <div className={scss.movieDetails}>
                  <div className={scss.movieImg}>
                    <h2>{item.title}</h2>
                    <h3>{item.title_en}</h3>
                    <img src={item.poster} alt="img" />
                  </div>
                  <div className={scss.movieText}>
                    <ul>
                      <li>
                        Дата Выхода: <span>{item.year} </span>
                      </li>
                      <li>
                        Слоган: <span>{item.tagline} </span>
                      </li>
                      <li>
                        В Качестве: <span>{item.quality} </span>
                      </li>
                      <li>
                        Страна: <span>{item.country} </span>
                      </li>
                      <li>
                        Бюджет: <span>{item.budget}$ </span>
                      </li>
                      <li>
                        Сборы в мире: <span>{item.fees_in_usa} $</span>
                      </li>
                      <li>
                        Качество: <span> {item.quality}</span>
                      </li>
                      <li>
                        Рейтинг:{" "}
                        {
                          <div className={scss.allStar}>
                            <a className="">
                              <IoStar
                                style={{
                                  color: item.star >= 1 ? "yellow" : "gray",
                                }}
                              />
                            </a>
                            <a className="">
                              <IoStar
                                style={{
                                  color: item.star >= 2 ? "yellow" : "gray",
                                }}
                              />
                            </a>
                            <a className="">
                              <IoStar
                                style={{
                                  color: item.star >= 3 ? "yellow" : "gray",
                                }}
                              />
                            </a>
                            <a className="">
                              <IoStar
                                style={{
                                  color: item.star >= 4 ? "yellow" : "gray",
                                }}
                              />
                            </a>
                            <a className="">
                              <IoStar
                                style={{
                                  color: item.star >= 5 ? "yellow" : "gray",
                                }}
                              />
                            </a>
                          </div>
                        }
                        <span className={scss.star}> {item.star}.0 </span>
                      </li>
                    </ul>
                    <p>
                      Описание: <span>{item.description}</span>
                    </p>
                  </div>
                </div>
                {/* <div className={scss.movieVideo}>
              <h1>Смотреть Фильм</h1>
              <video autoPlay muted loop poster="posterimage.jpg">
              <source src={item.video} type="video/mp4" />
              </video>
            </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
