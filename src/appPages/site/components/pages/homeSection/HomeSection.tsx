"use client";
import { useMovieQuery } from "@/redux/api/movie";
import scss from "./HomeSection.module.scss";
const HomeSection = () => {
  const { data } = useMovieQuery();
  return (
    <section>
      <div className="container">
        <div>
          {data?.map((item, index) => (
            <div key={index}>
              <img src={item.poster} alt="img" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
