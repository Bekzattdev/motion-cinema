"use client";
import { useGetOneMovieQuery } from "@/redux/api/movie";
import React, { useEffect, useRef, useState } from "react";
import scss from "./MovieInfo.module.scss";
import { useParams } from "next/navigation";

const WatchMovie: React.FC = () => {
  // const { data, isLoading } = useMovieQuery();
  const { id } = useParams();
  const { data: item, isLoading } = useGetOneMovieQuery(+id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(item, "movieone");

  useEffect(() => {
    if (item) {
      console.log("Данные получены:", item);
    }
  }, [item]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  } else if (!item) {
    return <p>Нет данных для отображения</p>;
  }
  // "воспроизведение"
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // <>
    /* {data.map((item, index) => ( */
    <>
      <div className={scss.movieVideo}>
        <h1 className={scss.movieTitle}>Смотреть Фильм</h1>
        <div className={scss.videoContainer} onClick={handleVideoClick}>
          <video
            ref={videoRef}
            poster="posterimage.jpg"
            className={scss.video}
            controls
          >
            <source src={item.video} type="video/mp4" />
          </video>
          {isPlaying && <div className={scss.playButton}>▶</div>}
        </div>
      </div>
    </>
    //   ))}
    // </>
  );
};

export default WatchMovie;
