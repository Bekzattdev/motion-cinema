"use client";
import { useMovieQuery } from "@/redux/api/movie";
import React, { useEffect } from "react";
import scss from "./MovieInfo.module.scss";

const MovieInfo: React.FC = () => {
  const { data, isLoading } = useMovieQuery();
// header
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
    <div>
      <h1>Information</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <ul>
            <li>Год: {item.year}</li>
            <li>Страна: {item.country}</li>
            <li>Бюджет: {item.budget}</li>
            <li>Сборы в США: {item.fees_in_usa}</li>
            <li>Сборы в мире: {item.fees_in_world}</li>
            <li>Качество: {item.quality}</li>
            <li>Рейтинг: {item.star}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieInfo;
