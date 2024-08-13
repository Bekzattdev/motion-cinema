"use client";
import { useMovieQuery } from "@/redux/api/movie";
import scss from "./MovieSearch.module.scss";

interface MovieSearchProps {
  query: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ query }) => {
  const { data, isLoading } = useMovieQuery();
  const filteredMovies = data?.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={scss.searchResults}>
      <h1>Результаты поиска для "{query}"</h1>
      {filteredMovies?.length ? (
        filteredMovies.map((movie) => (
          <div key={movie.title} className={scss.searchItem}>
            <a href={`/movie/${movie.title}`}>{movie.title}</a>
          </div>
        ))
      ) : (
        <p>Фильмы не найдены</p>
      )}
    </div>
  );
};

export default MovieSearch;
