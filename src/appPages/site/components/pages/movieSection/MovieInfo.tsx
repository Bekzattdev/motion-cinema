"use client";
import { useGetOneMovieQuery } from "@/redux/api/movie";
import React, { useEffect } from "react";
import scss from "./MovieInfo.module.scss";
import { IoStar } from "react-icons/io5";
import Header from "../../layout/header/Header";
import WatchMovie from "./WatchMovie";
import { useParams } from "next/navigation";

const MovieInfo: React.FC = () => {

  const { id } = useParams();
  const { data: item, isLoading } = useGetOneMovieQuery(+id);

  useEffect(() => {
    if (item) {
      console.log("Данные получены:", item);
    }
  }, [item]);

  console.log(id, "title");

  if (isLoading) {
    return <p>Загрузка...</p>;
  } else if (!item) {
    return <p>Нет данных для отображения :(</p>;
  }

  return (
    <>
      <Header />
      {/* {data.map((item, index) => ( */}
      <div className={scss.movie}>
        <div className={scss.movieBg}>
          <div className="container">
            <div className={scss.movieHome}>
              <div className={scss.movieDetails}>
                <div className={scss.movieImg}>
                  <h2>{item.title}</h2>
                  <h3>{item.title_en}</h3>
                  <img src={item.poster} alt="img" />
                </div>
                <div className={scss.movieText}>
                  <ul>
                    <li>
                      Дата Выхода: <span>{item!.year} </span>
                    </li>
                    <li>
                      Слоган: <span>{item!.tagline} </span>
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
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
      <WatchMovie />
    </>
  );
};

export default MovieInfo;

// "use client";
// import { useEffect } from "react";
// import axios from "axios";

// const TestMovieRequest = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://16.170.243.18:8000/ru/movie/2"
//         );
//         console.log("Response:", response.data);
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <div>Check console for movie data</div>;
// };

// export default TestMovieRequest;
